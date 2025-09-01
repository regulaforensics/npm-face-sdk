import { LivenessResponse } from './liveness_response'

export class LivenessNotification {
    status
    response

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessNotification()

        result.status = jsonObject["status"]
        result.response = LivenessResponse.fromJson(jsonObject["response"])

        return result
    }

    toJson() {
        return {
            "status": this.status,
            "response": this.response?.toJson(),
        }
    }
}

export const LivenessProcessStatus = {
    START: 0,
    PREPARING: 1,
    NEW_SESSION: 2,
    NEXT_STAGE: 3,
    SECTOR_CHANGED: 4,
    PROGRESS: 5,
    LOW_BRIGHTNESS: 6,
    FIT_FACE: 7,
    MOVE_AWAY: 8,
    MOVE_CLOSER: 9,
    TURN_HEAD: 10,
    PROCESSING: 11,
    FAILED: 12,
    RETRY: 13,
    SUCCESS: 14,
}