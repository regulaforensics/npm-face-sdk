import { ImageQualityCharacteristic } from '../image_quality/image_quality_characteristic'
import { OutputImageParams } from '../image_params/output_image_params'

export class DetectFacesConfig {
    attributes
    customQuality
    outputImageParams
    onlyCentralFace

    constructor(params) {
        this.onlyCentralFace = false
        this.attributes = params?.attributes
        this.customQuality = params?.customQuality
        this.outputImageParams = params?.outputImageParams
        this.onlyCentralFace = params?.onlyCentralFace ?? this.onlyCentralFace
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesConfig()

        if (jsonObject["attributes"] != null) {
            result.attributes = []
            for (const item of jsonObject["attributes"]) {
                result.attributes.push(item)
            }
        }
        if (jsonObject["customQuality"] != null) {
            result.customQuality = []
            for (const item of jsonObject["customQuality"]) {
                result.customQuality.push(ImageQualityCharacteristic.fromJson(item))
            }
        }
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"])
        result.onlyCentralFace = jsonObject["onlyCentralFace"]

        return result
    }

    toJson() {
        return {
            "attributes": this.attributes?.map(e => e),
            "customQuality": this.customQuality?.map(e => e.toJson()),
            "outputImageParams": this.outputImageParams?.toJson(),
            "onlyCentralFace": this.onlyCentralFace,
        }
    }
}