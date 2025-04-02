import { Point } from '../image_params/point'
import { Rect } from '../image_params/rect'

export class SearchPersonDetection {
    get landmarks(): Point[]
    get rect(): Rect
    get crop(): string | null
    get rotationAngle(): number | null

    private constructor()
}
