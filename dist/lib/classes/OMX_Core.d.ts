import omx = require('../../index');
export declare class PRIORITYMGMTTYPE {
    nGroupPriority: number;
    nGroupID: number;
    constructor(p?: any);
}
export declare class PARAM_COMPONENTROLETYPE {
    cRole: number;
    constructor(p?: any);
}
export declare class BUFFERHEADERTYPE {
    pBuffer: number;
    nAllocLen: number;
    nFilledLen: number;
    nOffset: number;
    hMarkTargetComponent: any;
    nTickCount: number;
    nTimeStamp: omx.TICKS;
    nFlags: number;
    nOutputPortIndex: number;
    nInputPortIndex: number;
    constructor(p?: any);
}
export declare class OTHER_EXTRADATATYPE {
    eType: omx.EXTRADATATYPE;
    nDataSize: number;
    data: number;
    constructor(p?: any);
}
export declare class PORT_PARAM_TYPE {
    nPorts: number;
    nStartPortNumber: number;
    constructor(p?: any);
}
export declare class PARAM_BUFFERSUPPLIERTYPE {
    eBufferSupplier: omx.BUFFERSUPPLIERTYPE;
    constructor(p?: any);
}
export declare class TUNNELSETUPTYPE {
    nTunnelFlags: number;
    eSupplier: omx.BUFFERSUPPLIERTYPE;
    constructor(p?: any);
}
