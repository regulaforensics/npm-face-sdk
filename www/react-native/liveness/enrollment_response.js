import { ErrorResponse } from './error_response'

export class EnrollmentResponse {
    personId
    externalId
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new EnrollmentResponse()

        result.personId = jsonObject["personId"]
        result.externalId = jsonObject["externalId"]
        result.error = ErrorResponse.fromJson(jsonObject["error"])

        return result
    }

    toJson() {
        return {
            "personId": this.personId,
            "externalId": this.externalId,
            "error": this.error?.toJson(),
        }
    }
}
