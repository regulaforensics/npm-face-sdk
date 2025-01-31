import { MatchFacesBackendException } from './match_faces_backend_exception'

export class MatchFacesException {
    get code(): MatchFacesErrorCode
    get message(): string
    get underlyingError(): MatchFacesBackendException | null

    private constructor()
}

export enum MatchFacesErrorCode {
    IMAGE_EMPTY,
    FACE_NOT_DETECTED,
    LANDMARKS_NOT_DETECTED,
    FACE_ALIGNER_FAILED,
    DESCRIPTOR_EXTRACTOR_ERROR,
    IMAGES_COUNT_LIMIT_EXCEEDED,
    API_CALL_FAILED,
    PROCESSING_FAILED,
    NO_LICENSE
}