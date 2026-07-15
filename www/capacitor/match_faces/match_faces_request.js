import { OutputImageParams } from '../image_params/output_image_params'
import { MatchFacesImage } from './match_faces_image'

export class MatchFacesRequest {
    images
    outputImageParams
    tag
    metadata

    constructor(images, options) {
        this.images = images
        this.outputImageParams = options?.outputImageParams
        this.tag = options?.tag
        this.metadata = options?.metadata
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null

        const images = []
        for (const item of jsonObject["images"]) {
            images.push(MatchFacesImage.fromJson(item))
        }

        return new MatchFacesRequest(images, {
            outputImageParams: OutputImageParams.fromJson(jsonObject["outputImageParams"]),
            tag: jsonObject["tag"],
            metadata: jsonObject["metadata"],
        })
    }

    toJson() {
        return {
            "images": this.images?.map(e => e.toJson()),
            "outputImageParams": this.outputImageParams?.toJson(),
            "tag": this.tag,
            "metadata": this.metadata,
        }
    }
}