import { Size } from './size'

export class OutputImageCrop {
    get type(): OutputImageCropAspectRatio
    get size(): Size | null
    get padColor(): number | null
    get returnOriginalRect(): boolean

    constructor(
        type: OutputImageCropAspectRatio,
        params?: {
            size?: Size,
            padColor?: number,
            returnOriginalRect?: boolean,
        }
    )
}

export enum OutputImageCropAspectRatio {
    RATIO_3X4,
    RATIO_4X5,
    RATIO_2X3,
    RATIO_1X1,
    RATIO_7X9
}