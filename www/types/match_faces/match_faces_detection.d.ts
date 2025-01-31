import { MatchFacesImage } from './match_faces_image'
import { MatchFacesDetectionFace } from './match_faces_detection_face'
import { MatchFacesException } from './match_faces_exception'

/**
 * Represents detection results on an input image as a part of {@link MatchFacesResponse}.
 */
export class MatchFacesDetection {
    /**
     * The index to the input image in the input array provided to the request.
     */
    get imageIndex(): number

    /**
     * The input image used for comparison operation.
     */
    get image(): MatchFacesImage

    /**
     * The array of faces detected on the image.
     */
    get faces(): Array<MatchFacesDetectionFace>

    /**
     * The error describes a failed face detection and contains {@link MatchFacesErrorCode} codes.
     */
    get error(): MatchFacesException | null

    private constructor()
}