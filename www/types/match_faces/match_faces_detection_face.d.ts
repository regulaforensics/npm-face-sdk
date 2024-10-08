import { Point } from '../image_params/point'
import { Rect } from '../image_params/rect'

export class MatchFacesDetectionFace {
    get faceIndex(): number
    get landmarks(): Array<Point>
    get faceRect(): Rect
    get rotationAngle(): number | null
    get originalRect(): Rect | null
    get crop(): string | null

    private constructor()
}