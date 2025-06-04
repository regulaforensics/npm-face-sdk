import { LicenseException } from "./license_exception"

export class InitException {
    get code(): InitErrorCode
    get message(): string
    get underlyingError(): LicenseException | null

    private constructor()
}

export enum InitErrorCode {
    IN_PROGRESS_ALREADY,
    MISSING_CORE,
    INTERNAL_CORE_ERROR,
    BAD_LICENSE,
    UNAVAILABLE,
    CONTEXT_IS_NULL,
    RESOURCE_DAT_ABSENT,
    LICENSE_IS_NULL,
}