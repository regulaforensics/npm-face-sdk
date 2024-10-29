import { Size } from './size'

/**
 * Crop settings for {@link OutputImageParams}.
 */
export class OutputImageCrop {
    /**
     * The aspect ratio according to which alignment is performed.
     */
    get type(): OutputImageCropAspectRatio
    /**
     * The resize value to process.
     * If the value doesn't match AspectRatio `type` proportion or minimum size, an adjustment is applied.
     * Use {@link OutputImageCropAspectRatio} to check you size matches AspectRatio `type` proportions and minimum size.
     */
    get size(): Size | null
    /**
     * When an image is aligned by `type`, its original size may be insufficient, and in this case it needs to be supplemented, "padded".
     * padColor sets the value for the color that will be used for such a supplement.
     */
    get padColor(): number | null

    /**
     * If set, the coordinates of the rectangle with the face in the original image prepared for the face crop
     * are returned in the {@link DetectFaceResult.originalRect} field.
     * Default is `false`.
     */
    get returnOriginalRect(): boolean

    constructor(
        type: OutputImageCropAspectRatio,
        params?: {
            size?: Size,
            padColor?: number,
            returnOriginalRect?: boolean,
        }
    )
}

/**
 * The AspectRatio according to which alignment is performed
 */
export enum OutputImageCropAspectRatio {
    RATIO_3X4,
    RATIO_4X5,
    RATIO_2X3,
    RATIO_1X1,
    RATIO_7X9
}