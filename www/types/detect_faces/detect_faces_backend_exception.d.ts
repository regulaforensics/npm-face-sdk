export class DetectFacesBackendException {
    get code(): DetectFacesBackendErrorCode
    get message(): string

    private constructor()
}

export enum DetectFacesBackendErrorCode {
    FR_FACE_NOT_DETECTED,
    FACER_NO_LICENSE,
    FACER_IS_NOT_INITIALIZED,
    FACER_COMMAND_IS_NOT_SUPPORTED,
    FACER_COMMAND_PARAMS_READ_ERROR,
    UNDEFINED
}