import { DetectFaceResult } from './detect_face_result'
import { DetectFacesException } from './detect_faces_exception'

export class DetectFacesResponse {
    detection
    scenario
    error
    allDetections

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesResponse()

        result.detection = DetectFaceResult.fromJson(jsonObject["detection"])
        result.scenario = jsonObject["scenario"]
        result.error = DetectFacesException.fromJson(jsonObject["error"])
        result.allDetections = []
        if (jsonObject["allDetections"] != null)
            for (const item of jsonObject["allDetections"])
                result.allDetections.push(DetectFaceResult.fromJson(item))

        return result
    }
}