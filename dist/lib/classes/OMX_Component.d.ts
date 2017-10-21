import omx = require('../../index');
export declare class PARAM_PORTDEFINITIONTYPE {
    eDir: omx.DIRTYPE;
    nBufferCountActual: number;
    nBufferCountMin: number;
    nBufferSize: number;
    bEnabled: boolean;
    bPopulated: boolean;
    eDomain: omx.PORTDOMAINTYPE;
    audio: omx.AUDIO_PORTDEFINITIONTYPE;
    video: omx.VIDEO_PORTDEFINITIONTYPE;
    image: omx.IMAGE_PORTDEFINITIONTYPE;
    other: omx.OTHER_PORTDEFINITIONTYPE;
    constructor(p?: any);
}
export declare class PARAM_U32TYPE {
    nU32: number;
    constructor(p?: any);
}
export declare class PARAM_SUSPENSIONPOLICYTYPE {
    ePolicy: omx.SUSPENSIONPOLICYTYPE;
    constructor(p?: any);
}
export declare class PARAM_SUSPENSIONTYPE {
    eType: omx.SUSPENSIONTYPE;
    constructor(p?: any);
}
export declare class CONFIG_BOOLEANTYPE {
    bEnabled: boolean;
    constructor(p?: any);
}
export declare class PARAM_CONTENTURITYPE {
    contentURI: number;
    constructor(p?: any);
}
export declare class PARAM_CONTENTPIPETYPE {
    hPipe: any;
    constructor(p?: any);
}
export declare class RESOURCECONCEALMENTTYPE {
    bResourceConcealmentForbidden: boolean;
    constructor(p?: any);
}
export declare class CONFIG_METADATAITEMCOUNTTYPE {
    eScopeMode: omx.METADATASCOPETYPE;
    nScopeSpecifier: number;
    nMetadataItemCount: number;
    constructor(p?: any);
}
export declare class CONFIG_METADATAITEMTYPE {
    eScopeMode: omx.METADATASCOPETYPE;
    nScopeSpecifier: number;
    nMetadataItemIndex: number;
    eSearchMode: omx.METADATASEARCHMODETYPE;
    eKeyCharset: omx.METADATACHARSETTYPE;
    nKeySizeUsed: number;
    nKey: number;
    eValueCharset: omx.METADATACHARSETTYPE;
    nValueMaxSize: number;
    nValueSizeUsed: number;
    nValue: number;
    constructor(p?: any);
}
export declare class CONFIG_CONTAINERNODECOUNTTYPE {
    bAllKeys: boolean;
    nParentNodeID: number;
    nNumNodes: number;
    constructor(p?: any);
}
export declare class CONFIG_CONTAINERNODEIDTYPE {
    bAllKeys: boolean;
    nParentNodeID: number;
    nNodeIndex: number;
    nNodeID: number;
    bIsLeafType: boolean;
    constructor(p?: any);
}
export declare class PARAM_METADATAFILTERTYPE {
    bAllKeys: boolean;
    eKeyCharset: omx.METADATACHARSETTYPE;
    nKeySizeUsed: number;
    nKey: number;
    nLanguageCountrySizeUsed: number;
    nLanguageCountry: number;
    bEnabled: boolean;
    constructor(p?: any);
}
