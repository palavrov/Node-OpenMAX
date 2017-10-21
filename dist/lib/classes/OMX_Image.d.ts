import omx = require('../../index');
export declare class IMAGE_PORTDEFINITIONTYPE {
    pNativeRender: any;
    nFrameWidth: number;
    nFrameHeight: number;
    nStride: number;
    nSliceHeight: number;
    bFlagErrorConcealment: boolean;
    eCompressionFormat: omx.IMAGE_CODINGTYPE;
    eColorFormat: omx.COLOR_FORMATTYPE;
    pNativeWindow: any;
    constructor(p?: any);
}
export declare class IMAGE_PARAM_PORTFORMATTYPE {
    nIndex: number;
    eCompressionFormat: omx.IMAGE_CODINGTYPE;
    eColorFormat: omx.COLOR_FORMATTYPE;
    constructor(p?: any);
}
export declare class IMAGE_PARAM_FLASHCONTROLTYPE {
    eFlashControl: omx.IMAGE_FLASHCONTROLTYPE;
    constructor(p?: any);
}
export declare class IMAGE_CONFIG_FOCUSCONTROLTYPE {
    eFocusControl: omx.IMAGE_FOCUSCONTROLTYPE;
    nFocusSteps: number;
    nFocusStepIndex: number;
    constructor(p?: any);
}
export declare class IMAGE_PARAM_QFACTORTYPE {
    nQFactor: number;
    constructor(p?: any);
}
export declare class IMAGE_PARAM_QUANTIZATIONTABLETYPE {
    eQuantizationTable: omx.IMAGE_QUANTIZATIONTABLETYPE;
    nQuantizationMatrix: number;
    constructor(p?: any);
}
export declare class IMAGE_PARAM_HUFFMANTTABLETYPE {
    eHuffmanTable: omx.IMAGE_HUFFMANTABLETYPE;
    nNumberOfHuffmanCodeOfLength: number;
    nHuffmanTable: number;
    constructor(p?: any);
}
