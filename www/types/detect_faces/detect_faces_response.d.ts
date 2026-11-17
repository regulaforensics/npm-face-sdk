import { DetectFaceResult } from './detect_face_result'
import { DetectFacesException } from './detect_faces_exception'
import { DetectFacesScenario } from './detect_faces_scenario'

export class DetectFacesResponse {
    get detection(): DetectFaceResult | null
    get allDetections(): Array<DetectFaceResult> | null
    get scenario(): DetectFacesScenario | null
    get error(): DetectFacesException | null

    private constructor()
}