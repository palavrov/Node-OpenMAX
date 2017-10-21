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
var ImageEncode = (function (_super) {
    __extends(ImageEncode, _super);
    function ImageEncode(name) {
        var _this = _super.call(this, 'image_encode', name) || this;
        _this.setPorts(340, 341);
        return _this;
    }
    ImageEncode.prototype.setInputFormat = function (eCompressionFormat) {
        var format = this.getParameter(this.out_port, omx.INDEXTYPE.IndexParamImagePortFormat);
        format.eCompressionFormat = eCompressionFormat;
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexParamImagePortFormat, format);
        return this;
    };
    ;
    return ImageEncode;
}(omx.Component));
exports.ImageEncode = ImageEncode;
