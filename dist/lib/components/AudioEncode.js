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
var AudioEncode = (function (_super) {
    __extends(AudioEncode, _super);
    function AudioEncode(name) {
        var _this = _super.call(this, 'audio_encode', name) || this;
        _this.setPorts(160, 161);
        return _this;
    }
    return AudioEncode;
}(omx.Component));
exports.AudioEncode = AudioEncode;
