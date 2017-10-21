"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var omx = require("../index");
var stream = require("stream");
var bufferFormat = {
    eDir: 1,
    nBufferCountActual: 1,
    nBufferCountMin: 1,
    nBufferSize: 3133440,
    bEnabled: 0,
    bPopulated: 0,
    eDomain: 1,
    video: {
        pNativeRender: false,
        nFrameWidth: 1920,
        nFrameHeight: 1080,
        nStride: 1920,
        nSliceHeight: 1088,
        nBitrate: 0,
        xFramerate: 0,
        bFlagErrorConcealment: 0,
        eCompressionFormat: 0,
        eColorFormat: 20,
        pNativeWindow: false
    }
};
var bufferFormatSize = bufferFormat.video.nStride * bufferFormat.video.nSliceHeight;
var buf = new Buffer(bufferFormat.nBufferSize);
buf.fill(0, 0, bufferFormatSize);
buf.fill(128, bufferFormatSize, bufferFormatSize + 2 * bufferFormatSize / 4);
var WritableFilter = (function (_super) {
    __extends(WritableFilter, _super);
    function WritableFilter(name, offsetX, offsetY, width, height) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.offsetX = offsetX;
        _this.offsetY = offsetY;
        _this.width = width;
        _this.height = height;
        var self = _this;
        _this.fps = require('fps')({ every: 30 });
        _this.fps.on('data', function (framerate) {
            console.log("Fps: ", name, framerate);
        });
        _this.on('pipe', function (source) {
            source.on('portDefinitionChanged', function (portDefinition) {
                self.portDefinition = portDefinition.image ? portDefinition.image : portDefinition.video;
                console.log(self.portDefinition);
                self.nStride = self.portDefinition.nStride;
                self.nSliceHeight = self.portDefinition.nSliceHeight;
            });
        });
        return _this;
    }
    WritableFilter.prototype._write = function (chunk, enc, next) {
        this.fps.tick();
        if (this.portDefinition.eColorFormat === omx.COLOR_FORMATTYPE.COLOR_FormatYUV420PackedPlanar) {
            omx.Component.copyAsync(chunk, buf, bufferFormat.video.nStride, bufferFormat.video.nSliceHeight, this.offsetX, this.offsetY, this.nStride, this.width, this.nSliceHeight, this.height, next);
        }
        if (chunk.onBufferDone) {
            chunk.onBufferDone();
        }
    };
    ;
    return WritableFilter;
}(stream.Writable));
var ReadableFilter = (function (_super) {
    __extends(ReadableFilter, _super);
    function ReadableFilter() {
        var _this = _super.call(this) || this;
        _this.firstPacket = true;
        _this.fps = require('fps')({ every: 30 });
        _this.fps.on('data', function (framerate) {
            console.log("Fps: out ", framerate);
        });
        return _this;
    }
    ReadableFilter.prototype._read = function () {
        var self = this;
        if (this.firstPacket) {
            this.firstPacket = false;
            this.emit('portDefinitionChanged', bufferFormat);
        }
        setTimeout(function () {
            self.fps.tick();
            self.push(buf);
        }, 1000 / 30);
    };
    ;
    return ReadableFilter;
}(stream.Readable));
var WriteFileFilter = (function (_super) {
    __extends(WriteFileFilter, _super);
    function WriteFileFilter() {
        var _this = _super.call(this) || this;
        _this.stream = fs.createWriteStream("spec/data/video-LQ-9.h264");
        return _this;
    }
    WriteFileFilter.prototype._read = function () {
    };
    ;
    WriteFileFilter.prototype._write = function (chunk, enc, next) {
        this.stream.write(chunk);
        this.push(chunk);
        next();
    };
    ;
    return WriteFileFilter;
}(stream.Duplex));
var WriteHTTP = (function (_super) {
    __extends(WriteHTTP, _super);
    function WriteHTTP() {
        var _this = _super.call(this) || this;
        _this.http = require('http');
        _this.res = null;
        var self = _this;
        _this.http.createServer(function (req, res) {
            console.log('createServer');
            res.writeHead(200, { 'Content-Type': 'Video/H264' });
            self.res = res;
            self.onConnection();
        }).listen(3000);
        return _this;
    }
    WriteHTTP.prototype._read = function () {
    };
    ;
    WriteHTTP.prototype._write = function (chunk, enc, next) {
        this.res.write(chunk);
        next();
    };
    ;
    return WriteHTTP;
}(stream.Duplex));
(function () {
    var rows = 4;
    var cols = 4;
    var width = 1920;
    var height = 1080;
    var i = 1;
    function loop() {
        var VideoDecode;
        var Resize;
        var fps = new omx.FPS();
        VideoDecode = new omx.VideoDecode('VideoDecode' + i);
        var coli = (i - 1) % cols;
        var rowi = Math.floor((i - 1) / cols);
        var rw = width / cols;
        var rh = height / rows;
        var rx = coli * rw;
        var ry = rowi * rh;
        var ws = new WritableFilter('count' + i, rx, ry, rw, rh);
        VideoDecode.init()
            .then(function () {
            VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
            VideoDecode.setBufferCount(4, 4);
            fs.createReadStream("spec/data/myth-160.h264")
                .pipe(VideoDecode)
                .pipe(ws)
                .on('finish', function () {
                console.log("Done");
            });
            console.log('iter', i++);
            if (i <= rows * cols) {
                loop();
            }
        });
    }
    var VideoEncode;
    var VideoRender;
    var readableFilter = new ReadableFilter();
    var writeFileFilter = new WriteFileFilter();
    var writeHTTP = new WriteHTTP();
    VideoEncode = new omx.VideoEncode();
    VideoEncode.init()
        .then(function () {
        VideoRender = new omx.VideoRender();
        return VideoRender.init();
    })
        .then(function () {
        VideoEncode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
        VideoEncode.component.setParameter(VideoEncode.out_port, omx.INDEXTYPE.IndexParamVideoBitrate, {
            eControlRate: omx.VIDEO_CONTROLRATETYPE.Video_ControlRateDisable
        });
        var quantizationType = VideoEncode.component.getParameter(VideoEncode.out_port, omx.INDEXTYPE.IndexParamVideoQuantization);
        quantizationType.nQpI = 25;
        quantizationType.nQpP = quantizationType.nQpI;
        VideoEncode.component.setParameter(VideoEncode.out_port, omx.INDEXTYPE.IndexParamVideoQuantization, quantizationType);
        readableFilter
            .pipe(VideoRender);
        loop();
    })
        .catch(console.log.bind(console));
})();
