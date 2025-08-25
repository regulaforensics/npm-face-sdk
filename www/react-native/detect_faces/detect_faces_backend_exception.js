export class DetectFacesBackendException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesBackendException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

export const DetectFacesBackendErrorCode = {
    FR_FACE_NOT_DETECTED: 2,
    FACER_NO_LICENSE: 200,
    FACER_IS_NOT_INITIALIZED: 201,
    FACER_COMMAND_IS_NOT_SUPPORTED: 202,
    FACER_COMMAND_PARAMS_READ_ERROR: 203,
    UNDEFINED: -1,
}