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

    constructor(image, params) {
        this.imageUpload = image
        this.groupIdsForSearch = params?.groupIdsForSearch
        this.threshold = params?.threshold
        this.limit = params?.limit
        this.tag = params?.tag
        this.detectAll = params?.detectAll ?? false
        this.outputImageParams = params?.outputImageParams
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
