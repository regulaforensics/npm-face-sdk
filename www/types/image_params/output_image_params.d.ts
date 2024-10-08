import { OutputImageCrop } from './output_image_crop'

export class OutputImageParams {
    get crop(): OutputImageCrop | null
    get backgroundColor(): number | null

    constructor(
        params?: {
            crop?: OutputImageCrop,
            backgroundColor?: number,
        }
    )
}