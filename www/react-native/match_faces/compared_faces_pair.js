import { ComparedFace } from './compared_face'
import { MatchFacesException } from './match_faces_exception'

export class ComparedFacesPair {
    first
    second
    similarity
    score
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ComparedFacesPair()

        result.first = ComparedFace.fromJson(jsonObject["first"])
        result.second = ComparedFace.fromJson(jsonObject["second"])
        result.similarity = jsonObject["similarity"]
        result.score = jsonObject["score"]
        result.error = MatchFacesException.fromJson(jsonObject["error"])

        return result
    }
}