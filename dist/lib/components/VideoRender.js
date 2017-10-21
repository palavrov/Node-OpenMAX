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
var VideoRender = (function (_super) {
    __extends(VideoRender, _super);
    function VideoRender(name) {
        var _this = _super.call(this, 'video_render', name) || this;
        _this.setPorts(90, 0);
        return _this;
    }
    VideoRender.prototype.setBufferCount = function (countIN) {
        var portdef = this.getParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition);
        portdef.nBufferCountActual = Math.max(countIN, portdef.nBufferCountMin);
        this.setParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);
        return this;
    };
    ;
    return VideoRender;
}(omx.Component));
exports.VideoRender = VideoRender;
