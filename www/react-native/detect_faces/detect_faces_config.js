export class DetectFacesConfig {
    attributes
    customQuality
    outputImageParams
    onlyCentralFace

    constructor(params) {
        this.onlyCentralFace = false
        this.attributes = params?.attributes
        this.customQuality = params?.customQuality
        this.outputImageParams = params?.outputImageParams
        this.onlyCentralFace = params?.onlyCentralFace ?? this.onlyCentralFace
    }
}