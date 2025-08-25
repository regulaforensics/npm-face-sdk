import { ComparedFacesPair } from './compared_faces_pair'

export class ComparedFacesSplit {
    matchedFaces
    unmatchedFaces

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ComparedFacesSplit()

        result.matchedFaces = []
        if (jsonObject["matchedFaces"] != null)
            for (const item of jsonObject["matchedFaces"])
                result.matchedFaces.push(ComparedFacesPair.fromJson(item))
        result.unmatchedFaces = []
        if (jsonObject["unmatchedFaces"] != null)
            for (const item of jsonObject["unmatchedFaces"])
                result.unmatchedFaces.push(ComparedFacesPair.fromJson(item))

        return result
    }
}