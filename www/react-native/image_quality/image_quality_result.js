import { ImageQualityRange } from './image_quality_range'

export class ImageQualityResult {
    group
    name
    status
    value
    range

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageQualityResult()

        result.name = jsonObject["name"]
        result.group = jsonObject["group"]
        result.status = jsonObject["status"]
        result.range = ImageQualityRange.fromJson(jsonObject["range"])
        result.value = jsonObject["value"]

        return result
    }

    toJson() {
        return {
            "group": this.group,
            "name": this.name,
            "status": this.status,
            "value": this.value,
            "range": this.range?.toJson(),
        }
    }
}

export const ImageQualityGroupName = {
    IMAGE_CHARACTERISTICS: 1,
    HEAD_SIZE_AND_POSITION: 2,
    FACE_QUALITY: 3,
    EYES_CHARACTERISTICS: 4,
    SHADOWS_AND_LIGHTNING: 5,
    POSE_AND_EXPRESSION: 6,
    HEAD_OCCLUSION: 7,
    BACKGROUND: 8,
    UNKNOWN: 9,
}

export const ImageQualityResultStatus = {
    FALSE: 0,
    TRUE: 1,
    UNDETERMINED: 2,
}