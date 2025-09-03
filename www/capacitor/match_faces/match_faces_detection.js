import { MatchFacesImage } from './match_faces_image'
import { MatchFacesDetectionFace } from './match_faces_detection_face'
import { MatchFacesException } from './match_faces_exception'

export class MatchFacesDetection {
    imageIndex
    image
    faces
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesDetection()

        result.imageIndex = jsonObject["imageIndex"]
        result.image = MatchFacesImage.fromJson(jsonObject["image"])
        result.faces = []
        if (jsonObject["faces"] != null)
            for (const item of jsonObject["faces"])
                result.faces.push(MatchFacesDetectionFace.fromJson(item))
        result.error = MatchFacesException.fromJson(jsonObject["error"])

        return result
    }

    toJson() {
        return {
            "imageIndex": this.imageIndex,
            "image": this.image?.toJson(),
            "faces": this.faces?.map(e => e.toJson()),
            "error": this.error?.toJson(),
        }
    }
}