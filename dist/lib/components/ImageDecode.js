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
var ImageDecode = (function (_super) {
    __extends(ImageDecode, _super);
    function ImageDecode(name) {
        var _this = _super.call(this, 'image_decode', name) || this;
        _this.setPorts(320, 321);
        return _this;
    }
    ImageDecode.prototype.setInputFormat = function (eCompressionFormat) {
        var format = this.getParameter(this.in_port, omx.INDEXTYPE.IndexParamImagePortFormat);
        format.eCompressionFormat = eCompressionFormat;
        this.setParameter(this.in_port, omx.INDEXTYPE.IndexParamImagePortFormat, format);
        return this;
    };
    ;
    return ImageDecode;
}(omx.Component));
exports.ImageDecode = ImageDecode;
