export class MatchFacesRequest {
    images
    outputImageParams
    tag
    metadata

    constructor(images, params) {
        this.images = images
        this.outputImageParams = params?.outputImageParams
        this.tag = params?.tag
        this.metadata = params?.metadata
    }
}