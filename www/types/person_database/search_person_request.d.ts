import { ImageUpload } from './image_upload'
import { OutputImageParams } from '../image_params/output_image_params'

export class SearchPersonRequest {
    constructor(
        image: ImageUpload,
        params?: {
            groupIdsForSearch?: string[],
            threshold?: number,
            limit?: number,
            detectAll?: boolean,
            outputImageParams?: OutputImageParams
        }
    )
}
