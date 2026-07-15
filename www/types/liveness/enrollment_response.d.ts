import { ErrorResponse } from './error_response'

export class EnrollmentResponse {
    readonly personId?: string
    readonly externalId?: string
    readonly error?: ErrorResponse

    private constructor()
}
