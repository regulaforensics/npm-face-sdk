export class VerificationMatchResponse {
    verified
    similarity

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new VerificationMatchResponse()

        result.verified = jsonObject["verified"]
        result.similarity = jsonObject["similarity"]

        return result
    }

    toJson() {
        return {
            "verified": this.verified,
            "similarity": this.similarity,
        }
    }
}
