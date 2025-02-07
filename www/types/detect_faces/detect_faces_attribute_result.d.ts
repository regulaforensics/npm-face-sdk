import { DetectFacesAttribute } from './detect_faces_attribute'
import { ImageQualityRange } from '../image_quality/image_quality_range'

export class DetectFacesAttributeResult {
    get attribute(): DetectFacesAttribute
    get confidence(): number | null
    get value(): string | null
    get range(): ImageQualityRange | null

    private constructor()
}