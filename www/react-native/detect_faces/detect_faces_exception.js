import { DetectFacesBackendException } from "./detect_faces_backend_exception"

export class DetectFacesException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = DetectFacesBackendException.fromJson(jsonObject["underlyingError"])

        return result
    }

    toJson() {
        return {
            "code": this.code,
            "message": this.message,
            "underlyingError": this.underlyingError?.toJson(),
        }
    }
}

export const DetectFacesErrorCode = {
    IMAGE_EMPTY: 0,
    FR_FACE_NOT_DETECTED: 1,
    FACER_NO_LICENSE: 2,
    FACER_IS_NOT_INITIALIZED: 3,
    FACER_COMMAND_IS_NOT_SUPPORTED: 4,
    FACER_COMMAND_PARAMS_READ_ERROR: 5,
    PROCESSING_FAILED: 6,
    REQUEST_FAILED: 7,
    API_CALL_FAILED: 8,
}