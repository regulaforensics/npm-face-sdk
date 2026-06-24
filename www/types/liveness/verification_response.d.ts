import { VerifyMatchResponse } from './verify_match_response'
import { ErrorResponse } from './error_response'

export class VerificationResponse {
    readonly passed?: boolean
    readonly match?: VerifyMatchResponse
    readonly error?: ErrorResponse

    private constructor()
}
