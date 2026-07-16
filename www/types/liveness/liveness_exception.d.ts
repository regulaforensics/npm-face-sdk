import { LivenessBackendException } from "./liveness_backend_exception"

export class LivenessException {
    get code(): LivenessErrorCode
    get message(): string
    get underlyingError(): LivenessBackendException | null

    private constructor()
}

export enum LivenessErrorCode {
    /** FaceSDK Core is not initialized. */
    NOT_INITIALIZED,
    /** There is no valid license on the service. */
    NO_LICENSE,
    /** Liveness API call failed due to networking error or backend internal error. */
    API_CALL_FAILED,
    /** Failed when Core could not start new session. */
    SESSION_START_FAILED,
    /** User cancelled liveness processing. */
    CANCELLED,
    /** Processing finished by timeout. */
    PROCESSING_TIMEOUT,
    /** Processing failed. */
    PROCESSING_FAILED,
    /** Failed when Core cannot recognize frame. */
    PROCESSING_FRAME_FAILED,
    /** Client application did enter the background, liveness process interrupted. */
    APPLICATION_INACTIVE,
    /** Processing finished by bad face quality. */
    BAD_FACE_QUALITY,
    /** Processing finished by bad frame size. */
    BAD_FRAME_SIZE,
    /** Device has no available camera. */
    CAMERA_NOT_AVAILABLE,
    /** Application does not have camera permission. */
    CAMERA_NO_PERMISSION,
    /**
     * Application context is null.
     * 
     * Android only.
     */
    CONTEXT_IS_NULL,
    /**
     * Liveness process already in progress.
     * 
     * Android only.
     */
    IN_PROGRESS_ALREADY,
    /**
     * The camera on the current device doesn't support zoom change.
     * 
     * Android only.
     */
    ZOOM_NOT_SUPPORTED,
}