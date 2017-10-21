import omx = require('../index');
import stream = require('stream');
import def = require('./Definitions');
import Promise = require('promise');
export declare enum VERBOSE_LEVEL {
    None = 0,
    Info = 1,
    Debug = 2,
    Stack = 3,
}
export declare class EventHandlers {
    eEvent: omx.EVENTTYPE;
    nData1: number;
    nData2: number;
    fulfill: any;
    reject: any;
    stack: any;
    constructor(eEvent: omx.EVENTTYPE, nData1: number, nData2: number, fulfill: any, reject: any, stack?: any);
}
export declare class Component extends stream.Duplex {
    name: string;
    cname: string;
    static isOMXInit: boolean;
    static verbose: VERBOSE_LEVEL;
    static logComponent: string;
    in_port: number;
    out_port: number;
    component: def.COMPONENTTYPE;
    buf2: Buffer;
    firstReadPacket: boolean;
    firstWritePacket: boolean;
    hasPortSettingsChanged: boolean;
    first_packet: boolean;
    useOpenGL: boolean;
    graphics: omx.Graphics;
    autoClose: boolean;
    closingPromise: any;
    closed: boolean;
    in_list: Array<any>;
    out_list: Array<any>;
    constructor(name: string, cname?: string);
    log(level: VERBOSE_LEVEL, args: any[]): void;
    info(...optionalParams: any[]): void;
    debug(...optionalParams: any[]): void;
    init(): Promise<{}>;
    static initAll(components: any): Promise<{}[]>;
    initHost(): void;
    exitHandler(cleanup: any, exit: any, type_str: any, err: any): void;
    componentEventHandler(eEvent: omx.EVENTTYPE, nData1: number, nData2: number): void;
    bufferDone(direction: any, pBuffer: any): void;
    registerComponentPipe(): void;
    registerOnFinish(): void;
    static copyAsync(chunk: any, buf: any, destnStride: any, destnSliceHeight: any, offsetX: any, offsetY: any, nStride: any, width: any, nSliceHeight: any, height: any, callback: any): any;
    close(): any;
    registeredEventHandlers: Array<EventHandlers>;
    registerEventHandler(eEvent: omx.EVENTTYPE, nData1: number, nData2: number): Promise<{}>;
    setPorts(in_port: number, out_port: number): void;
    changeState(state: omx.STATETYPE): Promise<{}>;
    getState(): omx.STATETYPE;
    tunnelTo(out_port: number, sink?: Component, in_port?: number): any;
    getParameter(port: number, index: omx.INDEXTYPE): any;
    setParameter(port: number, index: omx.INDEXTYPE, format: any): any;
    sendCommand(commandType: omx.COMMANDTYPE, port: number): any;
    disableAllPorts(): Promise<any[]>;
    flush(ports?: Array<number>): any;
    disablePort(port: number): Promise<{}>;
    disablePortBuffers(ports: Array<number>): any;
    static _id: number;
    enablePort(port: number, createBuffer: boolean, useOpenGL: boolean): Promise<{}>;
    enableInputPortBuffer(): Promise<{}>;
    enableOutputPortBuffer(): Promise<{}>;
    enableInputPort(): Promise<{}>;
    enableOutputPort(): Promise<{}>;
    getInputBuffer(): any;
    emptyBufferDone: any;
    emptyBuffer(header: any): Promise<{}>;
    fillBuffer(header: any): Promise<{}>;
    doTunnel(nextComponent: Component): void;
    tunnel(nextComponent: Component): Component;
    initRead(): Promise<void> | Promise<{}>;
    readDone(outputBuffer: any): void;
    readyToRead(): void;
    _read(): void;
    writeRecursive(chunk: Buffer, offset: number): any;
    initWrite(): any;
    _write(chunk: Buffer, enc: any, next: () => void): void;
}
