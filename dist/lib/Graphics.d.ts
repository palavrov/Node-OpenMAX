import omx = require('../index');
export declare class Graphics {
    graphics: any;
    constructor();
    beginFrame(): void;
    endFrame(): void;
    drawTextureRect(texture: omx.EglImage, x0: number, y0: number, x1: number, y1: number): void;
}
