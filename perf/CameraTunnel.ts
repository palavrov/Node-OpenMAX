import fs = require('fs');
import omx = require('../');


var Camera: omx.Camera;
var VideoRender: omx.VideoRender;

Camera = new omx.Camera();
Camera.init()
  .then(function() {
    VideoRender = new omx.VideoRender();
    return VideoRender.init();
  })
  .then(function() {
    Camera.enable();

    Camera.tunnel(VideoRender)
      .on('finish', function() {
        console.log("Done");
      });
  });