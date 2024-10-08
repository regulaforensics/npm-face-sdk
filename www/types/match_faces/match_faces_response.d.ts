import { ComparedFacesPair } from './compared_faces_pair'
import { MatchFacesDetection } from './match_faces_detection'
import { MatchFacesException } from './match_faces_exception'

export class MatchFacesResponse {
    get results(): Array<ComparedFacesPair>
    get detections(): Array<MatchFacesDetection>
    get tag(): string | null
    get error(): MatchFacesException | null

    private constructor()
}