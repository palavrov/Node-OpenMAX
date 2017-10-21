"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_OMX = require('bindings')('Node_OMX');
var Graphics = (function () {
    function Graphics() {
        this.graphics = Node_OMX.Graphics();
    }
    Graphics.prototype.beginFrame = function () {
        this.graphics.beginFrame();
    };
    Graphics.prototype.endFrame = function () {
        this.graphics.endFrame();
    };
    Graphics.prototype.drawTextureRect = function (texture, x0, y0, x1, y1) {
        this.graphics.drawTextureRect(texture.eglImage, x0, y0, x1, y1);
    };
    return Graphics;
}());
exports.Graphics = Graphics;
