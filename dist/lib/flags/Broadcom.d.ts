export declare enum DISPLAYTRANSFORMTYPE {
    DISPLAY_ROT0 = 0,
    DISPLAY_MIRROR_ROT0 = 1,
    DISPLAY_MIRROR_ROT180 = 2,
    DISPLAY_ROT180 = 3,
    DISPLAY_MIRROR_ROT90 = 4,
    DISPLAY_ROT270 = 5,
    DISPLAY_ROT90 = 6,
    DISPLAY_MIRROR_ROT270 = 7,
    DISPLAY_DUMMY = 2147483647,
}
export declare enum DISPLAYMODETYPE {
    DISPLAY_MODE_FILL = 0,
    DISPLAY_MODE_LETTERBOX = 1,
    DISPLAY_MODE_STEREO_LEFT_TO_LEFT = 2,
    DISPLAY_MODE_STEREO_TOP_TO_TOP = 3,
    DISPLAY_MODE_STEREO_LEFT_TO_TOP = 4,
    DISPLAY_MODE_STEREO_TOP_TO_LEFT = 5,
    DISPLAY_MODE_DUMMY = 2147483647,
}
export declare enum DISPLAYSETTYPE {
    DISPLAY_SET_NONE = 0,
    DISPLAY_SET_NUM = 1,
    DISPLAY_SET_FULLSCREEN = 2,
    DISPLAY_SET_TRANSFORM = 4,
    DISPLAY_SET_DEST_RECT = 8,
    DISPLAY_SET_SRC_RECT = 16,
    DISPLAY_SET_MODE = 32,
    DISPLAY_SET_PIXEL = 64,
    DISPLAY_SET_NOASPECT = 128,
    DISPLAY_SET_LAYER = 256,
    DISPLAY_SET_COPYPROTECT = 512,
    DISPLAY_SET_ALPHA = 1024,
    DISPLAY_SET_DUMMY = 2147483647,
}
export declare enum SOURCETYPE {
    SOURCE_WHITE = 0,
    SOURCE_BLACK = 1,
    SOURCE_DIAGONAL = 2,
    SOURCE_NOISE = 3,
    SOURCE_RANDOM = 4,
    SOURCE_COLOUR = 5,
    SOURCE_BLOCKS = 6,
    SOURCE_SWIRLY = 7,
    SOURCE_DUMMY = 2147483647,
}
export declare enum RESIZEMODETYPE {
    RESIZE_NONE = 0,
    RESIZE_CROP = 1,
    RESIZE_BOX = 2,
    RESIZE_BYTES = 3,
    RESIZE_DUMMY = 2147483647,
}
export declare enum PLAYMODETYPE {
    PLAYMODE_NORMAL = 0,
    PLAYMODE_FF = 1,
    PLAYMODE_REW = 2,
    PLAYMODE_DUMMY = 2147483647,
}
export declare enum DELIVERYFORMATTYPE {
    DELIVERYFORMAT_STREAM = 0,
    DELIVERYFORMAT_SINGLE_PACKET = 1,
    DELIVERYFORMAT_DUMMY = 2147483647,
}
export declare enum AUDIOMONOTRACKOPERATIONSTYPE {
    AUDIOMONOTRACKOPERATIONS_NOP = 0,
    AUDIOMONOTRACKOPERATIONS_L_TO_R = 1,
    AUDIOMONOTRACKOPERATIONS_R_TO_L = 2,
    AUDIOMONOTRACKOPERATIONS_DUMMY = 2147483647,
}
export declare enum CAMERAIMAGEPOOLINPUTMODETYPE {
    CAMERAIMAGEPOOLINPUTMODE_ONEPOOL = 0,
    CAMERAIMAGEPOOLINPUTMODE_TWOPOOLS = 1,
}
export declare enum COMMONFLICKERCANCELTYPE {
    COMMONFLICKERCANCEL_OFF = 0,
    COMMONFLICKERCANCEL_AUTO = 1,
    COMMONFLICKERCANCEL_50 = 2,
    COMMONFLICKERCANCEL_60 = 3,
    COMMONFLICKERCANCEL_DUMMY = 2147483647,
}
export declare enum REDEYEREMOVALTYPE {
    RedEyeRemovalNone = 0,
    RedEyeRemovalOn = 1,
    RedEyeRemovalAuto = 2,
    RedEyeRemovalKhronosExtensions = 1862270976,
    RedEyeRemovalVendorStartUnused = 2130706432,
    RedEyeRemovalSimple = 2130706433,
    RedEyeRemovalMax = 2147483647,
}
export declare enum FACEDETECTIONCONTROLTYPE {
    FaceDetectionControlNone = 0,
    FaceDetectionControlOn = 1,
    FaceDetectionControlKhronosExtensions = 1862270976,
    FaceDetectionControlVendorStartUnused = 2130706432,
    FaceDetectionControlMax = 2147483647,
}
export declare enum FACEREGIONFLAGSTYPE {
    FaceRegionFlagsNone = 0,
    FaceRegionFlagsBlink = 1,
    FaceRegionFlagsSmile = 2,
    FaceRegionFlagsKhronosExtensions = 1862270976,
    FaceRegionFlagsVendorStartUnused = 2130706432,
    FaceRegionFlagsMax = 2147483647,
}
export declare enum INTERLACETYPE {
    InterlaceProgressive = 0,
    InterlaceFieldSingleUpperFirst = 1,
    InterlaceFieldSingleLowerFirst = 2,
    InterlaceFieldsInterleavedUpperFirst = 3,
    InterlaceFieldsInterleavedLowerFirst = 4,
    InterlaceMixed = 5,
    InterlaceKhronosExtensions = 1862270976,
    InterlaceVendorStartUnused = 2130706432,
    InterlaceMax = 2147483647,
}
export declare enum AFASSISTTYPE {
    AFAssistAuto = 0,
    AFAssistOn = 1,
    AFAssistOff = 2,
    AFAssistTorch = 3,
    AFAssistKhronosExtensions = 1862270976,
    AFAssistVendorStartUnused = 2130706432,
    AFAssistMax = 2147483647,
}
export declare enum PRIVACYINDICATORTYPE {
    PrivacyIndicatorOff = 0,
    PrivacyIndicatorOn = 1,
    PrivacyIndicatorForceOn = 2,
    PrivacyIndicatorKhronosExtensions = 1862270976,
    PrivacyIndicatorVendorStartUnused = 2130706432,
    PrivacyIndicatorMax = 2147483647,
}
export declare enum CAMERAFLASHTYPE {
    CameraFlashDefault = 0,
    CameraFlashXenon = 1,
    CameraFlashLED = 2,
    CameraFlashNone = 3,
    CameraFlashKhronosExtensions = 1862270976,
    CameraFlashVendorStartUnused = 2130706432,
    CameraFlashMax = 2147483647,
}
export declare enum CAMERAFLASHCONFIGSYNCTYPE {
    CameraFlashConfigSyncFrontSlow = 0,
    CameraFlashConfigSyncRearSlow = 1,
    CameraFlashConfigSyncFrontFast = 2,
    CameraFlashConfigSyncKhronosExtensions = 1862270976,
    CameraFlashConfigSyncVendorStartUnused = 2130706432,
    CameraFlashConfigSyncMax = 2147483647,
}
export declare enum BRCMPIXELVALUERANGETYPE {
    PixelValueRangeUnspecified = 0,
    PixelValueRangeITU_R_BT601 = 1,
    PixelValueRangeFull8Bit = 2,
    PixelValueRangeKhronosExtensions = 1862270976,
    PixelValueRangeVendorStartUnused = 2130706432,
    PixelValueRangeMax = 2147483647,
}
export declare enum CAMERADISABLEALGORITHMTYPE {
    CameraDisableAlgorithmFacetracking = 0,
    CameraDisableAlgorithmRedEyeReduction = 1,
    CameraDisableAlgorithmVideoStabilisation = 2,
    CameraDisableAlgorithmWriteRaw = 3,
    CameraDisableAlgorithmVideoDenoise = 4,
    CameraDisableAlgorithmStillsDenoise = 5,
    CameraDisableAlgorithmAntiShake = 6,
    CameraDisableAlgorithmImageEffects = 7,
    CameraDisableAlgorithmDarkSubtract = 8,
    CameraDisableAlgorithmDynamicRangeExpansion = 9,
    CameraDisableAlgorithmFaceRecognition = 10,
    CameraDisableAlgorithmFaceBeautification = 11,
    CameraDisableAlgorithmSceneDetection = 12,
    CameraDisableAlgorithmHighDynamicRange = 13,
    CameraDisableAlgorithmKhronosExtensions = 1862270976,
    CameraDisableAlgorithmVendorStartUnused = 2130706432,
    CameraDisableAlgorithmMax = 2147483647,
}
export declare enum CONFIG_CAMERAUSECASE {
    CameraUseCaseAuto = 0,
    CameraUseCaseVideo = 1,
    CameraUseCaseStills = 2,
    CameraUseCaseKhronosExtensions = 1862270976,
    CameraUseCaseVendorStartUnused = 2130706432,
    CameraUseCaseMax = 2147483647,
}
export declare enum CONFIG_CAMERAFEATURESSHUTTER {
    CameraFeaturesShutterUnknown = 0,
    CameraFeaturesShutterNotPresent = 1,
    CameraFeaturesShutterPresent = 2,
    CameraFeaturesShutterKhronosExtensions = 1862270976,
    CameraFeaturesShutterVendorStartUnused = 2130706432,
    CameraFeaturesShutterMax = 2147483647,
}
export declare enum FOCUSREGIONTYPE {
    FocusRegionNormal = 0,
    FocusRegionFace = 1,
    FocusRegionMax = 2,
}
export declare enum DYNAMICRANGEEXPANSIONMODETYPE {
    DynRangeExpOff = 0,
    DynRangeExpLow = 1,
    DynRangeExpMedium = 2,
    DynRangeExpHigh = 3,
    DynRangeExpKhronosExtensions = 1862270976,
    DynRangeExpVendorStartUnused = 2130706432,
    DynRangeExpMax = 2147483647,
}
export declare enum BRCMTHREADAFFINITYTYPE {
    BrcmThreadAffinityCPU0 = 0,
    BrcmThreadAffinityCPU1 = 1,
    BrcmThreadAffinityMax = 2147483647,
}
export declare enum SCENEDETECTTYPE {
    SceneDetectUnknown = 0,
    SceneDetectLandscape = 1,
    SceneDetectPortrait = 2,
    SceneDetectMacro = 3,
    SceneDetectNight = 4,
    SceneDetectPortraitNight = 5,
    SceneDetectBacklit = 6,
    SceneDetectPortraitBacklit = 7,
    SceneDetectSunset = 8,
    SceneDetectBeach = 9,
    SceneDetectSnow = 10,
    SceneDetectFireworks = 11,
    SceneDetectMax = 2147483647,
}
export declare enum INDEXEXTTYPE {
    IndexExtVideoStartUnused = 1868562432,
    IndexParamNalStreamFormatSupported = 1868562433,
    IndexParamNalStreamFormat = 1868562434,
    IndexParamNalStreamFormatSelect = 1868562435,
    IndexExtMax = 2147483647,
}
export declare enum NALUFORMATSTYPE {
    NaluFormatStartCodes = 1,
    NaluFormatOneNaluPerBuffer = 2,
    NaluFormatOneByteInterleaveLength = 4,
    NaluFormatTwoByteInterleaveLength = 8,
    NaluFormatFourByteInterleaveLength = 16,
    NaluFormatCodingMax = 2147483647,
}
export declare enum STATICBOXTYPE {
    StaticBoxNormal = 0,
    StaticBoxPrimaryFaceAfIdle = 1,
    StaticBoxNonPrimaryFaceAfIdle = 2,
    StaticBoxFocusRegionAfIdle = 3,
    StaticBoxPrimaryFaceAfSuccess = 4,
    StaticBoxNonPrimaryFaceAfSuccess = 5,
    StaticBoxFocusRegionAfSuccess = 6,
    StaticBoxPrimaryFaceAfFail = 7,
    StaticBoxNonPrimaryFaceAfFail = 8,
    StaticBoxFocusRegionAfFail = 9,
    StaticBoxMax = 10,
}
export declare enum CAMERACAPTUREMODETYPE {
    CameraCaptureModeWaitForCaptureEnd = 0,
    CameraCaptureModeWaitForCaptureEndAndUsePreviousInputImage = 1,
    CameraCaptureModeResumeViewfinderImmediately = 2,
    CameraCaptureModeMax = 3,
}
export declare enum BRCMDRMENCRYPTIONTYPE {
    DrmEncryptionNone = 0,
    DrmEncryptionHdcp2 = 1,
    DrmEncryptionKhronosExtensions = 1862270976,
    DrmEncryptionVendorStartUnused = 2130706432,
    DrmEncryptionRangeMax = 2147483647,
}
export declare enum TIMESTAMPMODETYPE {
    TimestampModeZero = 0,
    TimestampModeRawStc = 1,
    TimestampModeResetStc = 2,
    TimestampModeKhronosExtensions = 1862270976,
    TimestampModeVendorStartUnused = 2130706432,
    TimestampModeMax = 2147483647,
}
export declare enum COLORSPACETYPE {
    COLORSPACE_UNKNOWN = 0,
    COLORSPACE_JPEG_JFIF = 1,
    COLORSPACE_ITU_R_BT601 = 2,
    COLORSPACE_ITU_R_BT709 = 3,
    COLORSPACE_FCC = 4,
    COLORSPACE_SMPTE240M = 5,
    COLORSPACE_BT470_2_M = 6,
    COLORSPACE_BT470_2_BG = 7,
    COLORSPACE_JFIF_Y16_255 = 8,
    COLORSPACE_MAX = 2147483647,
}
export declare enum CAPTURESTATETYPE {
    NotCapturing = 0,
    CaptureStarted = 1,
    CaptureComplete = 2,
    CaptureMax = 2147483647,
}
export declare enum BRCMSTEREOSCOPICMODETYPE {
    STEREOSCOPIC_NONE = 0,
    STEREOSCOPIC_SIDEBYSIDE = 1,
    STEREOSCOPIC_TOPBOTTOM = 2,
    STEREOSCOPIC_MAX = 2147483647,
}
export declare enum CAMERAINTERFACETYPE {
    CAMERAINTERFACE_CSI = 0,
    CAMERAINTERFACE_CCP2 = 1,
    CAMERAINTERFACE_CPI = 2,
    CAMERAINTERFACE_MAX = 2147483647,
}
export declare enum CAMERACLOCKINGMODETYPE {
    CAMERACLOCKINGMODE_STROBE = 0,
    CAMERACLOCKINGMODE_CLOCK = 1,
    CAMERACLOCKINGMODE_MAX = 2147483647,
}
export declare enum CAMERARXDECODETYPE {
    CAMERARXDECODE_NONE = 0,
    CAMERARXDECODE_DPCM8TO10 = 1,
    CAMERARXDECODE_DPCM7TO10 = 2,
    CAMERARXDECODE_DPCM6TO10 = 3,
    CAMERARXDECODE_DPCM8TO12 = 4,
    CAMERARXDECODE_DPCM7TO12 = 5,
    CAMERARXDECODE_DPCM6TO12 = 6,
    CAMERARXDECODE_DPCM10TO14 = 7,
    CAMERARXDECODE_DPCM8TO14 = 8,
    CAMERARXDECODE_DPCM12TO16 = 9,
    CAMERARXDECODE_DPCM10TO16 = 10,
    CAMERARXDECODE_DPCM8TO16 = 11,
    CAMERARXDECODE_MAX = 2147483647,
}
export declare enum CAMERARXENCODETYPE {
    CAMERARXENCODE_NONE = 0,
    CAMERARXENCODE_DPCM10TO8 = 1,
    CAMERARXENCODE_DPCM12TO8 = 2,
    CAMERARXENCODE_DPCM14TO8 = 3,
    CAMERARXENCODE_MAX = 2147483647,
}
export declare enum CAMERARXUNPACKTYPE {
    CAMERARXUNPACK_NONE = 0,
    CAMERARXUNPACK_6 = 1,
    CAMERARXUNPACK_7 = 2,
    CAMERARXUNPACK_8 = 3,
    CAMERARXUNPACK_10 = 4,
    CAMERARXUNPACK_12 = 5,
    CAMERARXUNPACK_14 = 6,
    CAMERARXUNPACK_16 = 7,
    CAMERARXUNPACK_MAX = 2147483647,
}
export declare enum CAMERARXPACKTYPE {
    CAMERARXPACK_NONE = 0,
    CAMERARXPACK_8 = 1,
    CAMERARXPACK_10 = 2,
    CAMERARXPACK_12 = 3,
    CAMERARXPACK_14 = 4,
    CAMERARXPACK_16 = 5,
    CAMERARXPACK_RAW10 = 6,
    CAMERARXPACK_RAW12 = 7,
    CAMERARXPACK_MAX = 2147483647,
}
export declare enum BAYERORDERTYPE {
    BayerOrderRGGB = 0,
    BayerOrderGBRG = 1,
    BayerOrderBGGR = 3,
    BayerOrderGRBG = 3,
    BayerOrderMax = 2147483647,
}
