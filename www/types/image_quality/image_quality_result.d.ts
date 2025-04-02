import { ImageQualityRange } from './image_quality_range'
import { ImageQualityCharacteristicName } from './image_quality_characteristic_name'

export class ImageQualityResult {
    get group(): ImageQualityGroupName
    get name(): ImageQualityCharacteristicName
    get status(): ImageQualityResultStatus
    get value(): number
    get range(): ImageQualityRange

    private constructor()
}

export enum ImageQualityGroupName {
    IMAGE_CHARACTERISTICS,
    HEAD_SIZE_AND_POSITION,
    FACE_QUALITY,
    EYES_CHARACTERISTICS,
    SHADOWS_AND_LIGHTNING,
    POSE_AND_EXPRESSION,
    HEAD_OCCLUSION,
    BACKGROUND,
    UNKNOWN,
}

export enum ImageQualityResultStatus {
    FALSE,
    TRUE,
    UNDETERMINED,
}