import { ImageUpload } from './image_upload'
import { OutputImageParams } from '../image_params/output_image_params'

/**
 * Request object that configures Search settings.
 */
export class SearchPersonRequest {
    /**
     * Create {@link SearchPersonRequest} object.
     * 
     * @param image - Image Upload object to apply search with.
     * 
     * @param params.groupIdsForSearch - The Group IDs of the groups in which the search is performed.
     * 
     * @param params.threshold - The similarity distance threshold, should be between 0.0 and 2.0, 
     * where 0.0 is for returning results for only the most similar persons and 2.0 
     * is for all the persons, even the dissimilar ones.
     * Default: 1.
     * 
     * @param params.limit - The number of returned Persons limit. 
     * Default: 100.
     * 
     * @param params.detectAll - Whether to process only the one face on the image or all the faces. 
     * Default: `false`.
     * 
     * @param params.outputImageParams - If set the uploaded image is processed according to the indicated settings.
     */

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
