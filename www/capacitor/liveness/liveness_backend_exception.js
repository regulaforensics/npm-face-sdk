export class LivenessBackendException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessBackendException()

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

export const LivenessBackendErrorCode = {
    UNDEFINED: -1,
    NO_LICENSE: 200,
    NOT_INITIALIZED: 201,
    COMMAND_IS_NOT_SUPPORTED: 202,
    PARAMS_READ_ERROR: 203,
    LOW_QUALITY: 231,
    TRACK_BREAK: 246,
    CLOSED_EYES_DETECTED: 230,
    HIGH_ASYMMETRY: 232,
    FACE_OVER_EMOTIONAL: 233,
    SUNGLASSES_DETECTED: 234,
    SMALL_AGE: 235,
    HEADDRESS_DETECTED: 236,
    MEDICINE_MASK_DETECTED: 239,
    OCCLUSION_DETECTED: 240,
    FOREHEAD_GLASSES_DETECTED: 242,
    MOUTH_OPENED: 243,
    ART_MASK_DETECTED: 244,
    NOT_MATCHED: 237,
    IMAGES_COUNT_LIMIT_EXCEEDED: 238,
    ELECTRONIC_DEVICE_DETECTED: 245,
    WRONG_GEO: 247,
    WRONG_OF: 248,
    WRONG_VIEW: 249,
    TIMEOUT_LIVENESS_TRANSACTION: 250,
    FAILED_LIVENESS_TRANSACTION: 251,
    ABORTED_LIVENESS_TRANSACTION: 252,
    GENERAL_CHECK_FAIL: 253,
    PASSIVE_LIVENESS_FAIL: 254,
    PRINTED_FACE_DETECTED: 255,
    BLOCKED_REQUEST: 256,
    CORRUPTED_REQUEST: 257,
}