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
var http = require('http');
var omx = require("../index");
var stream = require("stream");
var TransformFilter = (function (_super) {
    __extends(TransformFilter, _super);
    function TransformFilter() {
        return _super.call(this) || this;
    }
    TransformFilter.prototype._read = function () {
    };
    ;
    TransformFilter.prototype._write = function (chunk, enc, next) {
        console.log(chunk.length);
        this.push(chunk);
        next();
    };
    ;
    return TransformFilter;
}(stream.Duplex));
var transformFilter = new TransformFilter();
(function () {
    var VideoDecode;
    var VideoRender;
    VideoDecode = new omx.VideoDecode();
    VideoDecode.init()
        .then(function () {
        VideoRender = new omx.VideoRender();
        return VideoRender.init();
    })
        .then(function () {
        VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
        VideoDecode.setBufferCount();
        http.get("http://localhost:3000", function (response) {
            response
                .pipe(transformFilter)
                .pipe(VideoDecode)
                .pipe(VideoRender)
                .on('finish', function () {
                console.log("Done");
            });
        });
    });
})();
