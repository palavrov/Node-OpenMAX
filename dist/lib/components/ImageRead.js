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
var ImageRead = (function (_super) {
    __extends(ImageRead, _super);
    function ImageRead(name) {
        var _this = _super.call(this, 'image_read', name) || this;
        _this.setPorts(0, 310);
        return _this;
    }
    return ImageRead;
}(omx.Component));
exports.ImageRead = ImageRead;
