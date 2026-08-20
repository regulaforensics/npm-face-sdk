export class EnrollmentRequest {
    externalId
    groupId
    trustedImage
    trustedImageUrl

    static withImage(externalId, trustedImage, options) {
        this.externalId = externalId
        this.trustedImage = trustedImage
        this.groupId = options?.groupId
    }

    static withImageUrl(externalId, trustedImageUrl, options) {
        this.externalId = externalId
        this.trustedImageUrl = trustedImageUrl
        this.groupId = options?.groupId
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
