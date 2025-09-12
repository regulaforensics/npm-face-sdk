import { LicenseException } from "./license_exception"

export class InitException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new InitException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = LicenseException.fromJson(jsonObject["underlyingError"])

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

export const InitErrorCode = {
    IN_PROGRESS_ALREADY: 0,
    MISSING_CORE: 1,
    INTERNAL_CORE_ERROR: 2,
    BAD_LICENSE: 3,
    UNAVAILABLE: 4,
    CONTEXT_IS_NULL: 100,
    RESOURCE_DAT_ABSENT: 101,
    LICENSE_IS_NULL: 102,
}