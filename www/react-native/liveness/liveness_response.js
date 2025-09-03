
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

    toJson() {
        return {
            "image": this.image,
            "liveness": this.liveness,
            "tag": this.tag,
            "transactionId": this.transactionId,
            "estimatedAge": this.estimatedAge,
            "error": this.error?.toJson(),
        }
    }
}

export const LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
}