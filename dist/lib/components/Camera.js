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
var clamp = require("clamp");
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(name) {
        var _this = _super.call(this, 'camera', name) || this;
        _this.setPorts(73, 71);
        return _this;
    }
    Camera.prototype.setFormat = function () {
        var vf = this.getParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
        vf.video.nSliceHeight = vf.video.nFrameHeight;
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexParamPortDefinition, vf);
        return this;
    };
    ;
    Camera.prototype.enable = function () {
        var format = this.getParameter(this.out_port, omx.INDEXTYPE.IndexConfigPortCapturing);
        format.bEnabled = true;
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexConfigPortCapturing, format);
        return this;
    };
    ;
    Camera.prototype.disable = function () {
        var format = this.getParameter(this.out_port, omx.INDEXTYPE.IndexConfigPortCapturing);
        format.bEnabled = false;
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexConfigPortCapturing, format);
        return this;
    };
    ;
    Camera.prototype.getDigitalZoom = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonDigitalZoom);
        return p.xWidth;
    };
    Camera.prototype.setDigitalZoom = function (zoom) {
        if (zoom === undefined)
            zoom = omx.CameraZoom.CAMERA_ZOOM_1X;
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonDigitalZoom, new omx.CONFIG_SCALEFACTORTYPE({
            xWidth: zoom,
            xHeight: zoom
        }));
    };
    Camera.prototype.getCamplusId = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexParamCameraCamplusId);
        return p.nU32;
    };
    Camera.prototype.setCamplusId = function (nU32) {
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexParamCameraCamplusId, {
            nU32: nU32
        });
    };
    Camera.prototype.getCameraDeviceNumber = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexParamCameraDeviceNumber);
        return p.nU32;
    };
    Camera.prototype.setCameraDeviceNumber = function (nU32) {
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexParamCameraDeviceNumber, {
            nU32: nU32
        });
    };
    Camera.prototype.getCameraDevicesPresent = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexParamCameraDevicesPresent);
        return p.nU32;
    };
    Camera.prototype.getFrameStabilisation = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonFrameStabilisation);
        return p.bStab;
    };
    Camera.prototype.setFrameStabilisation = function (enabled) {
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonFrameStabilisation, { bStab: enabled });
    };
    Camera.prototype.getExposure = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonExposure);
        return p.eExposureControl;
    };
    Camera.prototype.setExposure = function (exposureControl) {
        if (exposureControl === undefined)
            exposureControl = omx.EXPOSURECONTROLTYPE.ExposureControlAuto;
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonExposure, { eExposureControl: exposureControl });
    };
    Camera.prototype.getExposureValue = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonExposureValue);
        return p;
    };
    Camera.prototype.setExposureValue = function (value) {
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonExposureValue, value);
    };
    Camera.prototype.getFocusControl = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigFocusControl);
        return p.nFocusSteps;
    };
    Camera.prototype.setFocusControl = function (nContrast) {
        if (nContrast === undefined)
            nContrast = 0;
        nContrast = clamp(nContrast, -100, 100);
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigFocusControl, { nContrast: nContrast });
    };
    Camera.prototype.getContrast = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonContrast);
        return p.nContrast;
    };
    Camera.prototype.setContrast = function (nContrast) {
        if (nContrast === undefined)
            nContrast = 0;
        nContrast = clamp(nContrast, -100, 100);
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonContrast, { nContrast: nContrast });
    };
    Camera.prototype.getBrightness = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonBrightness);
        return p.nBrightness;
    };
    Camera.prototype.setBrightness = function (nBrightness) {
        if (nBrightness === undefined)
            nBrightness = 50;
        nBrightness = clamp(nBrightness, 0, 100);
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonBrightness, { nBrightness: nBrightness });
    };
    Camera.prototype.getSaturation = function () {
        var p = this.getParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonSaturation);
        return p.nSaturation;
    };
    Camera.prototype.setSaturation = function (nSaturation) {
        if (nSaturation === undefined)
            nSaturation = 0;
        nSaturation = clamp(nSaturation, -100, 100);
        this.setParameter(omx.ALL, omx.INDEXTYPE.IndexConfigCommonSaturation, { nSaturation: nSaturation });
    };
    Camera.prototype.getVideoFramerate = function () {
        var p = this.getParameter(this.out_port, omx.INDEXTYPE.IndexConfigVideoFramerate);
        return p.xEncodeFramerate >> 16;
    };
    Camera.prototype.setVideoFramerate = function (fps) {
        if (fps === undefined)
            fps = 30;
        this.setParameter(this.out_port, omx.INDEXTYPE.IndexConfigVideoFramerate, { xEncodeFramerate: fps << 16 });
    };
    return Camera;
}(omx.Component));
exports.Camera = Camera;
