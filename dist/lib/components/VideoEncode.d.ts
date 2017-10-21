import omx = require('../../index');
export declare class VideoEncode extends omx.Component {
    constructor(name?: string);
    setVideoPortFormat(eCompressionFormat: omx.VIDEO_CODINGTYPE): this;
}
