import { MatchFacesImage } from './match_faces_image'
import { MatchFacesDetectionFace } from './match_faces_detection_face'

export class ComparedFace {
    imageIndex
    image
    faceIndex
    face

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ComparedFace()

        result.imageIndex = jsonObject["imageIndex"]
        result.image = MatchFacesImage.fromJson(jsonObject["image"])
        result.faceIndex = jsonObject["faceIndex"]
        result.face = MatchFacesDetectionFace.fromJson(jsonObject["face"])

        return result
    }

    toJson() {
        return {
            "imageIndex": this.imageIndex,
            "image": this.image?.toJson(),
            "faceIndex": this.faceIndex,
            "face": this.face?.toJson(),
        }
    }
}