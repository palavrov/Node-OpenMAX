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
var VideoDecode;
var VideoRender;
var fps = new omx.FPS(1000);
VideoDecode = new omx.VideoDecode('VideoDecode');
omx.Component.verbose = omx.VERBOSE_LEVEL.Debug;
omx.Component.logComponent = 'VideoDecode';
var WritableFilter = (function (_super) {
    __extends(WritableFilter, _super);
    function WritableFilter() {
        return _super.call(this) || this;
    }
    WritableFilter.prototype._write = function (chunk, enc, next) {
        if (chunk.onBufferDone) {
            chunk.onBufferDone();
        }
        next();
    };
    ;
    return WritableFilter;
}(stream.Writable));
var ReadableFilter = (function (_super) {
    __extends(ReadableFilter, _super);
    function ReadableFilter() {
        var _this = _super.call(this) || this;
        _this.fd = null;
        _this.chunkSize = 65536;
        _this.buffer = new Buffer(_this.chunkSize);
        _this.bufferID = 0;
        var self = _this;
        fs.open('spec/data/myth-160.h264', 'r', function (err, fd) {
            self.fd = fd;
        });
        return _this;
    }
    ReadableFilter.prototype._read = function () {
        if (this.fd === null)
            return;
        var self = this;
        console.log('_', 'start read');
        fs.read(this.fd, this.buffer, 0, this.chunkSize, null, function (err, bytesRead, buffer) {
            console.log('_', 'done read');
            console.log('_', 'start push');
            setTimeout(function () {
                var buf = new Buffer(bytesRead);
                buf.bufferID = self.bufferID++;
                buffer.copy(buf);
                self.push(buf);
                console.log('_', 'done push');
            }, 100);
        });
    };
    ;
    return ReadableFilter;
}(stream.Readable));
var ws = new WritableFilter();
var rs = new ReadableFilter();
VideoDecode.init()
    .then(function () {
    VideoRender = new omx.VideoRender();
    return VideoRender.init();
})
    .then(function () {
    VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
    VideoDecode.setBufferCount(1, 1);
    VideoRender.setBufferCount(2);
    console.time("start");
    fs.createReadStream("spec/data/myth-160.h264")
        .pipe(VideoDecode)
        .pipe(fps)
        .pipe(VideoRender)
        .on('finish', function () {
        console.timeEnd("start");
        console.log("Done");
    });
})
    .catch(console.log.bind(console));
setTimeout(gc, 100);
