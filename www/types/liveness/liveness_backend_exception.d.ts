export class LivenessBackendException {
    get code(): LivenessBackendErrorCode
    get message(): string

    private constructor()
}

export enum LivenessBackendErrorCode {
    UNDEFINED,
    NO_LICENSE,
    LOW_QUALITY,
    TRACK_BREAK,
    CLOSED_EYES_DETECTED,
    HIGH_ASYMMETRY,
    FACE_OVER_EMOTIONAL,
    SUNGLASSES_DETECTED,
    SMALL_AGE,
    HEADDRESS_DETECTED,
    MEDICINE_MASK_DETECTED,
    OCCLUSION_DETECTED,
    FOREHEAD_GLASSES_DETECTED,
    MOUTH_OPENED,
    ART_MASK_DETECTED,
    NOT_MATCHED,
    IMAGES_COUNT_LIMIT_EXCEEDED,
    ELECTRONIC_DEVICE_DETECTED,
    WRONG_GEO,
    WRONG_OF,
    WRONG_VIEW,
}