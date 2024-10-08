import { MatchFacesImage } from './match_faces_image'
import { MatchFacesDetectionFace } from './match_faces_detection_face'

export class ComparedFace {
    get imageIndex(): number
    get image(): MatchFacesImage
    get faceIndex(): number | null
    get face(): MatchFacesDetectionFace | null

    private constructor()
}