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
var EglRender = (function (_super) {
    __extends(EglRender, _super);
    function EglRender(name) {
        var _this = _super.call(this, 'egl_render', name) || this;
        _this.setPorts(220, 221);
        return _this;
    }
    EglRender.prototype.setBufferCount = function (countIN, countOUT) {
        var portdef = this.getParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition);
        portdef.nBufferCountActual = Math.max(countIN, portdef.nBufferCountMin);
        this.setParameter(this.in_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);
        portdef = this.getParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
        portdef.nBufferCountActual = Math.max(countOUT, portdef.nBufferCountMin);
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition, portdef);
        return this;
    };
    ;
    return EglRender;
}(omx.Component));
exports.EglRender = EglRender;
