import { ImageQualityRange } from '../image_quality/image_quality_range'

export class DetectFacesAttributeResult {
    attribute
    value
    range
    confidence

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesAttributeResult()

        result.attribute = jsonObject["attribute"]
        result.value = jsonObject["value"]
        result.range = ImageQualityRange.fromJson(jsonObject["range"])
        result.confidence = jsonObject["confidence"]

        return result
    }
}