export class FaceCaptureException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }

    toJson() {
        return {
            "code": this.code,
            "message": this.message,
        }
    }
}

export const FaceCaptureErrorCode = {
    CANCEL: 0,
    TIMEOUT: 1,
    NOT_INITIALIZED: 2,
    SESSION_START_FAILED: 3,
    CAMERA_NOT_AVAILABLE: 4,
    CAMERA_NO_PERMISSION: 5,
    MULTIPLE_FACES_DETECTED: 6,
    IN_PROGRESS_ALREADY: 100,
    CONTEXT_IS_NULL: 101,
    USB_LIBRARY_MISSING: 102,
}