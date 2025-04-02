import { DetectFacesAttributeResult } from './detect_faces_attribute_result'
import { ImageQualityResult } from '../image_quality/image_quality_result'
import { Rect } from '../image_params/rect'
import { Point } from '../image_params/point'

export class DetectFaceResult {
    get quality(): Array<ImageQualityResult> | null
    get attributes(): Array<DetectFacesAttributeResult> | null
    get crop(): string | null
    get faceRect(): Rect | null
    get originalRect(): Rect | null
    get landmarks(): Array<Point> | null
    get isQualityCompliant(): boolean

    private constructor()
}