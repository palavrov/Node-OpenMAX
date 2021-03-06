export declare enum VIDEO_CODINGTYPE {
    VIDEO_CodingUnused = 0,
    VIDEO_CodingAutoDetect = 1,
    VIDEO_CodingMPEG2 = 2,
    VIDEO_CodingH263 = 3,
    VIDEO_CodingMPEG4 = 4,
    VIDEO_CodingWMV = 5,
    VIDEO_CodingRV = 6,
    VIDEO_CodingAVC = 7,
    VIDEO_CodingMJPEG = 8,
    VIDEO_CodingKhronosExtensions = 1862270976,
    VIDEO_CodingVendorStartUnused = 2130706432,
    VIDEO_CodingVP6 = 2130706433,
    VIDEO_CodingVP7 = 2130706434,
    VIDEO_CodingVP8 = 2130706435,
    VIDEO_CodingYUV = 2130706436,
    VIDEO_CodingSorenson = 2130706437,
    VIDEO_CodingTheora = 2130706438,
    VIDEO_CodingMVC = 2130706439,
    VIDEO_CodingMax = 2147483647,
}
export declare enum VIDEO_CONTROLRATETYPE {
    Video_ControlRateDisable = 0,
    Video_ControlRateVariable = 1,
    Video_ControlRateConstant = 2,
    Video_ControlRateVariableSkipFrames = 3,
    Video_ControlRateConstantSkipFrames = 4,
    Video_ControlRateKhronosExtensions = 1862270976,
    Video_ControlRateVendorStartUnused = 2130706432,
    Video_ControlRateMax = 2147483647,
}
export declare enum VIDEO_MOTIONVECTORTYPE {
    Video_MotionVectorPixel = 0,
    Video_MotionVectorHalfPel = 1,
    Video_MotionVectorQuarterPel = 2,
    Video_MotionVectorEighthPel = 3,
    Video_MotionVectorKhronosExtensions = 1862270976,
    Video_MotionVectorVendorStartUnused = 2130706432,
    Video_MotionVectorMax = 2147483647,
}
export declare enum VIDEO_INTRAREFRESHTYPE {
    VIDEO_IntraRefreshCyclic = 0,
    VIDEO_IntraRefreshAdaptive = 1,
    VIDEO_IntraRefreshBoth = 2,
    VIDEO_IntraRefreshKhronosExtensions = 1862270976,
    VIDEO_IntraRefreshVendorStartUnused = 2130706432,
    VIDEO_IntraRefreshCyclicMrows = 2130706433,
    VIDEO_IntraRefreshPseudoRand = 2130706434,
    VIDEO_IntraRefreshMax = 2147483647,
}
export declare enum VIDEO_H263PROFILETYPE {
    VIDEO_H263ProfileBaseline = 1,
    VIDEO_H263ProfileH320Coding = 2,
    VIDEO_H263ProfileBackwardCompatible = 4,
    VIDEO_H263ProfileISWV2 = 8,
    VIDEO_H263ProfileISWV3 = 16,
    VIDEO_H263ProfileHighCompression = 32,
    VIDEO_H263ProfileInternet = 64,
    VIDEO_H263ProfileInterlace = 128,
    VIDEO_H263ProfileHighLatency = 256,
    VIDEO_H263ProfileKhronosExtensions = 1862270976,
    VIDEO_H263ProfileVendorStartUnused = 2130706432,
    VIDEO_H263ProfileMax = 2147483647,
}
export declare enum VIDEO_H263LEVELTYPE {
    VIDEO_H263Level10 = 1,
    VIDEO_H263Level20 = 2,
    VIDEO_H263Level30 = 4,
    VIDEO_H263Level40 = 8,
    VIDEO_H263Level45 = 16,
    VIDEO_H263Level50 = 32,
    VIDEO_H263Level60 = 64,
    VIDEO_H263Level70 = 128,
    VIDEO_H263LevelKhronosExtensions = 1862270976,
    VIDEO_H263LevelVendorStartUnused = 2130706432,
    VIDEO_H263LevelMax = 2147483647,
}
export declare enum VIDEO_PICTURETYPE {
    VIDEO_PictureTypeI = 1,
    VIDEO_PictureTypeP = 2,
    VIDEO_PictureTypeB = 4,
    VIDEO_PictureTypeSI = 8,
    VIDEO_PictureTypeSP = 16,
    VIDEO_PictureTypeEI = 17,
    VIDEO_PictureTypeEP = 18,
    VIDEO_PictureTypeS = 20,
    VIDEO_PictureTypeKhronosExtensions = 1862270976,
    VIDEO_PictureTypeVendorStartUnused = 2130706432,
    VIDEO_PictureTypeMax = 2147483647,
}
export declare enum VIDEO_MPEG2PROFILETYPE {
    VIDEO_MPEG2ProfileSimple = 0,
    VIDEO_MPEG2ProfileMain = 1,
    VIDEO_MPEG2Profile422 = 2,
    VIDEO_MPEG2ProfileSNR = 3,
    VIDEO_MPEG2ProfileSpatial = 4,
    VIDEO_MPEG2ProfileHigh = 5,
    VIDEO_MPEG2ProfileKhronosExtensions = 1862270976,
    VIDEO_MPEG2ProfileVendorStartUnused = 2130706432,
    VIDEO_MPEG2ProfileMax = 2147483647,
}
export declare enum VIDEO_MPEG2LEVELTYPE {
    VIDEO_MPEG2LevelLL = 0,
    VIDEO_MPEG2LevelML = 1,
    VIDEO_MPEG2LevelH14 = 2,
    VIDEO_MPEG2LevelHL = 3,
    VIDEO_MPEG2LevelKhronosExtensions = 1862270976,
    VIDEO_MPEG2LevelVendorStartUnused = 2130706432,
    VIDEO_MPEG2LevelMax = 2147483647,
}
export declare enum VIDEO_MPEG4PROFILETYPE {
    VIDEO_MPEG4ProfileSimple = 1,
    VIDEO_MPEG4ProfileSimpleScalable = 2,
    VIDEO_MPEG4ProfileCore = 4,
    VIDEO_MPEG4ProfileMain = 8,
    VIDEO_MPEG4ProfileNbit = 16,
    VIDEO_MPEG4ProfileScalableTexture = 32,
    VIDEO_MPEG4ProfileSimpleFace = 64,
    VIDEO_MPEG4ProfileSimpleFBA = 128,
    VIDEO_MPEG4ProfileBasicAnimated = 256,
    VIDEO_MPEG4ProfileHybrid = 512,
    VIDEO_MPEG4ProfileAdvancedRealTime = 1024,
    VIDEO_MPEG4ProfileCoreScalable = 2048,
    VIDEO_MPEG4ProfileAdvancedCoding = 4096,
    VIDEO_MPEG4ProfileAdvancedCore = 8192,
    VIDEO_MPEG4ProfileAdvancedScalable = 16384,
    VIDEO_MPEG4ProfileAdvancedSimple = 32768,
    VIDEO_MPEG4ProfileKhronosExtensions = 1862270976,
    VIDEO_MPEG4ProfileVendorStartUnused = 2130706432,
    VIDEO_MPEG4ProfileMax = 2147483647,
}
export declare enum VIDEO_MPEG4LEVELTYPE {
    VIDEO_MPEG4Level0 = 1,
    VIDEO_MPEG4Level0b = 2,
    VIDEO_MPEG4Level1 = 4,
    VIDEO_MPEG4Level2 = 8,
    VIDEO_MPEG4Level3 = 16,
    VIDEO_MPEG4Level4 = 32,
    VIDEO_MPEG4Level4a = 64,
    VIDEO_MPEG4Level5 = 128,
    VIDEO_MPEG4Level6 = 256,
    VIDEO_MPEG4LevelKhronosExtensions = 1862270976,
    VIDEO_MPEG4LevelVendorStartUnused = 2130706432,
    VIDEO_MPEG4LevelMax = 2147483647,
}
export declare enum VIDEO_WMVFORMATTYPE {
    VIDEO_WMVFormatUnused = 1,
    VIDEO_WMVFormat7 = 2,
    VIDEO_WMVFormat8 = 4,
    VIDEO_WMVFormat9 = 8,
    VIDEO_WMFFormatKhronosExtensions = 1862270976,
    VIDEO_WMFFormatVendorStartUnused = 2130706432,
    VIDEO_WMVFormatMax = 2147483647,
}
export declare enum VIDEO_RVFORMATTYPE {
    VIDEO_RVFormatUnused = 0,
    VIDEO_RVFormat8 = 1,
    VIDEO_RVFormat9 = 2,
    VIDEO_RVFormatG2 = 3,
    VIDEO_RVFormatKhronosExtensions = 1862270976,
    VIDEO_RVFormatVendorStartUnused = 2130706432,
    VIDEO_RVFormatMax = 2147483647,
}
export declare enum VIDEO_AVCPROFILETYPE {
    VIDEO_AVCProfileBaseline = 1,
    VIDEO_AVCProfileMain = 2,
    VIDEO_AVCProfileExtended = 4,
    VIDEO_AVCProfileHigh = 8,
    VIDEO_AVCProfileHigh10 = 16,
    VIDEO_AVCProfileHigh422 = 32,
    VIDEO_AVCProfileHigh444 = 64,
    VIDEO_AVCProfileConstrainedBaseline = 128,
    VIDEO_AVCProfileKhronosExtensions = 1862270976,
    VIDEO_AVCProfileVendorStartUnused = 2130706432,
    VIDEO_AVCProfileMax = 2147483647,
}
export declare enum VIDEO_AVCLEVELTYPE {
    VIDEO_AVCLevel1 = 1,
    VIDEO_AVCLevel1b = 2,
    VIDEO_AVCLevel11 = 4,
    VIDEO_AVCLevel12 = 8,
    VIDEO_AVCLevel13 = 16,
    VIDEO_AVCLevel2 = 32,
    VIDEO_AVCLevel21 = 64,
    VIDEO_AVCLevel22 = 128,
    VIDEO_AVCLevel3 = 256,
    VIDEO_AVCLevel31 = 512,
    VIDEO_AVCLevel32 = 1024,
    VIDEO_AVCLevel4 = 2048,
    VIDEO_AVCLevel41 = 4096,
    VIDEO_AVCLevel42 = 8192,
    VIDEO_AVCLevel5 = 16384,
    VIDEO_AVCLevel51 = 32768,
    VIDEO_AVCLevelKhronosExtensions = 1862270976,
    VIDEO_AVCLevelVendorStartUnused = 2130706432,
    VIDEO_AVCLevelMax = 2147483647,
}
export declare enum VIDEO_AVCLOOPFILTERTYPE {
    VIDEO_AVCLoopFilterEnable = 0,
    VIDEO_AVCLoopFilterDisable = 1,
    VIDEO_AVCLoopFilterDisableSliceBoundary = 2,
    VIDEO_AVCLoopFilterKhronosExtensions = 1862270976,
    VIDEO_AVCLoopFilterVendorStartUnused = 2130706432,
    VIDEO_AVCLoopFilterMax = 2147483647,
}
export declare enum VIDEO_AVCSLICEMODETYPE {
    VIDEO_SLICEMODE_AVCDefault = 0,
    VIDEO_SLICEMODE_AVCMBSlice = 1,
    VIDEO_SLICEMODE_AVCByteSlice = 2,
    VIDEO_SLICEMODE_AVCKhronosExtensions = 1862270976,
    VIDEO_SLICEMODE_AVCVendorStartUnused = 2130706432,
    VIDEO_SLICEMODE_AVCLevelMax = 2147483647,
}
