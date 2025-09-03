import { DetectFacesAttributeResult } from './detect_faces_attribute_result'
import { ImageQualityResult } from '../image_quality/image_quality_result'
import { Rect } from '../image_params/rect'
import { Point } from '../image_params/point'

export class DetectFaceResult {
    quality
    attributes
    crop
    faceRect
    originalRect
    landmarks
    isQualityCompliant

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFaceResult()

        result.quality = []
        if (jsonObject["quality"] != null)
            for (const item of jsonObject["quality"])
                result.quality.push(ImageQualityResult.fromJson(item))
        result.attributes = []
        if (jsonObject["attributes"] != null)
            for (const item of jsonObject["attributes"])
                result.attributes.push(DetectFacesAttributeResult.fromJson(item))
        result.crop = jsonObject["crop"]
        result.faceRect = Rect.fromJson(jsonObject["faceRect"])
        result.originalRect = Rect.fromJson(jsonObject["originalRect"])
        result.landmarks = []
        if (jsonObject["landmarks"] != null)
            for (const item of jsonObject["landmarks"])
                result.landmarks.push(Point.fromJson(item))
        result.isQualityCompliant = jsonObject["isQualityCompliant"]

        return result
    }

    toJson() {
        return {
            "quality": this.quality?.map(e => e.toJson()),
            "crop": this.crop,
            "attributes": this.attributes?.map(e => e.toJson()),
            "landmarks": this.landmarks?.map(e => e.toJson()),
            "faceRect": this.faceRect?.toJson(),
            "originalRect": this.originalRect?.toJson(),
            "isQualityCompliant": this.isQualityCompliant,
        }
    }
}