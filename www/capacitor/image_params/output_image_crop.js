export class OutputImageCrop {
    type
    size
    padColor
    returnOriginalRect

    constructor(type, params) {
        this.type = type
        this.size = params?.size
        this.padColor = params?.padColor
        this.returnOriginalRect = params?.returnOriginalRect ?? false
    }
}

export const OutputImageCropAspectRatio = {
    RATIO_3X4: 0,
    RATIO_4X5: 1,
    RATIO_2X3: 2,
    RATIO_1X1: 3,
    RATIO_7X9: 4,
}