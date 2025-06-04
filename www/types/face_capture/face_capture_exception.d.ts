export class FaceCaptureException {
    get code(): FaceCaptureErrorCode
    get message(): string

    private constructor()
}

export enum FaceCaptureErrorCode {
    CANCEL,
    TIMEOUT,
    NOT_INITIALIZED,
    SESSION_START_FAILED,
    CAMERA_NOT_AVAILABLE,
    CAMERA_NO_PERMISSION,
    IN_PROGRESS_ALREADY,
    CONTEXT_IS_NULL
}