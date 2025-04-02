import { MatchFacesImage } from './match_faces_image'
import { OutputImageParams } from '../image_params/output_image_params'

/**
 * Compares two or more images with faces on them to find out the similarity of pairs.
 * The request is used as a parameter to {@link FaceSDK.matchFaces}.
 */
export class MatchFacesRequest {
    /**
     * Images with faces to match.
     */
    get images(): Array<MatchFacesImage>

    /**
     * If set the uploaded image is processed according to the indicated settings.
     */
    get outputImageParams(): OutputImageParams | null

    /**
     * Defines tag that can be used in match faces processing. Defaults to `null`.
     */
    get tag(): string | null

    get metadata(): Record<string, any> | null

    constructor(
        images: Array<MatchFacesImage>,
        params?: {
            outputImageParams?: OutputImageParams
            tag?: string
            metadata?: Record<string, any>
        }
    )
}