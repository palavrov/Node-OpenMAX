import omx = require('../../index');
export declare class VIDEO_PORTDEFINITIONTYPE {
    pNativeRender: any;
    nFrameWidth: number;
    nFrameHeight: number;
    nStride: number;
    nSliceHeight: number;
    nBitrate: number;
    xFramerate: number;
    bFlagErrorConcealment: boolean;
    eCompressionFormat: omx.VIDEO_CODINGTYPE;
    eColorFormat: omx.COLOR_FORMATTYPE;
    pNativeWindow: any;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_PORTFORMATTYPE {
    nIndex: number;
    eCompressionFormat: omx.VIDEO_CODINGTYPE;
    eColorFormat: omx.COLOR_FORMATTYPE;
    xFramerate: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_QUANTIZATIONTYPE {
    nQpI: number;
    nQpP: number;
    nQpB: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_VIDEOFASTUPDATETYPE {
    bEnableVFU: boolean;
    nFirstGOB: number;
    nFirstMB: number;
    nNumMBs: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_BITRATETYPE {
    eControlRate: omx.VIDEO_CONTROLRATETYPE;
    nTargetBitrate: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_MOTIONVECTORTYPE {
    eAccuracy: omx.VIDEO_MOTIONVECTORTYPE;
    bUnrestrictedMVs: boolean;
    bFourMV: boolean;
    sXSearchRange: number;
    sYSearchRange: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_INTRAREFRESHTYPE {
    eRefreshMode: omx.VIDEO_INTRAREFRESHTYPE;
    nAirMBs: number;
    nAirRef: number;
    nCirMBs: number;
    nPirMBs: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_ERRORCORRECTIONTYPE {
    bEnableHEC: boolean;
    bEnableResync: boolean;
    nResynchMarkerSpacing: number;
    bEnableDataPartitioning: boolean;
    bEnableRVLC: boolean;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_VBSMCTYPE {
    b16x16: boolean;
    b16x8: boolean;
    b8x16: boolean;
    b8x8: boolean;
    b8x4: boolean;
    b4x8: boolean;
    b4x4: boolean;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_H263TYPE {
    nPFrames: number;
    nBFrames: number;
    eProfile: omx.VIDEO_H263PROFILETYPE;
    eLevel: omx.VIDEO_H263LEVELTYPE;
    bPLUSPTYPEAllowed: boolean;
    nAllowedPictureTypes: number;
    bForceRoundingTypeToZero: boolean;
    nPictureHeaderRepetition: number;
    nGOBHeaderInterval: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_MPEG2TYPE {
    nPFrames: number;
    nBFrames: number;
    eProfile: omx.VIDEO_MPEG2PROFILETYPE;
    eLevel: omx.VIDEO_MPEG2LEVELTYPE;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_MPEG4TYPE {
    nSliceHeaderSpacing: number;
    bSVH: boolean;
    bGov: boolean;
    nPFrames: number;
    nBFrames: number;
    nIDCVLCThreshold: number;
    bACPred: boolean;
    nMaxPacketSize: number;
    nTimeIncRes: number;
    eProfile: omx.VIDEO_MPEG4PROFILETYPE;
    eLevel: omx.VIDEO_MPEG4LEVELTYPE;
    nAllowedPictureTypes: number;
    nHeaderExtension: number;
    bReversibleVLC: boolean;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_WMVTYPE {
    eFormat: omx.VIDEO_WMVFORMATTYPE;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_RVTYPE {
    eFormat: omx.VIDEO_RVFORMATTYPE;
    nBitsPerPixel: number;
    nPaddedWidth: number;
    nPaddedHeight: number;
    nFrameRate: number;
    nBitstreamFlags: number;
    nBitstreamVersion: number;
    nMaxEncodeFrameSize: number;
    bEnablePostFilter: boolean;
    bEnableTemporalInterpolation: boolean;
    bEnableLatencyMode: boolean;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_AVCTYPE {
    nSliceHeaderSpacing: number;
    nPFrames: number;
    nBFrames: number;
    bUseHadamard: boolean;
    nRefFrames: number;
    nRefIdx10ActiveMinus1: number;
    nRefIdx11ActiveMinus1: number;
    bEnableUEP: boolean;
    bEnableFMO: boolean;
    bEnableASO: boolean;
    bEnableRS: boolean;
    eProfile: omx.VIDEO_AVCPROFILETYPE;
    eLevel: omx.VIDEO_AVCLEVELTYPE;
    nAllowedPictureTypes: number;
    bFrameMBsOnly: boolean;
    bMBAFF: boolean;
    bEntropyCodingCABAC: boolean;
    bWeightedPPrediction: boolean;
    nWeightedBipredicitonMode: number;
    bconstIpred: boolean;
    bDirect8x8Inference: boolean;
    bDirectSpatialTemporal: boolean;
    nCabacInitIdc: number;
    eLoopFilterMode: omx.VIDEO_AVCLOOPFILTERTYPE;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_PROFILELEVELTYPE {
    eProfile: number;
    eLevel: number;
    nProfileIndex: number;
    constructor(p?: any);
}
export declare class VIDEO_CONFIG_BITRATETYPE {
    nEncodeBitrate: number;
    constructor(p?: any);
}
export declare class CONFIG_FRAMERATETYPE {
    xEncodeFramerate: number;
    constructor(p?: any);
}
export declare class CONFIG_INTRAREFRESHVOPTYPE {
    IntraRefreshVOP: boolean;
    constructor(p?: any);
}
export declare class CONFIG_MACROBLOCKERRORMAPTYPE {
    nErrMapSize: number;
    ErrMap: number;
    constructor(p?: any);
}
export declare class CONFIG_MBERRORREPORTINGTYPE {
    bEnabled: boolean;
    constructor(p?: any);
}
export declare class PARAM_MACROBLOCKSTYPE {
    nMacroblocks: number;
    constructor(p?: any);
}
export declare class VIDEO_PARAM_AVCSLICEFMO {
    nNumSliceGroups: number;
    nSliceGroupMapType: number;
    eSliceMode: omx.VIDEO_AVCSLICEMODETYPE;
    constructor(p?: any);
}
export declare class VIDEO_CONFIG_AVCINTRAPERIOD {
    nIDRPeriod: number;
    nPFrames: number;
    constructor(p?: any);
}
export declare class VIDEO_CONFIG_NALSIZE {
    nNaluBytes: number;
    constructor(p?: any);
}
