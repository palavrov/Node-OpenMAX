"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CP_ORIGINTYPE;
(function (CP_ORIGINTYPE) {
    CP_ORIGINTYPE[CP_ORIGINTYPE["CP_OriginBegin"] = 0] = "CP_OriginBegin";
    CP_ORIGINTYPE[CP_ORIGINTYPE["CP_OriginCur"] = 1] = "CP_OriginCur";
    CP_ORIGINTYPE[CP_ORIGINTYPE["CP_OriginEnd"] = 2] = "CP_OriginEnd";
    CP_ORIGINTYPE[CP_ORIGINTYPE["CP_OriginKhronosExtensions"] = 1862270976] = "CP_OriginKhronosExtensions";
    CP_ORIGINTYPE[CP_ORIGINTYPE["CP_OriginVendorStartUnused"] = 2130706432] = "CP_OriginVendorStartUnused";
    CP_ORIGINTYPE[CP_ORIGINTYPE["CP_OriginMax"] = 2147483647] = "CP_OriginMax";
})(CP_ORIGINTYPE = exports.CP_ORIGINTYPE || (exports.CP_ORIGINTYPE = {}));
var CP_ACCESSTYPE;
(function (CP_ACCESSTYPE) {
    CP_ACCESSTYPE[CP_ACCESSTYPE["CP_AccessRead"] = 0] = "CP_AccessRead";
    CP_ACCESSTYPE[CP_ACCESSTYPE["CP_AccessWrite"] = 1] = "CP_AccessWrite";
    CP_ACCESSTYPE[CP_ACCESSTYPE["CP_AccessReadWrite"] = 2] = "CP_AccessReadWrite";
    CP_ACCESSTYPE[CP_ACCESSTYPE["CP_AccessKhronosExtensions"] = 1862270976] = "CP_AccessKhronosExtensions";
    CP_ACCESSTYPE[CP_ACCESSTYPE["CP_AccessVendorStartUnused"] = 2130706432] = "CP_AccessVendorStartUnused";
    CP_ACCESSTYPE[CP_ACCESSTYPE["CP_AccessMax"] = 2147483647] = "CP_AccessMax";
})(CP_ACCESSTYPE = exports.CP_ACCESSTYPE || (exports.CP_ACCESSTYPE = {}));
var CP_CHECKBYTESRESULTTYPE;
(function (CP_CHECKBYTESRESULTTYPE) {
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesOk"] = 0] = "CP_CheckBytesOk";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesNotReady"] = 1] = "CP_CheckBytesNotReady";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesInsufficientBytes"] = 2] = "CP_CheckBytesInsufficientBytes";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesAtEndOfStream"] = 3] = "CP_CheckBytesAtEndOfStream";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesOutOfBuffers"] = 4] = "CP_CheckBytesOutOfBuffers";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesKhronosExtensions"] = 1862270976] = "CP_CheckBytesKhronosExtensions";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesVendorStartUnused"] = 2130706432] = "CP_CheckBytesVendorStartUnused";
    CP_CHECKBYTESRESULTTYPE[CP_CHECKBYTESRESULTTYPE["CP_CheckBytesMax"] = 2147483647] = "CP_CheckBytesMax";
})(CP_CHECKBYTESRESULTTYPE = exports.CP_CHECKBYTESRESULTTYPE || (exports.CP_CHECKBYTESRESULTTYPE = {}));
var CP_EVENTTYPE;
(function (CP_EVENTTYPE) {
    CP_EVENTTYPE[CP_EVENTTYPE["CP_BytesAvailable"] = 0] = "CP_BytesAvailable";
    CP_EVENTTYPE[CP_EVENTTYPE["CP_Overflow"] = 1] = "CP_Overflow";
    CP_EVENTTYPE[CP_EVENTTYPE["CP_PipeDisconnected"] = 2] = "CP_PipeDisconnected";
    CP_EVENTTYPE[CP_EVENTTYPE["CP_EventKhronosExtensions"] = 1862270976] = "CP_EventKhronosExtensions";
    CP_EVENTTYPE[CP_EVENTTYPE["CP_EventVendorStartUnused"] = 2130706432] = "CP_EventVendorStartUnused";
    CP_EVENTTYPE[CP_EVENTTYPE["CP_EventMax"] = 2147483647] = "CP_EventMax";
})(CP_EVENTTYPE = exports.CP_EVENTTYPE || (exports.CP_EVENTTYPE = {}));
