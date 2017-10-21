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
var fs = require("fs");
var omx = require("../../index");
var stream = require("stream");
var WritableFilter = (function (_super) {
    __extends(WritableFilter, _super);
    function WritableFilter() {
        return _super.call(this) || this;
    }
    WritableFilter.prototype._write = function (chunk, enc, next) {
        next();
        if (chunk.onBufferDone) {
            chunk.onBufferDone();
        }
    };
    ;
    return WritableFilter;
}(stream.Writable));
describe("VideoDecode", function () {
    var VideoDecode;
    var ws;
    beforeEach(function (done) {
        VideoDecode = new omx.VideoDecode();
        VideoDecode.init()
            .then(function () {
            done();
        })
            .catch(console.log.bind(console));
        ws = new WritableFilter();
    });
    afterEach(function (done) {
        VideoDecode.close()
            .then(function () {
            done();
        });
    });
    it("should have right ports", function () {
        expect(VideoDecode.in_port).toEqual(130);
        expect(VideoDecode.out_port).toEqual(131);
    });
    it("should have the right format", function () {
        var f = VideoDecode.getParameter(VideoDecode.in_port, omx.INDEXTYPE.IndexParamVideoPortFormat);
        expect(f).toEqual({
            nIndex: 0,
            eCompressionFormat: 4,
            eColorFormat: 20,
            xFramerate: 0
        });
    });
    it("should have the right port definition", function () {
        var f = VideoDecode.getParameter(VideoDecode.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
        expect(f).toEqual({
            eDir: 1,
            nBufferCountActual: 1,
            nBufferCountMin: 1,
            nBufferSize: 115200,
            bEnabled: false,
            bPopulated: false,
            eDomain: 1,
            video: {
                pNativeRender: false,
                nFrameWidth: 320,
                nFrameHeight: 240,
                nStride: 320,
                nSliceHeight: 240,
                nBitrate: 0,
                xFramerate: 0,
                bFlagErrorConcealment: false,
                eCompressionFormat: 0,
                eColorFormat: 20,
                pNativeWindow: false
            }
        });
    });
    it("should set video port format", function () {
        VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
    });
    it("should trigger port definition changed and have right settings", function (done) {
        var eventPortSettingsChanged = false;
        VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
        fs.createReadStream("spec/data/video-LQ-30frames.h264")
            .pipe(VideoDecode)
            .pipe(ws)
            .on('finish', function () {
            expect(eventPortSettingsChanged).toBe(true);
            done();
        });
        VideoDecode.component.on("eventPortSettingsChanged", function () {
            var f = VideoDecode.getParameter(VideoDecode.out_port, omx.INDEXTYPE.IndexParamPortDefinition);
            expect(f).toEqual({
                eDir: 1,
                nBufferCountActual: 1,
                nBufferCountMin: 1,
                nBufferSize: 3133440,
                bEnabled: false,
                bPopulated: false,
                eDomain: 1,
                video: {
                    pNativeRender: false,
                    nFrameWidth: 1920,
                    nFrameHeight: 1080,
                    nStride: 1920,
                    nSliceHeight: 1088,
                    nBitrate: 0,
                    xFramerate: 0,
                    bFlagErrorConcealment: false,
                    eCompressionFormat: 0,
                    eColorFormat: 20,
                    pNativeWindow: false
                }
            });
            eventPortSettingsChanged = true;
        });
    });
});
