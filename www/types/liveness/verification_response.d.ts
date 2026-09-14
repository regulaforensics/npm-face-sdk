import { VerificationMatchResponse } from './verification_match_response'
import { Person } from '../person_database/person'

export class VerificationResponse {
    readonly verified: boolean
    readonly person?: Person
    readonly match?: VerificationMatchResponse

    private constructor()
}
