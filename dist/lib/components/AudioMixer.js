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
var AudioMixer = (function (_super) {
    __extends(AudioMixer, _super);
    function AudioMixer(name) {
        var _this = _super.call(this, 'audio_mixer', name) || this;
        _this.setPorts(230, 231);
        return _this;
    }
    return AudioMixer;
}(omx.Component));
exports.AudioMixer = AudioMixer;
