import omx = require('../../index');
export declare class Clock extends omx.Component {
    constructor(name?: string);
    run(): this;
    stop(): this;
}
