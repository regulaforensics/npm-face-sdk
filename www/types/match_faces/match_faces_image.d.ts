import { ImageType } from '../face_capture/face_capture_image'

export class MatchFacesImage {
    get image(): string
    get imageType(): ImageType
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