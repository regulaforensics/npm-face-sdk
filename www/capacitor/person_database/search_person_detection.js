import { Point } from "../image_params/point"
import { Rect } from "../image_params/rect"

export class SearchPersonDetection {
    landmarks = []
    rect
    crop
    rotationAngle

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new SearchPersonDetection()

        for (var item of jsonObject["landmarks"])
            result.landmarks.push(Point.fromJson(item))
        result.rect = Rect.fromJson(jsonObject["rect"])
        result.crop = jsonObject["crop"]
        result.rotationAngle = jsonObject["rotationAngle"]

        return result
    }
}
