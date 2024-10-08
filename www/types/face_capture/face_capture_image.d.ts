export class FaceCaptureImage {
    get image(): string
    get imageType(): ImageType
    get tag(): string | null
}

export enum ImageType {
    PRINTED,
    RFID,
    LIVE,
    DOCUMENT_WITH_LIVE,
    EXTERNAL,
    GHOST_PORTRAIT,
    BARCODE
}