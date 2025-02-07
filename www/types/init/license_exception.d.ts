export class LicenseException {
    get code(): LicensingResultCode
    get message(): string

    private constructor()
}

export enum LicensingResultCode {
    OK,
    LICENSE_CORRUPTED,
    INVALID_DATE,
    INVALID_VERSION,
    INVALID_DEVICE_ID,
    INVALID_SYSTEM_OR_APP_ID,
    NO_CAPABILITIES,
    NO_AUTHENTICITY,
    LICENSE_ABSENT,
    NO_INTERNET,
    NO_DATABASE,
    DATABASE_INCORRECT,
}