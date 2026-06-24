export class EnrollmentRequest {
    externalId
    groupId
    trustedImage
    trustedImageUrl

    constructor(params) {
        this.externalId = params?.externalId
        this.groupId = params?.groupId
        this.trustedImage = params?.trustedImage
        this.trustedImageUrl = params?.trustedImageUrl
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new EnrollmentRequest()

        result.externalId = jsonObject["externalId"]
        result.groupId = jsonObject["groupId"]
        result.trustedImage = jsonObject["trustedImage"]
        result.trustedImageUrl = jsonObject["trustedImageUrl"]

        return result
    }

    toJson() {
        return {
            "externalId": this.externalId,
            "groupId": this.groupId,
            "trustedImage": this.trustedImage,
            "trustedImageUrl": this.trustedImageUrl,
        }
    }
}
