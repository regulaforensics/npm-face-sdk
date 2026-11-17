import { ComparedFacesPair } from './compared_faces_pair'
import { MatchFacesDetection } from './match_faces_detection'
import { MatchFacesException } from './match_faces_exception'

/**
 * The response from the {@link MatchFacesRequest}.
 */
export class MatchFacesResponse {
    /**
     * Face comparison results with score and similarity values.
     */
    get results(): Array<ComparedFacesPair>

    /**
     * Face detection results for each given image.
     */
    get detections(): Array<MatchFacesDetection>

    get tag(): string | null

    /**
     * The error describes a failed match faces request and contains {@link MatchFacesErrorCode} codes.
     */
    get error(): MatchFacesException | null

    private constructor()
}