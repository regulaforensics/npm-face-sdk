import { OutputImageCrop } from './output_image_crop'

/**
 * Set of parameter for image processing.
 */
export class OutputImageParams {
    /**
     * If set, aligned and cropped portrait is returned in the crop field.
     * Alignment is performed according to type.
     * If a head on the original image is tilted, for the returned portrait it is aligned in a straight vertical line.
     * 
     * If there are more than one face in the photo, all the faces will be detected and processed, and separate portraits for each face will be returned.
     * So, if there were five people in the photo, you'll get five processed portraits.
     */
    get crop(): OutputImageCrop | null
    /**
     * If set, the background color is replaced.
     * The silhouette of a person is cut out and the background is filled with this color.
     */
    get backgroundColor(): number | null

    constructor(
        params?: {
            crop?: OutputImageCrop,
            backgroundColor?: number,
        }
    )
}