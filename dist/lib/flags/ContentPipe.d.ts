export declare enum CP_ORIGINTYPE {
    CP_OriginBegin = 0,
    CP_OriginCur = 1,
    CP_OriginEnd = 2,
    CP_OriginKhronosExtensions = 1862270976,
    CP_OriginVendorStartUnused = 2130706432,
    CP_OriginMax = 2147483647,
}
export declare enum CP_ACCESSTYPE {
    CP_AccessRead = 0,
    CP_AccessWrite = 1,
    CP_AccessReadWrite = 2,
    CP_AccessKhronosExtensions = 1862270976,
    CP_AccessVendorStartUnused = 2130706432,
    CP_AccessMax = 2147483647,
}
export declare enum CP_CHECKBYTESRESULTTYPE {
    CP_CheckBytesOk = 0,
    CP_CheckBytesNotReady = 1,
    CP_CheckBytesInsufficientBytes = 2,
    CP_CheckBytesAtEndOfStream = 3,
    CP_CheckBytesOutOfBuffers = 4,
    CP_CheckBytesKhronosExtensions = 1862270976,
    CP_CheckBytesVendorStartUnused = 2130706432,
    CP_CheckBytesMax = 2147483647,
}
export declare enum CP_EVENTTYPE {
    CP_BytesAvailable = 0,
    CP_Overflow = 1,
    CP_PipeDisconnected = 2,
    CP_EventKhronosExtensions = 1862270976,
    CP_EventVendorStartUnused = 2130706432,
    CP_EventMax = 2147483647,
}
