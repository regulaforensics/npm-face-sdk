import { OutputImageParams } from '../image_params/output_image_params'
import { ImageUpload } from './image_upload'

export class SearchPersonRequest {
    imageUpload
    groupIdsForSearch
    threshold
    limit
    tag
    detectAll
    outputImageParams

    constructor(image, options) {
        this.imageUpload = image
        this.groupIdsForSearch = options?.groupIdsForSearch
        this.threshold = options?.threshold
        this.limit = options?.limit
        this.tag = options?.tag
        this.detectAll = options?.detectAll ?? false
        this.outputImageParams = options?.outputImageParams
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new SearchPersonRequest(ImageUpload.fromJson(jsonObject["imageUpload"]), {
            groupIdsForSearch: jsonObject["groupIdsForSearch"],
            threshold: jsonObject["threshold"],
            limit: jsonObject["limit"],
            tag: jsonObject["tag"],
            detectAll: jsonObject["detectAll"],
            outputImageParams: OutputImageParams.fromJson(jsonObject["outputImageParams"]),
        })
    }

    toJson() {
        return {
            "imageUpload": this.imageUpload?.toJson(),
            "groupIdsForSearch": this.groupIdsForSearch,
            "threshold": this.threshold,
            "limit": this.limit,
            "tag": this.tag,
            "detectAll": this.detectAll,
            "outputImageParams": this.outputImageParams?.toJson(),
        }
    }
}
