import { ImageType } from '../face_capture/face_capture_image'

/**
 * This class represents the input image and its attributes for {@link MatchFacesRequest}.
 */
export class MatchFacesImage {
    /**
     * The underlying image.
     */
    get image(): string

    /**
     * The image type.
     * The imageType influences matching results, therefore this field is required.
     */
    get imageType(): ImageType

    /**
     * Defines whether the comparison and detection should apply for all faces found on the image. Defaults to `false`.
     * When set to `false`, only the most centered faces are compared and detected.
     * Otherwise, all the faces are compared and detected.
     */
    get detectAll(): boolean
    
    get identifier(): string

    constructor(
        image: string,
        imageType: ImageType,
        params?: {
            detectAll?: boolean
        }
    )
}