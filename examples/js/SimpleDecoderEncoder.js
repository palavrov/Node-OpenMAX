"use strict";
var __extends = (this && this.__extends) || function (d, b) {
  for (var p in b)
    if (b.hasOwnProperty(p))
      d[p] = b[p];
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fps = require('fps')({every: 30});
var fs = require('fs');
var omx = require('openmax');
var stream = require('stream');
fps.on('data', function (framerate) {
  console.log("Fps: ", framerate);
});
var WriteFileFilter = (function (_super) {
  __extends(WriteFileFilter, _super);
  function WriteFileFilter() {
    _super.call(this);
    this.stream = fs.createWriteStream("../../spec/data/video-LQ-recode.h264");
    this.on('pipe', function (source) {
      var self = this;
      source.on('portDefinitionChanged', function (portDefinition) {
        self.emit('portDefinitionChanged', portDefinition);
      });
    });
  }
  WriteFileFilter.prototype._read = function () {
  };
  ;
  WriteFileFilter.prototype._write = function (chunk, enc, next) {
    this.stream.write(chunk);
    fps.tick();
    this.push(chunk);
    next();
  };
  ;
  return WriteFileFilter;
}(stream.Duplex));
var VideoDecode1 = new omx.VideoDecode('VideoDecode1');
var VideoDecode2 = new omx.VideoDecode('VideoDecode2');
var VideoEncode = new omx.VideoEncode();
var VideoRender = new omx.VideoRender();
var writeFileFilter = new WriteFileFilter();
omx.Component.initAll([VideoDecode1, VideoDecode2, VideoEncode, VideoRender])
        .then(function () {
          VideoDecode1.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
          VideoDecode2.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
          VideoEncode.setVideoPortFormat(omx.VIDEO_CODINGTYPE.VIDEO_CodingAVC);
          VideoEncode.component.setParameter(VideoEncode.out_port, omx.INDEXTYPE.IndexParamVideoBitrate, {
            eControlRate: omx.VIDEO_CONTROLRATETYPE.Video_ControlRateDisable
          });
          var quantizationType = VideoEncode.component.getParameter(VideoEncode.out_port, omx.INDEXTYPE.IndexParamVideoQuantization);
          quantizationType.nQpI = 43;
          quantizationType.nQpP = quantizationType.nQpI;
          VideoEncode.component.setParameter(VideoEncode.out_port, omx.INDEXTYPE.IndexParamVideoQuantization, quantizationType);
          var useTunnel = false;
          if (useTunnel) {
          } else {
            fs.createReadStream("../../spec/data/video-LQ.h264")
                    .pipe(VideoDecode1)
                    .pipe(VideoEncode)
                    .pipe(writeFileFilter)
                    .pipe(VideoDecode2)
                    .pipe(VideoRender)
                    .on('finish', function () {
                      console.log("Done");
                      process.exit();
                    });
          }
        });
