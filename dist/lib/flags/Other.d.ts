export declare enum OTHER_FORMATTYPE {
    OTHER_FormatTime = 0,
    OTHER_FormatPower = 1,
    OTHER_FormatStats = 2,
    OTHER_FormatBinary = 3,
    OTHER_FormatVendorReserved = 1000,
    OTHER_FormatKhronosExtensions = 1862270976,
    OTHER_FormatVendorStartUnused = 2130706432,
    OTHER_FormatText = 2130706433,
    OTHER_FormatTextSKM2 = 2130706434,
    OTHER_FormatText3GP5 = 2130706435,
    OTHER_FormatMax = 2147483647,
}
export declare enum TIME_SEEKMODETYPE {
    TIME_SeekModeFast = 0,
    TIME_SeekModeAccurate = 1,
    TIME_SeekModeKhronosExtensions = 1862270976,
    TIME_SeekModeVendorStartUnused = 2130706432,
    TIME_SeekModeDirectional = 2130706433,
    TIME_SeekModeMax = 2147483647,
}
export declare enum TIME_UPDATETYPE {
    TIME_UpdateRequestFulfillment = 0,
    TIME_UpdateScaleChanged = 1,
    TIME_UpdateClockStateChanged = 2,
    TIME_UpdateKhronosExtensions = 1862270976,
    TIME_UpdateVendorStartUnused = 2130706432,
    TIME_UpdateMax = 2147483647,
}
export declare enum TIME_REFCLOCKTYPE {
    TIME_RefClockNone = 0,
    TIME_RefClockAudio = 1,
    TIME_RefClockVideo = 2,
    TIME_RefClockKhronosExtensions = 1862270976,
    TIME_RefClockVendorStartUnused = 2130706432,
    TIME_RefClockMax = 2147483647,
}
export declare enum TIME_CLOCKSTATE {
    TIME_ClockStateRunning = 0,
    TIME_ClockStateWaitingForStartTime = 1,
    TIME_ClockStateStopped = 2,
    TIME_ClockStateKhronosExtensions = 1862270976,
    TIME_ClockStateVendorStartUnused = 2130706432,
    TIME_ClockStateMax = 2147483647,
}
