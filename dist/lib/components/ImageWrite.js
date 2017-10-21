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
var ImageWrite = (function (_super) {
    __extends(ImageWrite, _super);
    function ImageWrite(name) {
        var _this = _super.call(this, 'image_write', name) || this;
        _this.setPorts(330, 0);
        return _this;
    }
    return ImageWrite;
}(omx.Component));
exports.ImageWrite = ImageWrite;
