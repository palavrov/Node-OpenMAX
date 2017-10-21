import omx = require('../../index');
export declare class AUDIO_PORTDEFINITIONTYPE {
    pNativeRender: any;
    bFlagErrorConcealment: boolean;
    eEncoding: omx.AUDIO_CODINGTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_PORTFORMATTYPE {
    nIndex: number;
    eEncoding: omx.AUDIO_CODINGTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_PCMMODETYPE {
    nChannels: number;
    eNumData: omx.NUMERICALDATATYPE;
    eEndian: omx.ENDIANTYPE;
    bInterleaved: boolean;
    nBitPerSample: number;
    nSamplingRate: number;
    ePCMMode: omx.AUDIO_PCMMODETYPE;
    eChannelMapping: omx.AUDIO_CHANNELTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_MP3TYPE {
    nChannels: number;
    nBitRate: number;
    nSampleRate: number;
    nAudioBandWidth: number;
    eChannelMode: omx.AUDIO_CHANNELMODETYPE;
    eFormat: omx.AUDIO_MP3STREAMFORMATTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_DDPTYPE {
    nChannels: number;
    nBitRate: number;
    nSampleRate: number;
    eBitStreamId: omx.AUDIO_DDPBITSTREAMID;
    eBitStreamMode: omx.AUDIO_DDPBITSTREAMMODE;
    eDolbySurroundMode: omx.AUDIO_DDPDOLBYSURROUNDMODE;
    eChannelMapping: omx.AUDIO_CHANNELTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_DTSTYPE {
    nChannels: number;
    nBitRate: number;
    nSampleRate: number;
    nDtsType: number;
    nFormat: number;
    nDtsFrameSizeBytes: number;
    eChannelMapping: omx.AUDIO_CHANNELTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_AACPROFILETYPE {
    nChannels: number;
    nSampleRate: number;
    nBitRate: number;
    nAudioBandWidth: number;
    nFrameLength: number;
    nAACtools: number;
    nAACERtools: number;
    eAACProfile: omx.AUDIO_AACPROFILETYPE;
    eAACStreamFormat: omx.AUDIO_AACSTREAMFORMATTYPE;
    eChannelMode: omx.AUDIO_CHANNELMODETYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_VORBISTYPE {
    nChannels: number;
    nBitRate: number;
    nMinBitRate: number;
    nMaxBitRate: number;
    nSampleRate: number;
    nAudioBandWidth: number;
    nQuality: number;
    bManaged: boolean;
    bDownmix: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_WMATYPE {
    nChannels: number;
    nBitRate: number;
    eFormat: omx.AUDIO_WMAFORMATTYPE;
    eProfile: omx.AUDIO_WMAPROFILETYPE;
    nSamplingRate: number;
    nBlockAlign: number;
    nEncodeOptions: number;
    nSuperBlockAlign: number;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_RATYPE {
    nChannels: number;
    nSamplingRate: number;
    nBitsPerFrame: number;
    nSamplePerFrame: number;
    nCouplingQuantBits: number;
    nCouplingStartRegion: number;
    nNumRegions: number;
    eFormat: omx.AUDIO_RAFORMATTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_SBCTYPE {
    nChannels: number;
    nBitRate: number;
    nSampleRate: number;
    nBlocks: number;
    nSubbands: number;
    nBitPool: number;
    bEnableBitrate: boolean;
    eChannelMode: omx.AUDIO_CHANNELMODETYPE;
    eSBCAllocType: omx.AUDIO_SBCALLOCMETHODTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_ADPCMTYPE {
    nChannels: number;
    nBitsPerSample: number;
    nSampleRate: number;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_G723TYPE {
    nChannels: number;
    bDTX: boolean;
    eBitRate: omx.AUDIO_G723RATE;
    bHiPassFilter: boolean;
    bPostFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_G726TYPE {
    nChannels: number;
    eG726Mode: omx.AUDIO_G726MODE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_G729TYPE {
    nChannels: number;
    bDTX: boolean;
    eBitType: omx.AUDIO_G729TYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_AMRTYPE {
    nChannels: number;
    nBitRate: number;
    eAMRBandMode: omx.AUDIO_AMRBANDMODETYPE;
    eAMRDTXMode: omx.AUDIO_AMRDTXMODETYPE;
    eAMRFrameFormat: omx.AUDIO_AMRFRAMEFORMATTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_GSMFRTYPE {
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_GSMHRTYPE {
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_GSMEFRTYPE {
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_TDMAFRTYPE {
    nChannels: number;
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_TDMAEFRTYPE {
    nChannels: number;
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_PDCFRTYPE {
    nChannels: number;
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_PDCEFRTYPE {
    nChannels: number;
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_PDCHRTYPE {
    nChannels: number;
    bDTX: boolean;
    bHiPassFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_QCELP8TYPE {
    nChannels: number;
    nBitRate: number;
    eCDMARate: omx.AUDIO_CDMARATETYPE;
    nMinBitRate: number;
    nMaxBitRate: number;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_QCELP13TYPE {
    nChannels: number;
    eCDMARate: omx.AUDIO_CDMARATETYPE;
    nMinBitRate: number;
    nMaxBitRate: number;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_EVRCTYPE {
    nChannels: number;
    eCDMARate: omx.AUDIO_CDMARATETYPE;
    bRATE_REDUCon: boolean;
    nMinBitRate: number;
    nMaxBitRate: number;
    bHiPassFilter: boolean;
    bNoiseSuppressor: boolean;
    bPostFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_SMVTYPE {
    nChannels: number;
    eCDMARate: omx.AUDIO_CDMARATETYPE;
    bRATE_REDUCon: boolean;
    nMinBitRate: number;
    nMaxBitRate: number;
    bHiPassFilter: boolean;
    bNoiseSuppressor: boolean;
    bPostFilter: boolean;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_MIDITYPE {
    nFileSize: number;
    sMaxPolyphony: omx.BU32;
    bLoadDefaultSound: boolean;
    eMidiFormat: omx.AUDIO_MIDIFORMATTYPE;
    constructor(p?: any);
}
export declare class AUDIO_PARAM_MIDILOADUSERSOUNDTYPE {
    nDLSIndex: number;
    nDLSSize: number;
    eMidiSoundBank: omx.AUDIO_MIDISOUNDBANKTYPE;
    eMidiSoundBankLayout: omx.AUDIO_MIDISOUNDBANKLAYOUTTYPE;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MIDIIMMEDIATEEVENTTYPE {
    nMidiEventSize: number;
    nMidiEvents: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MIDISOUNDBANKPROGRAMTYPE {
    nChannel: number;
    nIDProgram: number;
    nIDSoundBank: number;
    nUserSoundBankIndex: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MIDICONTROLTYPE {
    sPitchTransposition: omx.BS32;
    sPlayBackRate: omx.BU32;
    sTempo: omx.BU32;
    nMaxPolyphony: number;
    nNumRepeat: number;
    nStopTime: number;
    nChannelMuteMask: number;
    nChannelSoloMask: number;
    nTrack0031MuteMask: number;
    nTrack3263MuteMask: number;
    nTrack0031SoloMask: number;
    nTrack3263SoloMask: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MIDISTATUSTYPE {
    nNumTracks: number;
    nDuration: number;
    nPosition: number;
    bVibra: boolean;
    nNumMetaEvents: number;
    nNumActiveVoices: number;
    eMIDIPlayBackState: omx.AUDIO_MIDIPLAYBACKSTATETYPE;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MIDIMETAEVENTTYPE {
    nIndex: number;
    nMetaEventType: number;
    nMetaEventSize: number;
    nTrack: number;
    nPosition: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MIDIMETAEVENTDATATYPE {
    nIndex: number;
    nMetaEventSize: number;
    nData: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_VOLUMETYPE {
    bLinear: boolean;
    sVolume: omx.BS32;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_CHANNELVOLUMETYPE {
    nChannel: number;
    bLinear: boolean;
    sVolume: omx.BS32;
    bIsMIDI: boolean;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_BALANCETYPE {
    nBalance: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_MUTETYPE {
    bMute: boolean;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_CHANNELMUTETYPE {
    nChannel: number;
    bMute: boolean;
    bIsMIDI: boolean;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_LOUDNESSTYPE {
    bLoudness: boolean;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_BASSTYPE {
    bEnable: boolean;
    nBass: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_TREBLETYPE {
    bEnable: boolean;
    nTreble: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_EQUALIZERTYPE {
    bEnable: boolean;
    sBandIndex: omx.BU32;
    sCenterFreq: omx.BU32;
    sBandLevel: omx.BS32;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_STEREOWIDENINGTYPE {
    bEnable: boolean;
    eWideningType: omx.AUDIO_STEREOWIDENINGTYPE;
    nStereoWidening: number;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_CHORUSTYPE {
    bEnable: boolean;
    sDelay: omx.BU32;
    sModulationRate: omx.BU32;
    nModulationDepth: number;
    nFeedback: omx.BU32;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_REVERBERATIONTYPE {
    bEnable: boolean;
    sRoomLevel: omx.BS32;
    sRoomHighFreqLevel: omx.BS32;
    sReflectionsLevel: omx.BS32;
    sReflectionsDelay: omx.BU32;
    sReverbLevel: omx.BS32;
    sReverbDelay: omx.BU32;
    sDecayTime: omx.BU32;
    nDecayHighFreqRatio: omx.BU32;
    nDensity: number;
    nDiffusion: number;
    sReferenceHighFreq: omx.BU32;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_ECHOCANCELATIONTYPE {
    eEchoCancelation: omx.AUDIO_ECHOCANTYPE;
    constructor(p?: any);
}
export declare class AUDIO_CONFIG_NOISEREDUCTIONTYPE {
    bNoiseReduction: boolean;
    constructor(p?: any);
}
