import omx = require('../../index');
export declare class VideoDecode extends omx.Component {
    constructor(name?: string);
    setVideoPortFormat(eCompressionFormat: omx.VIDEO_CODINGTYPE): this;
    setBufferCount(countIN: number, countOUT: number): this;
}
