"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_OMX = require('bindings')('Node_OMX');
var GfxTexture = (function () {
    function GfxTexture(width, height) {
        this.texture = Node_OMX.GfxTexture(width, height);
    }
    GfxTexture.prototype.setPixels = function (pixels) {
        this.texture.setPixels(pixels);
    };
    return GfxTexture;
}());
exports.GfxTexture = GfxTexture;
