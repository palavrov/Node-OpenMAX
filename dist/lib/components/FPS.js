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
var stream = require("stream");
var FPS = (function (_super) {
    __extends(FPS, _super);
    function FPS(ms) {
        if (ms === void 0) { ms = 1000; }
        var _this = _super.call(this) || this;
        _this.ms = ms;
        _this.fps = 0;
        _this.numFrame = 0;
        _this.lastSec = +Date.now();
        var self = _this;
        _this.on('pipe', function (source) {
            source.on('portDefinitionChanged', function (portDefinition) {
                self.emit('portDefinitionChanged', portDefinition);
            });
        });
        return _this;
    }
    FPS.prototype._read = function () {
    };
    ;
    FPS.prototype._write = function (chunk, enc, next) {
        this.numFrame++;
        var newTime = +Date.now();
        if (newTime >= this.lastSec + this.ms) {
            this.fps = this.numFrame * (1000 / this.ms);
            this.numFrame = 0;
            this.lastSec = newTime;
            console.log("FPS: ", this.fps);
        }
        this.push(chunk);
        next();
    };
    ;
    return FPS;
}(stream.Duplex));
exports.FPS = FPS;
