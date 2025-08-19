export class SearchPersonRequest {
    imageUpload
    groupIdsForSearch
    threshold
    limit
    tag
    detectAll
    outputImageParams

    constructor(image, params) {
        this.imageUpload = image
        this.groupIdsForSearch = params?.groupIdsForSearch
        this.threshold = params?.threshold
        this.limit = params?.limit
        this.tag = params?.tag
        this.detectAll = params?.detectAll ?? false
        this.outputImageParams = params?.outputImageParams
    }
}
