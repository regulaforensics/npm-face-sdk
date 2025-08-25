export class LicenseException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LicenseException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

export const LicensingResultCode = {
    OK: 0,
    LICENSE_CORRUPTED: 1,
    INVALID_DATE: 2,
    INVALID_VERSION: 3,
    INVALID_DEVICE_ID: 4,
    INVALID_SYSTEM_OR_APP_ID: 5,
    NO_CAPABILITIES: 6,
    NO_AUTHENTICITY: 7,
    LICENSE_ABSENT: 8,
    NO_INTERNET: 9,
    NO_DATABASE: 10,
    DATABASE_INCORRECT: 11,
}