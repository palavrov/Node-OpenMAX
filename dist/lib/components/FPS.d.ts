import stream = require('stream');
export declare class FPS extends stream.Duplex {
    ms: number;
    fps: number;
    numFrame: number;
    lastSec: number;
    constructor(ms?: number);
    _read(): void;
    _write(chunk: any, enc: any, next: any): void;
}
