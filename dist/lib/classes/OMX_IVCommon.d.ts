import omx = require('../../index');
export declare class CONFIG_COLORCONVERSIONTYPE {
    xColorMatrix: number;
    xColorOffset: number;
    constructor(p?: any);
}
export declare class CONFIG_SCALEFACTORTYPE {
    xWidth: number;
    xHeight: number;
    constructor(p?: any);
}
export declare class CONFIG_IMAGEFILTERTYPE {
    eImageFilter: omx.IMAGEFILTERTYPE;
    constructor(p?: any);
}
export declare class CONFIG_COLORENHANCEMENTTYPE {
    bColorEnhancement: boolean;
    nCustomizedU: number;
    nCustomizedV: number;
    constructor(p?: any);
}
export declare class CONFIG_COLORKEYTYPE {
    nARGBColor: number;
    nARGBMask: number;
    constructor(p?: any);
}
export declare class CONFIG_COLORBLENDTYPE {
    nRGBAlphaConstant: number;
    eColorBlend: omx.COLORBLENDTYPE;
    constructor(p?: any);
}
export declare class FRAMESIZETYPE {
    nWidth: number;
    nHeight: number;
    constructor(p?: any);
}
export declare class CONFIG_ROTATIONTYPE {
    nRotation: number;
    constructor(p?: any);
}
export declare class CONFIG_MIRRORTYPE {
    eMirror: omx.MIRRORTYPE;
    constructor(p?: any);
}
export declare class CONFIG_POINTTYPE {
    nX: number;
    nY: number;
    constructor(p?: any);
}
export declare class CONFIG_RECTTYPE {
    nLeft: number;
    nTop: number;
    nWidth: number;
    nHeight: number;
    constructor(p?: any);
}
export declare class PARAM_DEBLOCKINGTYPE {
    bDeblocking: boolean;
    constructor(p?: any);
}
export declare class CONFIG_FRAMESTABTYPE {
    bStab: boolean;
    constructor(p?: any);
}
export declare class CONFIG_WHITEBALCONTROLTYPE {
    eWhiteBalControl: omx.WHITEBALCONTROLTYPE;
    constructor(p?: any);
}
export declare class CONFIG_EXPOSURECONTROLTYPE {
    eExposureControl: omx.EXPOSURECONTROLTYPE;
    constructor(p?: any);
}
export declare class PARAM_SENSORMODETYPE {
    nFrameRate: number;
    bOneShot: boolean;
    sFrameSize: omx.FRAMESIZETYPE;
    constructor(p?: any);
}
export declare class CONFIG_CONTRASTTYPE {
    nContrast: number;
    constructor(p?: any);
}
export declare class CONFIG_BRIGHTNESSTYPE {
    nBrightness: number;
    constructor(p?: any);
}
export declare class CONFIG_BACKLIGHTTYPE {
    nBacklight: number;
    nTimeout: number;
    constructor(p?: any);
}
export declare class CONFIG_GAMMATYPE {
    nGamma: number;
    constructor(p?: any);
}
export declare class CONFIG_SATURATIONTYPE {
    nSaturation: number;
    constructor(p?: any);
}
export declare class CONFIG_LIGHTNESSTYPE {
    nLightness: number;
    constructor(p?: any);
}
export declare class CONFIG_PLANEBLENDTYPE {
    nDepth: number;
    nAlpha: number;
    constructor(p?: any);
}
export declare class PARAM_INTERLEAVETYPE {
    bEnable: boolean;
    nInterleavePortIndex: number;
    constructor(p?: any);
}
export declare class CONFIG_TRANSITIONEFFECTTYPE {
    eEffect: omx.TRANSITIONEFFECTTYPE;
    constructor(p?: any);
}
export declare class PARAM_DATAUNITTYPE {
    eUnitType: omx.DATAUNITTYPE;
    eEncapsulationType: omx.DATAUNITENCAPSULATIONTYPE;
    constructor(p?: any);
}
export declare class CONFIG_DITHERTYPE {
    eDither: omx.DITHERTYPE;
    constructor(p?: any);
}
export declare class CONFIG_CAPTUREMODETYPE {
    bContinuous: boolean;
    bFrameLimited: boolean;
    nFrameLimit: number;
    constructor(p?: any);
}
export declare class CONFIG_EXPOSUREVALUETYPE {
    eMetering: omx.METERINGTYPE;
    xEVCompensation: number;
    nApertureFNumber: number;
    bAutoAperture: boolean;
    nShutterSpeedMsec: number;
    bAutoShutterSpeed: boolean;
    nSensitivity: number;
    bAutoSensitivity: boolean;
    constructor(p?: any);
}
export declare class CONFIG_FOCUSREGIONTYPE {
    bCenter: boolean;
    bLeft: boolean;
    bRight: boolean;
    bTop: boolean;
    bBottom: boolean;
    bTopLeft: boolean;
    bTopRight: boolean;
    bBottomLeft: boolean;
    bBottomRight: boolean;
    constructor(p?: any);
}
export declare class PARAM_FOCUSSTATUSTYPE {
    eFocusStatus: omx.FOCUSSTATUSTYPE;
    bCenterStatus: boolean;
    bLeftStatus: boolean;
    bRightStatus: boolean;
    bTopStatus: boolean;
    bBottomStatus: boolean;
    bTopLeftStatus: boolean;
    bTopRightStatus: boolean;
    bBottomLeftStatus: boolean;
    bBottomRightStatus: boolean;
    constructor(p?: any);
}
