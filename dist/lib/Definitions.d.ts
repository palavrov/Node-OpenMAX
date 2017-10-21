import omx = require('../index');
export interface Node_OMX {
    bcm_host_init(): any;
    bcm_host_deinit(): any;
    OMX_Init(): any;
    OMX_Deinit(): any;
    copyAsync(chunk: any, buf: any, destnStride: any, destnSliceHeight: any, offsetX: any, offsetY: any, nStride: any, width: any, nSliceHeight: any, height: any, callback: any): any;
    COMPONENTTYPE(name: string, eventHandlerCallback: any, eventBufferCallback: any): COMPONENTTYPE;
}
export interface COMPONENTTYPE {
    close(): any;
    on(event: string, callback: (eEvent: omx.EVENTTYPE, nData1: number, nData2: number) => void): any;
    emit(event: string): any;
    setParameter(port: number, index: omx.INDEXTYPE, format: any): any;
    changeState(state: omx.STATETYPE): any;
    getState(): any;
    tunnelTo(out_port: number, sink: any, in_port: number): any;
    getParameter(port: number, index: omx.INDEXTYPE): any;
    sendCommand(commandType: omx.COMMANDTYPE, port: number): any;
    useBuffer(port: number, buf: Buffer): any;
    freeBuffer(port: number, buf: Buffer): any;
    useEGLImage(port: number, buf: omx.EglImage): any;
    emptyBuffer(header: any): any;
    emptyBufferAsync(header: any, any: any): any;
    fillBuffer(header: any): any;
    fillBufferAsync(header: any, any: any): any;
}
