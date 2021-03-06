"use strict";
var stream = require('stream');
var omx = require('openmax');

var TransformFilter = require('stream').Duplex();
TransformFilter._read = function () {
};
TransformFilter._write = function (chunk, enc, next) {

  // Write a black square 200 x 200 in the Y channel of th YUV stream
  for (var x = 0; x < 200; x++) {
    for (var y = 0; y < 200; y++) {
      chunk.writeUInt8(0x0, y * this.portDefinition.video.nStride + x);
    }
  }

  this.push(chunk);

  next();
};
TransformFilter.on('pipe', function (source) {
  var self = this;
  source.on('portDefinitionChanged', function (portDefinition) {
    self.portDefinition = portDefinition;
    self.emit('portDefinitionChanged', portDefinition);
  });
});
TransformFilter.on('finish', function () {
  this.push(null);
});

var Clock = new omx.Clock();
var Camera = new omx.Camera();
var VideoRender = new omx.VideoRender();

omx.Component.initAll([Clock, Camera, VideoRender])
        .then(function () {
          Camera.setFormat().enable();
          Clock.run();

          Clock
                  .tunnel(Camera)
                  .pipe(TransformFilter)
                  .pipe(VideoRender)
                  .on('finish', function () {
                    console.log("Done");
                  });
        });
setTimeout(function () {
  Clock.stop();
}, 5000);
