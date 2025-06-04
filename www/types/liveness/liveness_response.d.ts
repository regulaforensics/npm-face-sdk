
import { LivenessException } from './liveness_exception'

/**
 * The response from the Liveness module.
 */
export class LivenessResponse {
    /**
     * The input image used to determine the liveness.
     */
    get image(): string | null

    /**
     * The status of the Liveness processing.
     */
    get liveness(): LivenessStatus

    get tag(): string | null
    get transactionId(): string | null
    get estimatedAge(): number | null

    /**
     * The error describes a failed liveness check and contains {@link LivenessErrorCode} codes.
     */
    get error(): LivenessException | null

    private constructor()
}

/**
 * The status of the Liveness processing.
 */
export enum LivenessStatus {
    /**
     * The liveness check is passed successfully.
     */
    PASSED,
    /**
     * The liveness check result is unknown.
     */
    UNKNOWN,
}