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
var async = require('async');
var graphics = new omx.Graphics();
var allWS = [];
var WritableFilter = (function (_super) {
    __extends(WritableFilter, _super);
    function WritableFilter(offsetX, offsetY, width, height) {
        var _this = _super.call(this, {
            objectMode: true
        }) || this;
        _this.offsetX = offsetX;
        _this.offsetY = offsetY;
        _this.width = width;
        _this.height = height;
        _this.x0 = _this.offsetX * 2 - 1;
        _this.y0 = -(_this.offsetY * 2 - 1);
        _this.x1 = _this.x0 + _this.width * 2;
        _this.y1 = _this.y0 - _this.height * 2;
        _this.fps = require('fps')({ every: 30 });
        _this.fps.on('data', function (framerate) {
            console.log("Fps : ", framerate);
        });
        return _this;
    }
    WritableFilter.prototype._write = function (chunk, enc, next) {
        this.fps.tick();
        this.texture = chunk;
        if (chunk.onBufferDone) {
            chunk.onBufferDone();
        }
        next();
    };
    ;
    return WritableFilter;
}(stream.Writable));
var drawfps = require('fps')({ every: 30 });
drawfps.on('data', function (framerate) {
    console.log("Fps draw : ", framerate);
});
function draw() {
    graphics.beginFrame();
    allWS.forEach(function (ws) {
        if (ws.texture === undefined)
            return;
        graphics.drawTextureRect(ws.texture, ws.x0, ws.y0, ws.x1, ws.y1);
    });
    graphics.endFrame();
    drawfps.tick();
}
setInterval(draw, 1000 / 30);
function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}
(function () {
    var rows = 4;
    var cols = 4;
    async.each(range(1, rows * cols), function (i, callback) {
        var VideoDecode;
        var EglRender;
        var fps = new omx.FPS();
        VideoDecode = new omx.VideoDecode('VideoDecode' + i);
        var coli = (i - 1) % cols;
        var rowi = Math.floor((i - 1) / cols);
        var rw = 1 / cols;
        var rh = 1 / rows;
        var rx = coli * rw;
        var ry = rowi * rh;
        var ws = new WritableFilter(rx, ry, rw, rh);
        allWS.push(ws);
        VideoDecode.init()
            .then(function () {
            EglRender = new omx.EglRender();
            return EglRender.init();
        })
            .then(function () {
            VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
            VideoDecode.setBufferCount(1, 1);
            EglRender.setBufferCount(1, 1);
            EglRender.graphics = graphics;
            console.time("start");
            fs.createReadStream("spec/data/video-LQ-640.h264")
                .pipe(VideoDecode)
                .tunnel(EglRender)
                .pipe(ws)
                .on('finish', function () {
                console.log("Done");
            });
            console.log('iter', i++);
            callback();
        })
            .catch(console.log.bind(console));
    });
})();
