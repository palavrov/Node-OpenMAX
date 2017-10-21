import omx = require('../../index');
export declare class TIME_CONFIG_SEEKMODETYPE {
    eType: omx.TIME_SEEKMODETYPE;
    constructor(p?: any);
}
export declare class TIME_CONFIG_TIMESTAMPTYPE {
    nTimestamp: omx.TICKS;
    constructor(p?: any);
}
export declare class TIME_CONFIG_MEDIATIMEREQUESTTYPE {
    nMediaTimestamp: omx.TICKS;
    nOffset: omx.TICKS;
    constructor(p?: any);
}
export declare class TIME_MEDIATIMETYPE {
    nClientPrivate: number;
    eUpdateType: omx.TIME_UPDATETYPE;
    nMediaTimestamp: omx.TICKS;
    nOffset: omx.TICKS;
    nWallTimeAtMediaTime: omx.TICKS;
    xScale: number;
    eState: omx.TIME_CLOCKSTATE;
    constructor(p?: any);
}
export declare class TIME_CONFIG_SCALETYPE {
    xScale: number;
    constructor(p?: any);
}
export declare class TIME_CONFIG_CLOCKSTATETYPE {
    eState: omx.TIME_CLOCKSTATE;
    nStartTime: omx.TICKS;
    nOffset: omx.TICKS;
    nWaitMask: number;
    constructor(p?: any);
}
export declare class TIME_CONFIG_ACTIVEREFCLOCKTYPE {
    eClock: omx.TIME_REFCLOCKTYPE;
    constructor(p?: any);
}
export declare class OTHER_CONFIG_POWERTYPE {
    bEnablePM: boolean;
    constructor(p?: any);
}
export declare class OTHER_CONFIG_STATSTYPE {
    constructor(p?: any);
}
export declare class OTHER_PORTDEFINITIONTYPE {
    eFormat: omx.OTHER_FORMATTYPE;
    constructor(p?: any);
}
export declare class OTHER_PARAM_PORTFORMATTYPE {
    nIndex: number;
    eFormat: omx.OTHER_FORMATTYPE;
    constructor(p?: any);
}
