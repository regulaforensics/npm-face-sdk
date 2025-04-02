import { FaceCaptureImage } from './face_capture_image'
import { FaceCaptureException } from './face_capture_exception'

export class FaceCaptureResponse {
    get image(): FaceCaptureImage | null
    get error(): FaceCaptureException | null

    private constructor()
}