
import { LivenessException } from './liveness_exception'

export class LivenessResponse {
    image
    liveness
    tag
    transactionId
    estimatedAge
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessResponse()

        result.image = jsonObject["image"]
        result.liveness = jsonObject["liveness"]
        result.tag = jsonObject["tag"]
        result.transactionId = jsonObject["transactionId"]
        result.estimatedAge = jsonObject["estimatedAge"]
        result.error = LivenessException.fromJson(jsonObject["error"])

        return result
    }
}

export const LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
}