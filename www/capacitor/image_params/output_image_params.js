import { OutputImageCrop } from './output_image_crop'

export class OutputImageParams {
    crop
    backgroundColor

    constructor(params) {
        this.crop = params?.crop
        this.backgroundColor = params?.backgroundColor
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