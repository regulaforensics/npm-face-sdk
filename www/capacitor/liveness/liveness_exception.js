import { LivenessBackendException } from "./liveness_backend_exception"

export class LivenessException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = LivenessBackendException.fromJson(jsonObject["underlyingError"])

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

export const LivenessErrorCode = {
    NOT_INITIALIZED: 0,
    NO_LICENSE: 1,
    API_CALL_FAILED: 2,
    SESSION_START_FAILED: 3,
    CANCELLED: 4,
    PROCESSING_TIMEOUT: 5,
    PROCESSING_FAILED: 6,
    PROCESSING_FRAME_FAILED: 7,
    APPLICATION_INACTIVE: 8,
    BAD_FACE_QUALITY: 9,
    BAD_FRAME_SIZE: 10,
    CAMERA_NOT_AVAILABLE: 11,
    CAMERA_NO_PERMISSION: 12,
    CONTEXT_IS_NULL: 13,
    IN_PROGRESS_ALREADY: 14,
    ZOOM_NOT_SUPPORTED: 15,
}
