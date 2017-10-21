import omx = require('../index');
export declare function log(name: string, eEvent: omx.EVENTTYPE, nData1: number, nData2: number): void;
export declare function logError(name: string, eEvent: omx.EVENTTYPE, nData1: number, nData2: number): void;
export declare function logHandlers(handlers: Array<omx.EventHandlers>): void;
