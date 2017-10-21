"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_OMX = require('bindings')('Node_OMX');
var EglImage = (function () {
    function EglImage(graphics, texture) {
        this.eglImage = Node_OMX.EglImage(graphics, texture);
    }
    return EglImage;
}());
exports.EglImage = EglImage;
