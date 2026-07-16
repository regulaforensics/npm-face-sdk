import { OutputImageCrop } from './output_image_crop'

export class OutputImageParams {
    crop
    backgroundColor

    constructor(options) {
        this.crop = options?.crop
        this.backgroundColor = options?.backgroundColor
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new OutputImageParams()

        result.crop = OutputImageCrop.fromJson(jsonObject["crop"])
        result.backgroundColor = jsonObject["backgroundColor"]

        return result
    }

    toJson() {
        return {
            "crop": this.crop?.toJson(),
            "backgroundColor": this.backgroundColor,
        }
    }
}