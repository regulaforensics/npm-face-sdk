import { VerificationMatchResponse } from './verification_match_response'
import { Person } from '../person_database/person'

export class VerificationResponse {
    verified
    person
    match

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new VerificationResponse()

        result.verified = jsonObject["verified"]
        result.person = Person.fromJson(jsonObject["person"])
        result.match = VerificationMatchResponse.fromJson(jsonObject["match"])

        return result
    }

    toJson() {
        return {
            "verified": this.verified,
            "person": this.person?.toJson(),
            "match": this.match?.toJson(),
        }
    }
}
