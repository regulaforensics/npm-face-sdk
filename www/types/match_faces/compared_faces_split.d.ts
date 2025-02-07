import { ComparedFacesPair } from './compared_faces_pair'

export class ComparedFacesSplit {
    get matchedFaces(): Array<ComparedFacesPair>
    get unmatchedFaces(): Array<ComparedFacesPair>

    private constructor()
}