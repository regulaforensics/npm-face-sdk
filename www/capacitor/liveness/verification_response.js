import { VerifyMatchResponse } from './verify_match_response'
import { ErrorResponse } from './error_response'

export class VerificationResponse {
    passed
    match
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new VerificationResponse()

        result.passed = jsonObject["passed"]
        result.match = VerifyMatchResponse.fromJson(jsonObject["match"])
        result.error = ErrorResponse.fromJson(jsonObject["error"])

        return result
    }

    toJson() {
        return {
            "passed": this.passed,
            "match": this.match?.toJson(),
            "error": this.error?.toJson(),
        }
    }
}
