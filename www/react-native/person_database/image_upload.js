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
}
