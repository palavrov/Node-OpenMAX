import fs = require('fs');
import omx = require('../../');
import stream = require('stream');

class WritableFilter extends stream.Writable {
  constructor() {
    super();
  }
  _write(chunk, enc, next) {
    next();
    if (chunk.onBufferDone) {
      chunk.onBufferDone();
    }
  };
}

describe("VideoDecode", function() {
  var VideoDecode: omx.VideoDecode;
  var ws: WritableFilter;

  beforeEach(function(done) {
    VideoDecode = new omx.VideoDecode();
    VideoDecode.init()
      .then(function() {
        done();
      })
      .catch(console.log.bind(console));
    ws = new WritableFilter();
  });

  afterEach(function(done) {
    VideoDecode.close()
      .then(function() {
        done();
      })
  });

  it("should have right ports", function() {
    expect(VideoDecode.in_port).toEqual(130);
    expect(VideoDecode.out_port).toEqual(131);
  });

  it("should have the right format", function() {
    var f = VideoDecode.getParameter(VideoDecode.in_port, omx.OMX_INDEXTYPE.OMX_IndexParamVideoPortFormat);
    expect(f).toEqual({
      nIndex: 0,
      eCompressionFormat: 4,
      eColorFormat: 20,
      xFramerate: 0
    });
  });

  it("should have the right port definition", function() {
    var f = VideoDecode.getParameter(VideoDecode.out_port, omx.OMX_INDEXTYPE.OMX_IndexParamPortDefinition);
    expect(f).toEqual({
      eDir: 1,
      nBufferCountActual: 1,
      nBufferCountMin: 1,
      nBufferSize: 115200,
      bEnabled: 0,
      bPopulated: 0,
      eDomain: 1,
      video: {
        pNativeRender: false,
        nFrameWidth: 320,
        nFrameHeight: 240,
        nStride: 320,
        nSliceHeight: 240,
        nBitrate: 0,
        xFramerate: 0,
        bFlagErrorConcealment: 0,
        eCompressionFormat: 0,
        eColorFormat: 20,
        pNativeWindow: false
      }
    });
  });

  it("should set video port format", function() {
    VideoDecode.setVideoPortFormat(omx.OMX_VIDEO_CODINGTYPE.OMX_VIDEO_CodingAVC);
  });

  it("should trigger port definition changed and have right settings", function(done) {
    var eventPortSettingsChanged = false;
    VideoDecode.setVideoPortFormat(omx.OMX_VIDEO_CODINGTYPE.OMX_VIDEO_CodingAVC);
    fs.createReadStream("spec/data/video-LQ-30frames.h264")
      .pipe(VideoDecode)
      .pipe(ws)
      .on('finish', () => {
        expect(eventPortSettingsChanged).toBe(true);
        done();
      });

    VideoDecode.component.on("eventPortSettingsChanged", function() {
      var f = VideoDecode.getParameter(VideoDecode.out_port, omx.OMX_INDEXTYPE.OMX_IndexParamPortDefinition);
      expect(f).toEqual({
        eDir: 1,
        nBufferCountActual: 1,
        nBufferCountMin: 1,
        nBufferSize: 3133440,
        bEnabled: 0,
        bPopulated: 0,
        eDomain: 1,
        video: {
          pNativeRender: false,
          nFrameWidth: 1920,
          nFrameHeight: 1080,
          nStride: 1920,
          nSliceHeight: 1088,
          nBitrate: 0,
          xFramerate: 0,
          bFlagErrorConcealment: 0,
          eCompressionFormat: 0,
          eColorFormat: 20,
          pNativeWindow: false
        }
      });
      eventPortSettingsChanged = true;
    });
  });

});
