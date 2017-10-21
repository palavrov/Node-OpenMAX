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
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock(name) {
        var _this = _super.call(this, 'clock', name) || this;
        _this.setPorts(0, 80);
        return _this;
    }
    Clock.prototype.run = function () {
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexConfigTimeClockState, {
            eState: omx.TIME_CLOCKSTATE.TIME_ClockStateRunning
        });
        return this;
    };
    ;
    Clock.prototype.stop = function () {
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexConfigTimeClockState, {
            eState: omx.TIME_CLOCKSTATE.TIME_ClockStateStopped
        });
        this.emit('finish');
        return this;
    };
    ;
    return Clock;
}(omx.Component));
exports.Clock = Clock;
