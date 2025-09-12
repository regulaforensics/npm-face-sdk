import { Point } from '../image_params/point'
import { Rect } from '../image_params/rect'

export class MatchFacesDetectionFace {
    faceIndex
    landmarks
    faceRect
    rotationAngle
    originalRect
    crop

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesDetectionFace()

        result.faceIndex = jsonObject["faceIndex"]
        result.landmarks = []
        if (jsonObject["landmarks"] != null)
            for (const item of jsonObject["landmarks"])
                result.landmarks.push(Point.fromJson(item))
        result.faceRect = Rect.fromJson(jsonObject["faceRect"])
        result.rotationAngle = jsonObject["rotationAngle"]
        result.originalRect = Rect.fromJson(jsonObject["originalRect"])
        result.crop = jsonObject["crop"]

        return result
    }

    toJson() {
        return {
            "faceIndex": this.faceIndex,
            "landmarks": this.landmarks?.map(e => e.toJson()),
            "faceRect": this.faceRect?.toJson(),
            "rotationAngle": this.rotationAngle,
            "originalRect": this.originalRect?.toJson(),
            "crop": this.crop,
        }
    }
}