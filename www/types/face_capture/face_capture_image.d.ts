export class FaceCaptureImage {
    get image(): string
    get imageType(): ImageType
    get tag(): string | null
}

/**
 * The image type of {@link FaceCaptureImage} influences matching results and provides the information about the source of the image.
 */
export enum ImageType {
    /**
     * The image contains a printed portrait of a person.
     */
    PRINTED,
    /**
     * The image contains a portrait of a person and is taken from the RFID chip.
     */
    RFID,
    /**
     * The image is taken from the camera.
     */
    LIVE,
    /**
     * The image contains a document with a portrait of a person.
     */
    DOCUMENT_WITH_LIVE,
    /**
     * The image from an unknown source.
     */
    EXTERNAL,
    /**
     * The image is a ghost portrait.
     */
    GHOST_PORTRAIT,
    /**
     * The image from a barcode
     */
    BARCODE
}