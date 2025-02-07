import { MatchFacesBackendException } from './match_faces_backend_exception'

export class MatchFacesException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = MatchFacesBackendException.fromJson(jsonObject["underlyingError"])

        return result
    }
}

export const MatchFacesErrorCode = {
    IMAGE_EMPTY: 0,
    FACE_NOT_DETECTED: 1,
    LANDMARKS_NOT_DETECTED: 2,
    FACE_ALIGNER_FAILED: 3,
    DESCRIPTOR_EXTRACTOR_ERROR: 4,
    IMAGES_COUNT_LIMIT_EXCEEDED: 5,
    API_CALL_FAILED: 6,
    PROCESSING_FAILED: 7,
    NO_LICENSE: 8,
}