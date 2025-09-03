import { Size } from './size'

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

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new OutputImageCrop(
            jsonObject["type"],
            {
                size: Size.fromJson(jsonObject["size"]),
                padColor: jsonObject["padColor"],
                returnOriginalRect: jsonObject["returnOriginalRect"],
            }
        )
    }

    toJson() {
        return {
            "type": this.type,
            "size": this.size?.toJson(),
            "padColor": this.padColor,
            "returnOriginalRect": this.returnOriginalRect,
        }
    }
}

export const OutputImageCropAspectRatio = {
    RATIO_3X4: 0,
    RATIO_4X5: 1,
    RATIO_2X3: 2,
    RATIO_1X1: 3,
    RATIO_7X9: 4,
}