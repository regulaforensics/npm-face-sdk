import { LivenessResponse } from './liveness_response'

export class LivenessNotification {
    get status(): LivenessProcessStatus
    get response(): LivenessResponse | null

    private constructor()
}

/**
 * Liveness process statuses.
 */
export enum LivenessProcessStatus {
    START,
    PREPARING,
    NEW_SESSION,
    NEXT_STAGE,
    SECTOR_CHANGED,
    PROGRESS,
    LOW_BRIGHTNESS,
    FIT_FACE,
    MOVE_AWAY,
    MOVE_CLOSER,
    TURN_HEAD,
    PROCESSING,
    FAILED,
    RETRY,
    SUCCESS,
}

export type LivenessNotificationCompletion = (notification: LivenessNotification) => void