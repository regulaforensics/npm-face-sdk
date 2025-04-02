import { ComparedFace } from './compared_face'
import { MatchFacesException } from './match_faces_exception'

/**
 * Represents a result of the {@link ComparedFace} attempt to compare input images.
 */
export class ComparedFacesPair {
    /**
     * The first face in the comparison pair.
     */
    get first(): ComparedFace

    /**
     * The second face in the comparison pair.
     */
    get second(): ComparedFace

    /**
     * Similarity of the faces pair. Floating point value from 0 to 1.
     */
    get similarity(): number

    /**
     * The raw value returned by the service without applying any thresholds or comparison rules.
     * The value shows the degree of similarity of compared faces, the lower - the more similar, and vice versa less similar.
     * The `score` is used in conjunction with the input image `imageType` to evaluate `similarity`.
     */
    get score(): number

    /**
     * The error describes a failed pair comparison and contains {@link MatchFacesErrorCode} codes.
     */
    get error(): MatchFacesException | null

    private constructor()
}