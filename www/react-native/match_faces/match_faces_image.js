export class MatchFacesImage {
    image
    imageType
    detectAll
    identifier

    constructor(image, imageType, params) {
        this.image = image
        this.imageType = imageType
        this.detectAll = params?.detectAll ?? false
        this.identifier = ""
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesImage()

        result.image = jsonObject["image"]
        result.imageType = jsonObject["imageType"]
        result.detectAll = jsonObject["detectAll"]
        result.identifier = jsonObject["identifier"]

        return result
    }
}