import { DetectFacesBackendException } from "./detect_faces_backend_exception"

export class DetectFacesException {
    get code(): DetectFacesErrorCode
    get message(): string
    get underlyingError(): DetectFacesBackendException | null

    private constructor()
}

/**
 * Error codes for the {@link DetectFacesResponse} errors.
 */
export enum DetectFacesErrorCode {
    IMAGE_EMPTY,
    FR_FACE_NOT_DETECTED,
    FACER_NO_LICENSE,
    FACER_IS_NOT_INITIALIZED,
    FACER_COMMAND_IS_NOT_SUPPORTED,
    FACER_COMMAND_PARAMS_READ_ERROR,
    PROCESSING_FAILED,
    REQUEST_FAILED,
    API_CALL_FAILED
}