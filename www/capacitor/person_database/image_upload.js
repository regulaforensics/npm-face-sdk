export class ImageUpload {
    imageData
    imageUrl

    static withImageData(imageData) {
        var result = new ImageUpload()
        result.imageData = imageData
        return result
    }

    static withImageUrl(imageUrl) {
        var result = new ImageUpload()
        result.imageUrl = imageUrl
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new ImageUpload()

        result.imageData = jsonObject["imageData"]
        result.imageUrl = jsonObject["imageUrl"]

        return result
    }

    toJson() {
        return {
            "imageData": this.imageData,
            "imageUrl": this.imageUrl,
        }
    }
}
