"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var omx = require("../../index");
describe("SimpleVideoDecoderRenderSpec", function () {
    var VideoDecode;
    var VideoRender;
    beforeEach(function (done) {
        VideoDecode = new omx.VideoDecode();
        VideoDecode.init()
            .then(function () {
            VideoRender = new omx.VideoRender();
            return VideoRender.init();
        })
            .then(function () {
            done();
        });
    });
    it("should play simple video", function (done) {
        VideoDecode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
        fs.createReadStream("spec/data/video-LQ-30frames.h264")
            .pipe(VideoDecode)
            .pipe(VideoRender)
            .on('finish', function () {
            done();
        });
    });
});
