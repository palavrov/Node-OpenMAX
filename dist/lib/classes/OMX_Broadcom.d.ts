import omx = require('../../index');
export declare class BUFFERFRAGMENTTYPE {
    nLen: number;
    constructor(p?: any);
}
export declare class PARAM_IJGSCALINGTYPE {
    bEnabled: boolean;
    constructor(p?: any);
}
export declare class DISPLAYRECTTYPE {
    x_offset: number;
    y_offset: number;
    width: number;
    height: number;
    constructor(p?: any);
}
export declare class CONFIG_DISPLAYREGIONTYPE {
    set: omx.DISPLAYSETTYPE;
    num: number;
    fullscreen: boolean;
    transform: omx.DISPLAYTRANSFORMTYPE;
    dest_rect: omx.DISPLAYRECTTYPE;
    src_rect: omx.DISPLAYRECTTYPE;
    noaspect: boolean;
    mode: omx.DISPLAYMODETYPE;
    pixel_x: number;
    pixel_y: number;
    layer: number;
    copyprotect_required: boolean;
    alpha: number;
    wfc_context_width: number;
    wfc_context_height: number;
    constructor(p?: any);
}
export declare class PARAM_SOURCETYPE {
    eType: omx.SOURCETYPE;
    nParam: number;
    nFrameCount: number;
    xFrameRate: number;
    constructor(p?: any);
}
export declare class PARAM_RESIZETYPE {
    eMode: omx.RESIZEMODETYPE;
    nMaxWidth: number;
    nMaxHeight: number;
    nMaxBytes: number;
    bPreserveAspectRatio: boolean;
    bAllowUpscaling: boolean;
    constructor(p?: any);
}
export declare class PARAM_TESTINTERFACETYPE {
    bTest: boolean;
    bSetExtra: boolean;
    nExtra: number;
    bSetError: boolean;
    stateError: boolean;
    constructor(p?: any);
}
export declare class CONFIG_VISUALISATIONTYPE {
    name: number;
    property: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIODESTINATIONTYPE {
    sName: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIOSOURCETYPE {
    sName: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIODOWNMIXCOEFFICIENTS {
    coeff: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIODOWNMIXCOEFFICIENTS8x8 {
    coeff: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIOMAXSAMPLE {
    nMaxSample: number;
    nTimeStamp: omx.TICKS;
    constructor(p?: any);
}
export declare class CONFIG_PLAYMODETYPE {
    eMode: omx.PLAYMODETYPE;
    constructor(p?: any);
}
export declare class PARAM_DELIVERYFORMATTYPE {
    eFormat: omx.DELIVERYFORMATTYPE;
    constructor(p?: any);
}
export declare class PARAM_CODECCONFIGTYPE {
    bCodecConfigIsComplete: number;
    nData: number;
    constructor(p?: any);
}
export declare class PARAM_STILLSFUNCTIONTYPE {
    bBuffer: boolean;
    constructor(p?: any);
}
export declare class PARAM_BUFFERADDRESSTYPE {
    nAllocLen: number;
    handle: any;
    constructor(p?: any);
}
export declare class PARAM_TUNNELSETUPTYPE {
    sSetup: omx.TUNNELSETUPTYPE;
    constructor(p?: any);
}
export declare class PARAM_BRCMPORTEGLTYPE {
    bPortIsEGL: boolean;
    constructor(p?: any);
}
export declare class CONFIG_IMAGEFILTERPARAMSTYPE {
    eImageFilter: omx.IMAGEFILTERTYPE;
    nNumParams: number;
    nParams: number;
    constructor(p?: any);
}
export declare class CONFIG_TRANSITIONCONTROLTYPE {
    nPosStart: number;
    nPosEnd: number;
    nPosIncrement: number;
    nFrameIncrement: omx.TICKS;
    bSwapInputs: boolean;
    name: number;
    property: number;
    constructor(p?: any);
}
export declare class CONFIG_AUDIOMONOTRACKCONTROLTYPE {
    eMode: omx.AUDIOMONOTRACKOPERATIONSTYPE;
    constructor(p?: any);
}
export declare class PARAM_CAMERAIMAGEPOOLTYPE {
    nNumHiResVideoFrames: number;
    nHiResVideoWidth: number;
    nHiResVideoHeight: number;
    eHiResVideoType: omx.COLOR_FORMATTYPE;
    nNumHiResStillsFrames: number;
    nHiResStillsWidth: number;
    nHiResStillsHeight: number;
    eHiResStillsType: omx.COLOR_FORMATTYPE;
    nNumLoResFrames: number;
    nLoResWidth: number;
    nLoResHeight: number;
    eLoResType: omx.COLOR_FORMATTYPE;
    nNumSnapshotFrames: number;
    eSnapshotType: omx.COLOR_FORMATTYPE;
    eInputPoolMode: omx.CAMERAIMAGEPOOLINPUTMODETYPE;
    nNumInputVideoFrames: number;
    nInputVideoWidth: number;
    nInputVideoHeight: number;
    eInputVideoType: omx.COLOR_FORMATTYPE;
    nNumInputStillsFrames: number;
    nInputStillsWidth: number;
    nInputStillsHeight: number;
    eInputStillsType: omx.COLOR_FORMATTYPE;
    constructor(p?: any);
}
export declare class PARAM_IMAGEPOOLSIZETYPE {
    width: number;
    height: number;
    num_pages: number;
    constructor(p?: any);
}
export declare class PARAM_IMAGEPOOLEXTERNALTYPE {
    constructor(p?: any);
}
export declare class PARAM_RUTILFIFOINFOTYPE {
    constructor(p?: any);
}
export declare class PARAM_ILFIFOCONFIG {
    nDataSize: number;
    nHeaderCount: number;
    constructor(p?: any);
}
export declare class CONFIG_CAMERASENSORMODETYPE {
    nModeIndex: number;
    nNumModes: number;
    nWidth: number;
    nHeight: number;
    nPaddingRight: number;
    nPaddingDown: number;
    eColorFormat: omx.COLOR_FORMATTYPE;
    nFrameRateMax: number;
    nFrameRateMin: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMPORTBUFFERSTATSTYPE {
    nCount: number;
    sData: any;
    constructor(p?: any);
}
export declare class CONFIG_BRCMPORTSTATSTYPE {
    nImageCount: number;
    nBufferCount: number;
    nFrameCount: number;
    nFrameSkips: number;
    nDiscards: number;
    nEOS: number;
    nMaxFrameSize: number;
    nByteCount: omx.TICKS;
    nMaxTimeDelta: omx.TICKS;
    nCorruptMBs: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMCAMERASTATSTYPE {
    nOutFrameCount: number;
    nDroppedFrameCount: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMIOPERFSTATSTYPE {
    bEnabled: boolean;
    constructor(p?: any);
}
export declare class CONFIG_SHARPNESSTYPE {
    nSharpness: number;
    constructor(p?: any);
}
export declare class CONFIG_FLICKERCANCELTYPE {
    eFlickerCancel: omx.COMMONFLICKERCANCELTYPE;
    constructor(p?: any);
}
export declare class CONFIG_REDEYEREMOVALTYPE {
    eMode: omx.REDEYEREMOVALTYPE;
    constructor(p?: any);
}
export declare class CONFIG_FACEDETECTIONCONTROLTYPE {
    eMode: omx.FACEDETECTIONCONTROLTYPE;
    nFrames: number;
    nMaxRegions: number;
    nQuality: number;
    constructor(p?: any);
}
export declare class CONFIG_FACEDETECTIONREGIONTYPE {
    nIndex: number;
    nDetectedRegions: number;
    nValidRegions: number;
    nImageWidth: number;
    nImageHeight: number;
    sRegion: any;
    constructor(p?: any);
}
export declare class CONFIG_INTERLACETYPE {
    eMode: omx.INTERLACETYPE;
    bRepeatFirstField: boolean;
    constructor(p?: any);
}
export declare class PARAM_CAMERAISPTUNERTYPE {
    tuner_name: number;
    constructor(p?: any);
}
export declare class CONFIG_IMAGEPTRTYPE {
    constructor(p?: any);
}
export declare class CONFIG_AFASSISTTYPE {
    eMode: omx.AFASSISTTYPE;
    constructor(p?: any);
}
export declare class CONFIG_INPUTCROPTYPE {
    xLeft: number;
    xTop: number;
    xWidth: number;
    xHeight: number;
    constructor(p?: any);
}
export declare class PARAM_CODECREQUIREMENTSTYPE {
    nCallbackID: number;
    bTryHWCodec: boolean;
    constructor(p?: any);
}
export declare class CONFIG_BRCMEGLIMAGEMEMHANDLETYPE {
    constructor(p?: any);
}
export declare class CONFIG_PRIVACYINDICATORTYPE {
    ePrivacyIndicatorMode: omx.PRIVACYINDICATORTYPE;
    constructor(p?: any);
}
export declare class PARAM_CAMERAFLASHTYPE {
    eFlashType: omx.CAMERAFLASHTYPE;
    bRedEyeUsesTorchMode: boolean;
    constructor(p?: any);
}
export declare class CONFIG_CAMERAFLASHCONFIGTYPE {
    bUsePreFlash: boolean;
    bUseFocusDistanceInfo: boolean;
    eFlashSync: omx.CAMERAFLASHCONFIGSYNCTYPE;
    bIgnoreChargeState: boolean;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIOTRACKGAPLESSPLAYBACKTYPE {
    nDelay: number;
    nPadding: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIOTRACKCHANGECONTROLTYPE {
    nSrcPortIndex: number;
    nDstPortIndex: number;
    nXFade: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMPIXELVALUERANGETYPE {
    ePixelValueRange: omx.BRCMPIXELVALUERANGETYPE;
    constructor(p?: any);
}
export declare class PARAM_CAMERADISABLEALGORITHMTYPE {
    eAlgorithm: omx.CAMERADISABLEALGORITHMTYPE;
    bDisabled: boolean;
    constructor(p?: any);
}
export declare class CONFIG_BRCMAUDIOEFFECTCONTROLTYPE {
    bEnable: boolean;
    name: number;
    property: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMMINIMUMPROCESSINGLATENCY {
    nOffset: omx.TICKS;
    constructor(p?: any);
}
export declare class PARAM_BRCMVIDEOAVCSEIENABLETYPE {
    bEnable: boolean;
    constructor(p?: any);
}
export declare class PARAM_BRCMALLOWMEMCHANGETYPE {
    bEnable: boolean;
    constructor(p?: any);
}
export declare class CONFIG_CAMERAUSECASETYPE {
    eUseCase: omx.CONFIG_CAMERAUSECASE;
    constructor(p?: any);
}
export declare class PARAM_BRCMDISABLEPROPRIETARYTUNNELSTYPE {
    bUseBuffers: boolean;
    constructor(p?: any);
}
export declare class PARAM_BRCMRETAINMEMORYTYPE {
    bEnable: boolean;
    constructor(p?: any);
}
export declare class PARAM_BRCMOUTPUTBUFFERSIZETYPE {
    nBufferSize: number;
    constructor(p?: any);
}
export declare class CONFIG_CAMERAINFOTYPE {
    cameraname: number;
    lensname: number;
    nModelId: number;
    nManufacturerId: number;
    nRevNum: number;
    sSerialNumber: number;
    sEpromVersion: number;
    xFNumber: number;
    xFocalLength: number;
    constructor(p?: any);
}
export declare class CONFIG_CAMERAFEATURESTYPE {
    eHasMechanicalShutter: omx.CONFIG_CAMERAFEATURESSHUTTER;
    bHasLens: boolean;
    constructor(p?: any);
}
export declare class CONFIG_REQUESTCALLBACKTYPE {
    nIndex: omx.INDEXTYPE;
    bEnable: boolean;
    constructor(p?: any);
}
export declare class FOCUSREGIONXY {
    xLeft: number;
    xTop: number;
    xWidth: number;
    xHeight: number;
    nWeight: number;
    nMask: number;
    eType: omx.FOCUSREGIONTYPE;
    constructor(p?: any);
}
export declare class CONFIG_FOCUSREGIONXYTYPE {
    nIndex: number;
    nTotalRegions: number;
    nValidRegions: number;
    bLockToFaces: boolean;
    xFaceTolerance: number;
    constructor(p?: any);
}
export declare class CONFIG_U8TYPE {
    nU8: number;
    constructor(p?: any);
}
export declare class CONFIG_CAMERASETTINGSTYPE {
    nExposure: number;
    nAnalogGain: number;
    nDigitalGain: number;
    nLux: number;
    nRedGain: number;
    nBlueGain: number;
    nFocusPosition: number;
    constructor(p?: any);
}
export declare class YUVCOLOUR {
    nY: number;
    nU: number;
    nV: number;
    constructor(p?: any);
}
export declare class CONFIG_DRAWBOXLINEPARAMS {
    xCornerSize: number;
    nPrimaryFaceLineWidth: number;
    nOtherFaceLineWidth: number;
    nFocusRegionLineWidth: number;
    sPrimaryFaceColour: omx.YUVCOLOUR;
    sPrimaryFaceSmileColour: omx.YUVCOLOUR;
    sPrimaryFaceBlinkColour: omx.YUVCOLOUR;
    sOtherFaceColour: omx.YUVCOLOUR;
    sOtherFaceSmileColour: omx.YUVCOLOUR;
    sOtherFaceBlinkColour: omx.YUVCOLOUR;
    bShowFocusRegionsWhenIdle: boolean;
    sFocusRegionColour: omx.YUVCOLOUR;
    bShowAfState: boolean;
    bShowOnlyPrimaryAfState: boolean;
    bCombineNonFaceRegions: boolean;
    sAfLockPrimaryFaceColour: omx.YUVCOLOUR;
    sAfLockOtherFaceColour: omx.YUVCOLOUR;
    sAfLockFocusRegionColour: omx.YUVCOLOUR;
    sAfFailPrimaryFaceColour: omx.YUVCOLOUR;
    sAfFailOtherFaceColour: omx.YUVCOLOUR;
    sAfFailFocusRegionColour: omx.YUVCOLOUR;
    constructor(p?: any);
}
export declare class PARAM_CAMERARMITYPE {
    bEnabled: boolean;
    sRmiName: number;
    nInputBufferHeight: number;
    nRmiBufferSize: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMSYNCOUTPUTTYPE {
    constructor(p?: any);
}
export declare class CONFIG_DRMVIEWTYPE {
    nCurrentView: number;
    nMaxView: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMU64TYPE {
    nLowPart: number;
    nHighPart: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMTHUMBNAILTYPE {
    bEnable: boolean;
    bUsePreview: boolean;
    nWidth: number;
    nHeight: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMASPECTRATIOTYPE {
    nWidth: number;
    nHeight: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMVIDEODECODEERRORCONCEALMENTTYPE {
    bStartWithValidFrame: boolean;
    constructor(p?: any);
}
export declare class CONFIG_FLASHINFOTYPE {
    sFlashName: number;
    eFlashType: omx.CAMERAFLASHTYPE;
    nDeviceId: number;
    nDeviceVersion: number;
    constructor(p?: any);
}
export declare class CONFIG_DYNAMICRANGEEXPANSIONTYPE {
    eMode: omx.DYNAMICRANGEEXPANSIONMODETYPE;
    constructor(p?: any);
}
export declare class PARAM_BRCMTHREADAFFINITYTYPE {
    eAffinity: omx.BRCMTHREADAFFINITYTYPE;
    constructor(p?: any);
}
export declare class CONFIG_SCENEDETECTTYPE {
    eScene: omx.SCENEDETECTTYPE;
    constructor(p?: any);
}
export declare class NALSTREAMFORMATTYPE {
    eNaluFormat: omx.NALUFORMATSTYPE;
    constructor(p?: any);
}
export declare class STATICBOX {
    xLeft: number;
    xTop: number;
    xWidth: number;
    xHeight: number;
    eType: omx.STATICBOXTYPE;
    constructor(p?: any);
}
export declare class CONFIG_STATICBOXTYPE {
    nIndex: number;
    nTotalBoxes: number;
    nValidBoxes: number;
    bDrawOtherBoxes: boolean;
    constructor(p?: any);
}
export declare class CONFIG_PORTBOOLEANTYPE {
    bEnabled: boolean;
    constructor(p?: any);
}
export declare class PARAM_CAMERACAPTUREMODETYPE {
    eMode: omx.CAMERACAPTUREMODETYPE;
    constructor(p?: any);
}
export declare class PARAM_BRCMDRMENCRYPTIONTYPE {
    eEncryption: omx.BRCMDRMENCRYPTIONTYPE;
    nConfigDataLen: number;
    configData: number;
    constructor(p?: any);
}
export declare class CONFIG_BUFFERSTALLTYPE {
    bStalled: boolean;
    nDelay: number;
    constructor(p?: any);
}
export declare class CONFIG_LATENCYTARGETTYPE {
    bEnabled: boolean;
    nFilter: number;
    nTarget: number;
    nShift: number;
    nSpeedFactor: number;
    nInterFactor: number;
    nAdjCap: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMUSEPROPRIETARYCALLBACKTYPE {
    bEnable: boolean;
    constructor(p?: any);
}
export declare class PARAM_TIMESTAMPMODETYPE {
    eTimestampMode: omx.TIMESTAMPMODETYPE;
    constructor(p?: any);
}
export declare class BRCMVEGLIMAGETYPE {
    nWidth: number;
    nHeight: number;
    nStride: number;
    nUmemHandle: number;
    nUmemOffset: number;
    nFlipped: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMFOVTYPE {
    xFieldOfViewHorizontal: number;
    xFieldOfViewVertical: number;
    constructor(p?: any);
}
export declare class VIDEO_CONFIG_LEVEL_EXTEND {
    nCustomMaxMBPS: number;
    nCustomMaxFS: number;
    nCustomMaxBRandCPB: number;
    constructor(p?: any);
}
export declare class VIDEO_EEDE_ENABLE {
    enable: number;
    constructor(p?: any);
}
export declare class VIDEO_EEDE_LOSSRATE {
    loss_rate: number;
    constructor(p?: any);
}
export declare class PARAM_COLORSPACETYPE {
    eColorSpace: omx.COLORSPACETYPE;
    constructor(p?: any);
}
export declare class PARAM_CAPTURESTATETYPE {
    eCaptureState: omx.CAPTURESTATETYPE;
    constructor(p?: any);
}
export declare class PARAM_BRCMCONFIGFILETYPE {
    fileSize: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMCONFIGFILECHUNKTYPE {
    size: number;
    offset: number;
    data: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMFRAMERATERANGETYPE {
    xFramerateLow: number;
    xFramerateHigh: number;
    constructor(p?: any);
}
export declare class PARAM_S32TYPE {
    nS32: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMVIDEODRMPROTECTBUFFERTYPE {
    size_wanted: number;
    protect: number;
    mem_handle: number;
    constructor(p?: any);
}
export declare class CONFIG_ZEROSHUTTERLAGTYPE {
    bZeroShutterMode: number;
    bConcurrentCapture: number;
    constructor(p?: any);
}
export declare class PARAM_BRCMVIDEODECODECONFIGVD3TYPE {
    config: number;
    constructor(p?: any);
}
export declare class CONFIG_CUSTOMAWBGAINSTYPE {
    xGainR: number;
    xGainB: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMRENDERSTATSTYPE {
    nValid: boolean;
    nMatch: number;
    nPeriod: number;
    nPhase: number;
    nPixelClockNominal: number;
    nPixelClock: number;
    nHvsStatus: number;
    dummy0: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMANNOTATETYPE {
    bEnable: boolean;
    bShowShutter: boolean;
    bShowAnalogGain: boolean;
    bShowLens: boolean;
    bShowCaf: boolean;
    bShowMotion: boolean;
    bShowFrameNum: boolean;
    bEnableBackground: boolean;
    bCustomBackgroundColour: boolean;
    nBackgroundY: number;
    nBackgroundU: number;
    nBackgroundV: number;
    dummy1: number;
    bCustomTextColour: boolean;
    nTextY: number;
    nTextU: number;
    nTextV: number;
    nTextSize: number;
    sText: number;
    constructor(p?: any);
}
export declare class CONFIG_BRCMSTEREOSCOPICMODETYPE {
    eMode: omx.BRCMSTEREOSCOPICMODETYPE;
    bDecimate: boolean;
    bSwapEyes: boolean;
    constructor(p?: any);
}
export declare class PARAM_CAMERAINTERFACETYPE {
    eMode: omx.CAMERAINTERFACETYPE;
    constructor(p?: any);
}
export declare class PARAM_CAMERACLOCKINGMODETYPE {
    eMode: omx.CAMERACLOCKINGMODETYPE;
    constructor(p?: any);
}
export declare class PARAM_CAMERARXCONFIG_TYPE {
    eDecode: omx.CAMERARXDECODETYPE;
    eEncode: omx.CAMERARXENCODETYPE;
    eUnpack: any;
    ePack: omx.CAMERARXPACKTYPE;
    nDataLanes: number;
    nEncodeBlockLength: number;
    nEmbeddedDataLines: number;
    nImageId: number;
    constructor(p?: any);
}
export declare class PARAM_CAMERARXTIMING_TYPE {
    nTiming1: number;
    nTiming2: number;
    nTiming3: number;
    nTiming4: number;
    nTiming5: number;
    nTerm1: number;
    nTerm2: number;
    nCpiTiming1: number;
    nCpiTiming2: number;
    constructor(p?: any);
}
export declare class PARAM_BAYERORDERTYPE {
    eBayerOrder: omx.BAYERORDERTYPE;
    constructor(p?: any);
}
