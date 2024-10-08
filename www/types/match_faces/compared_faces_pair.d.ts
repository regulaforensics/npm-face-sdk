import { ComparedFace } from './compared_face'
import { MatchFacesException } from './match_faces_exception'

export class ComparedFacesPair {
    get first(): ComparedFace
    get second(): ComparedFace
    get similarity(): number
    get score(): number
    get error(): MatchFacesException | null

    private constructor()
}