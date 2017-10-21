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
var stream = require("stream");
var omx = require("../index");
var TransformFilter = (function (_super) {
    __extends(TransformFilter, _super);
    function TransformFilter() {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.on('pipe', function (source) {
            source.on('portDefinitionChanged', function (portDefinition) {
                self.portDefinition = portDefinition;
                self.emit('portDefinitionChanged', portDefinition);
            });
        });
        _this.on('finish', function () {
            this.push(null);
        });
        return _this;
    }
    TransformFilter.prototype._read = function () {
    };
    ;
    TransformFilter.prototype._write = function (chunk, enc, next) {
        for (var x = 0; x < 200; x++) {
            for (var y = 0; y < 200; y++) {
                chunk.writeUInt8(0x0, y * this.portDefinition.video.nStride + x);
            }
        }
        this.push(chunk);
        next();
    };
    ;
    return TransformFilter;
}(stream.Duplex));
var Clock = new omx.Clock();
var Camera = new omx.Camera();
var VideoRender = new omx.VideoRender();
var tf = new TransformFilter();
omx.Component.initAll([Clock, Camera, VideoRender])
    .then(function () {
    Camera.setFormat().enable();
    Clock.run();
    Clock
        .tunnel(Camera)
        .pipe(tf)
        .pipe(VideoRender)
        .on('finish', function () {
        console.log("Done");
    });
})
    .catch(console.log.bind(console, "Error:"));
setTimeout(function () {
    Clock.stop();
}, 5000);
