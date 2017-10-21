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
var Visualisation = (function (_super) {
    __extends(Visualisation, _super);
    function Visualisation(name) {
        var _this = _super.call(this, 'visualisation', name) || this;
        _this.setPorts(140, 141);
        return _this;
    }
    return Visualisation;
}(omx.Component));
exports.Visualisation = Visualisation;
