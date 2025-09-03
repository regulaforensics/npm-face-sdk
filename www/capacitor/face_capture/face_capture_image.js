export class FaceCaptureImage {
    imageType
    image
    tag

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureImage()

        result.imageType = jsonObject["imageType"]
        result.image = jsonObject["image"]
        result.tag = jsonObject["tag"]

        return result
    }

    toJson() {
        return {
            "imageType": this.imageType,
            "image": this.image,
            "tag": this.tag,
        }
    }
}

export const ImageType = {
    PRINTED: 1,
    RFID: 2,
    LIVE: 3,
    DOCUMENT_WITH_LIVE: 4,
    EXTERNAL: 5,
    GHOST_PORTRAIT: 6,
    BARCODE: 7,
}