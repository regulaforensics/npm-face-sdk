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
    /** Processing failed - multiple faces detected. */
    MULTIPLE_FACES_DETECTED,
    IN_PROGRESS_ALREADY,
    CONTEXT_IS_NULL,
    /**
     * USB camera library is missing.
     *
     * Android only.
     */
    USB_LIBRARY_MISSING
}