import { FaceCaptureImage } from './face_capture_image'
import { FaceCaptureException } from './face_capture_exception'

export class FaceCaptureResponse {
    error
    image

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureResponse()

        result.error = FaceCaptureException.fromJson(jsonObject["error"])
        result.image = FaceCaptureImage.fromJson(jsonObject["image"])

        return result
    }
}