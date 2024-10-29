import { MatchFacesImage } from './match_faces_image'
import { MatchFacesDetectionFace } from './match_faces_detection_face'

/**
 * Represents a reference information of the compared face.
 */
export class ComparedFace {
    /**
     * The index to the input image in the input array provided to the request.
     */
    get imageIndex(): number

    /**
     * The input image used for comparison operation.
     */
    get image(): MatchFacesImage

    /**
     * The index to the array of `faces` in the `detection` results.
     */
    get faceIndex(): number | null

    /**
     * The face detection result.
     */
    get face(): MatchFacesDetectionFace | null

    private constructor()
}