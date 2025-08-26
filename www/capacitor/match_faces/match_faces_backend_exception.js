export class MatchFacesBackendException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesBackendException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }

    toJson() {
        return {
            "code": this.code,
            "message": this.message,
        }
    }
}