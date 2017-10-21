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
var VideoDecode = (function (_super) {
    __extends(VideoDecode, _super);
    function VideoDecode(name) {
        var _this = _super.call(this, 'video_decode', name) || this;
        _this.setPorts(130, 131);
        return _this;
    }
    VideoDecode.prototype.setVideoPortFormat = function (eCompressionFormat) {
        var format = this.getParameter(this.in_port, omx.INDEXTYPE.IndexParamVideoPortFormat);
        format.eCompressionFormat = eCompressionFormat;
        this.setParameter(this.in_port, omx.INDEXTYPE.IndexParamVideoPortFormat, format);
        return this;
    };
    ;
    VideoDecode.prototype.setBufferCount = function (countIN, countOUT) {
        var portdef = this.getParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition);
        portdef.nBufferCountActual = Math.max(countIN, portdef.nBufferCountMin);
        portdef.nBufferSize = 65536;
        this.setParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);
        portdef = this.getParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
        portdef.nBufferCountActual = Math.max(countOUT, portdef.nBufferCountMin);
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);
        return this;
    };
    ;
    return VideoDecode;
}(omx.Component));
exports.VideoDecode = VideoDecode;
