import { MatchFacesImage } from './match_faces_image'
import { MatchFacesDetectionFace } from './match_faces_detection_face'
import { MatchFacesException } from './match_faces_exception'

export class MatchFacesDetection {
    get imageIndex(): number
    get image(): MatchFacesImage
    get faces(): Array<MatchFacesDetectionFace>
    get error(): MatchFacesException | null

    private constructor()
}