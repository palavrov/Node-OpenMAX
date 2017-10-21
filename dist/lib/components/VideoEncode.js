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
var omx = require("../../index");
var VideoEncode = (function (_super) {
    __extends(VideoEncode, _super);
    function VideoEncode(name) {
        var _this = _super.call(this, 'video_encode', name) || this;
        _this.setPorts(200, 201);
        return _this;
    }
    VideoEncode.prototype.setVideoPortFormat = function (eCompressionFormat) {
        var format = {
            eCompressionFormat: eCompressionFormat
        };
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexParamVideoPortFormat, format);
        return this;
    };
    ;
    return VideoEncode;
}(omx.Component));
exports.VideoEncode = VideoEncode;
