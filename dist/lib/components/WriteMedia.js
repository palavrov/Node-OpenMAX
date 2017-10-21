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
var WriteMedia = (function (_super) {
    __extends(WriteMedia, _super);
    function WriteMedia(name) {
        var _this = _super.call(this, 'write_media', name) || this;
        _this.setPorts(170, 0);
        return _this;
    }
    return WriteMedia;
}(omx.Component));
exports.WriteMedia = WriteMedia;