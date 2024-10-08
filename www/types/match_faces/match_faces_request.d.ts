import { MatchFacesImage } from './match_faces_image'
import { OutputImageParams } from '../image_params/output_image_params'

export class MatchFacesRequest {
    get images(): Array<MatchFacesImage>
    get outputImageParams(): OutputImageParams | null
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