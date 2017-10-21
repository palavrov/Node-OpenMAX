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
var ReadMedia = (function (_super) {
    __extends(ReadMedia, _super);
    function ReadMedia(name) {
        var _this = _super.call(this, 'read_media', name) || this;
        _this.setPorts(113, 110);
        return _this;
    }
    return ReadMedia;
}(omx.Component));
exports.ReadMedia = ReadMedia;
