import { ComparedFacesPair } from './compared_faces_pair'
import { MatchFacesDetection } from './match_faces_detection'
import { MatchFacesException } from './match_faces_exception'

export class MatchFacesResponse {
    results
    detections
    tag
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesResponse()

        result.results = []
        if (jsonObject["results"] != null)
            for (const item of jsonObject["results"])
                result.results.push(ComparedFacesPair.fromJson(item))
        result.detections = []
        if (jsonObject["detections"] != null)
            for (const item of jsonObject["detections"])
                result.detections.push(MatchFacesDetection.fromJson(item))
        result.tag = jsonObject["tag"]
        result.error = MatchFacesException.fromJson(jsonObject["error"])

        return result
    }
}