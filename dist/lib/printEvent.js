"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var omx = require("../index");
function log(name, eEvent, nData1, nData2) {
    switch (eEvent) {
        case omx.EVENTTYPE.EventCmdComplete:
            switch (nData1) {
                case omx.COMMANDTYPE.CommandStateSet:
                    console.log("callback state changed (%s) to %d", name, nData2);
                    break;
                case omx.COMMANDTYPE.CommandPortDisable:
                    break;
                case omx.COMMANDTYPE.CommandPortEnable:
                    console.log("callback port enable %d", name, nData2);
                    break;
                case omx.COMMANDTYPE.CommandFlush:
                    console.log("callback port flush %d", name, nData2);
                    break;
                case omx.COMMANDTYPE.CommandMarkBuffer:
                    console.log("callback mark buffer %d", name, nData2);
                    break;
                default:
                    break;
            }
            break;
        case omx.EVENTTYPE.EventBufferFlag:
            console.log("event_handler::EventBufferFlag");
            break;
        case omx.EVENTTYPE.EventPortSettingsChanged:
            console.log("event_handler::EventPortSettingsChanged");
            break;
        case omx.EVENTTYPE.EventMark:
            console.log("event_handler::EventMark");
            break;
    }
    logError(name, eEvent, nData1, nData2);
}
exports.log = log;
function logError(name, eEvent, nData1, nData2) {
    switch (eEvent) {
        case omx.EVENTTYPE.EventError:
            var error = nData1;
            switch (error) {
                case omx.ERRORTYPE.ErrorPortUnpopulated:
                    console.log("port unpopulated %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorSameState:
                    console.log("same state %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorBadParameter:
                    console.log("bad parameter %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorIncorrectStateTransition:
                    console.log("incorrect state transition %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorBadPortIndex:
                    console.log("bad port index %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorStreamCorrupt:
                    console.log("stream corrupt %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorInsufficientResources:
                    console.log("insufficient resources %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorUnsupportedSetting:
                    console.log("unsupported setting %x (%d)", name, error, nData2);
                    break;
                case omx.ERRORTYPE.ErrorOverflow:
                    console.log("overflow %x (%d)", name, error, nData2);
                    break;
                default:
                    console.log("Error on %s unexpected error", name, omx.ERRORTYPE[error], nData2);
                    break;
            }
            break;
    }
}
exports.logError = logError;
function logHandlers(handlers) {
    for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
        var handler = handlers_1[_i];
        console.log('    handler', omx.EVENTTYPE[handler.eEvent], handler.nData1, handler.nData2);
    }
}
exports.logHandlers = logHandlers;
