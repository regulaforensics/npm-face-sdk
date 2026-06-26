import { LivenessBackendException } from "./liveness_backend_exception"

export class LivenessException {
    get code(): LivenessErrorCode
    get message(): string
    get underlyingError(): LivenessBackendException | null

    private constructor()
}

export enum LivenessErrorCode {
    NOT_INITIALIZED,
    NO_LICENSE,
    API_CALL_FAILED,
    SESSION_START_FAILED,
    CANCELLED,
    PROCESSING_TIMEOUT,
    PROCESSING_FAILED,
    PROCESSING_FRAME_FAILED,
    APPLICATION_INACTIVE,
    CONTEXT_IS_NULL,
    IN_PROGRESS_ALREADY,
    ZOOM_NOT_SUPPORTED,
    CAMERA_NO_PERMISSION,
    CAMERA_NOT_AVAILABLE,
}