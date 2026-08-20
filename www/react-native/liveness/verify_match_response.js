export class VerifyMatchResponse {
    passed
    similarity

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new VerifyMatchResponse()

        result.passed = jsonObject["passed"]
        result.similarity = jsonObject["similarity"]

        return result
    }

    toJson() {
        return {
            "passed": this.passed,
            "similarity": this.similarity,
        }
    }
}
