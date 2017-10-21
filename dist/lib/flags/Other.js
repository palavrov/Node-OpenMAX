"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OTHER_FORMATTYPE;
(function (OTHER_FORMATTYPE) {
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatTime"] = 0] = "OTHER_FormatTime";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatPower"] = 1] = "OTHER_FormatPower";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatStats"] = 2] = "OTHER_FormatStats";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatBinary"] = 3] = "OTHER_FormatBinary";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatVendorReserved"] = 1000] = "OTHER_FormatVendorReserved";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatKhronosExtensions"] = 1862270976] = "OTHER_FormatKhronosExtensions";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatVendorStartUnused"] = 2130706432] = "OTHER_FormatVendorStartUnused";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatText"] = 2130706433] = "OTHER_FormatText";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatTextSKM2"] = 2130706434] = "OTHER_FormatTextSKM2";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatText3GP5"] = 2130706435] = "OTHER_FormatText3GP5";
    OTHER_FORMATTYPE[OTHER_FORMATTYPE["OTHER_FormatMax"] = 2147483647] = "OTHER_FormatMax";
})(OTHER_FORMATTYPE = exports.OTHER_FORMATTYPE || (exports.OTHER_FORMATTYPE = {}));
var TIME_SEEKMODETYPE;
(function (TIME_SEEKMODETYPE) {
    TIME_SEEKMODETYPE[TIME_SEEKMODETYPE["TIME_SeekModeFast"] = 0] = "TIME_SeekModeFast";
    TIME_SEEKMODETYPE[TIME_SEEKMODETYPE["TIME_SeekModeAccurate"] = 1] = "TIME_SeekModeAccurate";
    TIME_SEEKMODETYPE[TIME_SEEKMODETYPE["TIME_SeekModeKhronosExtensions"] = 1862270976] = "TIME_SeekModeKhronosExtensions";
    TIME_SEEKMODETYPE[TIME_SEEKMODETYPE["TIME_SeekModeVendorStartUnused"] = 2130706432] = "TIME_SeekModeVendorStartUnused";
    TIME_SEEKMODETYPE[TIME_SEEKMODETYPE["TIME_SeekModeDirectional"] = 2130706433] = "TIME_SeekModeDirectional";
    TIME_SEEKMODETYPE[TIME_SEEKMODETYPE["TIME_SeekModeMax"] = 2147483647] = "TIME_SeekModeMax";
})(TIME_SEEKMODETYPE = exports.TIME_SEEKMODETYPE || (exports.TIME_SEEKMODETYPE = {}));
var TIME_UPDATETYPE;
(function (TIME_UPDATETYPE) {
    TIME_UPDATETYPE[TIME_UPDATETYPE["TIME_UpdateRequestFulfillment"] = 0] = "TIME_UpdateRequestFulfillment";
    TIME_UPDATETYPE[TIME_UPDATETYPE["TIME_UpdateScaleChanged"] = 1] = "TIME_UpdateScaleChanged";
    TIME_UPDATETYPE[TIME_UPDATETYPE["TIME_UpdateClockStateChanged"] = 2] = "TIME_UpdateClockStateChanged";
    TIME_UPDATETYPE[TIME_UPDATETYPE["TIME_UpdateKhronosExtensions"] = 1862270976] = "TIME_UpdateKhronosExtensions";
    TIME_UPDATETYPE[TIME_UPDATETYPE["TIME_UpdateVendorStartUnused"] = 2130706432] = "TIME_UpdateVendorStartUnused";
    TIME_UPDATETYPE[TIME_UPDATETYPE["TIME_UpdateMax"] = 2147483647] = "TIME_UpdateMax";
})(TIME_UPDATETYPE = exports.TIME_UPDATETYPE || (exports.TIME_UPDATETYPE = {}));
var TIME_REFCLOCKTYPE;
(function (TIME_REFCLOCKTYPE) {
    TIME_REFCLOCKTYPE[TIME_REFCLOCKTYPE["TIME_RefClockNone"] = 0] = "TIME_RefClockNone";
    TIME_REFCLOCKTYPE[TIME_REFCLOCKTYPE["TIME_RefClockAudio"] = 1] = "TIME_RefClockAudio";
    TIME_REFCLOCKTYPE[TIME_REFCLOCKTYPE["TIME_RefClockVideo"] = 2] = "TIME_RefClockVideo";
    TIME_REFCLOCKTYPE[TIME_REFCLOCKTYPE["TIME_RefClockKhronosExtensions"] = 1862270976] = "TIME_RefClockKhronosExtensions";
    TIME_REFCLOCKTYPE[TIME_REFCLOCKTYPE["TIME_RefClockVendorStartUnused"] = 2130706432] = "TIME_RefClockVendorStartUnused";
    TIME_REFCLOCKTYPE[TIME_REFCLOCKTYPE["TIME_RefClockMax"] = 2147483647] = "TIME_RefClockMax";
})(TIME_REFCLOCKTYPE = exports.TIME_REFCLOCKTYPE || (exports.TIME_REFCLOCKTYPE = {}));
var TIME_CLOCKSTATE;
(function (TIME_CLOCKSTATE) {
    TIME_CLOCKSTATE[TIME_CLOCKSTATE["TIME_ClockStateRunning"] = 0] = "TIME_ClockStateRunning";
    TIME_CLOCKSTATE[TIME_CLOCKSTATE["TIME_ClockStateWaitingForStartTime"] = 1] = "TIME_ClockStateWaitingForStartTime";
    TIME_CLOCKSTATE[TIME_CLOCKSTATE["TIME_ClockStateStopped"] = 2] = "TIME_ClockStateStopped";
    TIME_CLOCKSTATE[TIME_CLOCKSTATE["TIME_ClockStateKhronosExtensions"] = 1862270976] = "TIME_ClockStateKhronosExtensions";
    TIME_CLOCKSTATE[TIME_CLOCKSTATE["TIME_ClockStateVendorStartUnused"] = 2130706432] = "TIME_ClockStateVendorStartUnused";
    TIME_CLOCKSTATE[TIME_CLOCKSTATE["TIME_ClockStateMax"] = 2147483647] = "TIME_ClockStateMax";
})(TIME_CLOCKSTATE = exports.TIME_CLOCKSTATE || (exports.TIME_CLOCKSTATE = {}));
