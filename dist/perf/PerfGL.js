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
omx.Component.verbose = omx.VERBOSE_LEVEL.None;
var VideoDecode;
VideoDecode = new omx.VideoDecode('VideoDecode');
var EglRender;
var WritableFilter = (function (_super) {
    __extends(WritableFilter, _super);
    function WritableFilter() {
        var _this = _super.call(this, {
            objectMode: true
        }) || this;
        _this.graphics = new omx.Graphics();
        _this.fps = require('fps')({ every: 30 });
        _this.fps.on('data', function (framerate) {
            console.log("Fps : ", framerate);
        });
        return _this;
    }
    WritableFilter.prototype._write = function (chunk, enc, next) {
        try {
            this.fps.tick();
            var self = this;
            self.graphics.beginFrame();
            self.graphics.drawTextureRect(chunk, -1, 1, 1, -1);
            self.graphics.endFrame();
            if (chunk.onBufferDone) {
                chunk.onBufferDone();
            }
            next();
        }
        catch (err) {
            console.log(err);
        }
    };
    ;
    return WritableFilter;
}(stream.Writable));
var ws = new WritableFilter();
VideoDecode.init()
    .then(function () {
    EglRender = new omx.EglRender();
    return EglRender.init();
})
    .then(function () {
    VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
    VideoDecode.setBufferCount(1, 1);
    EglRender.setBufferCount(1, 4);
    EglRender.graphics = ws.graphics;
    console.time("start");
    fs.createReadStream("spec/data/test.h264")
        .pipe(VideoDecode)
        .tunnel(EglRender)
        .pipe(ws)
        .on('finish', function () {
        console.timeEnd("start");
        console.log("Done");
    });
})
    .catch(console.log.bind(console));
