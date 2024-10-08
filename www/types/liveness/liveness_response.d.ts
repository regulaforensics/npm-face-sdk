
import { LivenessException } from './liveness_exception'

export class LivenessResponse {
    get image(): string | null
    get liveness(): LivenessStatus
    get tag(): string | null
    get transactionId(): string | null
    get estimatedAge(): number | null
    get error(): LivenessException | null

    private constructor()
}

export enum LivenessStatus {
    PASSED,
    UNKNOWN,
}