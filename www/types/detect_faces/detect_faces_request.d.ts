import { DetectFacesConfig } from './detect_faces_config'

export class DetectFacesRequest {
    constructor(
        image: string,
        config: DetectFacesConfig,
        params?: {
            tag?: string,
        }
    )

    static qualityFull(image: string): DetectFacesRequest

    static qualityICAO(image: string): DetectFacesRequest

    static qualityVisaSchengen(image: string): DetectFacesRequest

    static qualityVisaUSA(image: string): DetectFacesRequest

    static cropCentralFace(image: string): DetectFacesRequest

    static cropAllFaces(image: string): DetectFacesRequest

    static thumbnail(image: string): DetectFacesRequest

    static allAttributes(image: string): DetectFacesRequest
}