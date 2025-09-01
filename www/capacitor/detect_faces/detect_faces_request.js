import { DetectFacesScenario } from './detect_faces_scenario'
import { DetectFacesConfig } from './detect_faces_config'

export class DetectFacesRequest {
    image
    configuration
    tag

    constructor(image, configuration, params) {
        this.image = image
        this.configuration = configuration
        this.tag = params?.tag
    }

    static qualityFull(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_FULL
        return result
    }

    static qualityICAO(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_ICAO
        return result
    }

    static qualityVisaSchengen(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_VISA_SCHENGEN
        return result
    }

    static qualityVisaUSA(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_VISA_USA
        return result
    }

    static cropCentralFace(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.CROP_CENTRAL_FACE
        return result
    }

    static cropAllFaces(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.CROP_ALL_FACES
        return result
    }

    static thumbnail(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.THUMBNAIL
        return result
    }

    static allAttributes(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.ATTRIBUTES_ALL
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesRequest()

        result.tag = jsonObject["tag"]
        result.scenario = jsonObject["scenario"]
        result.image = jsonObject["image"]
        result.configuration = DetectFacesConfig.fromJson(jsonObject["configuration"])

        return result
    }

    toJson() {
        return {
            "tag": this.tag,
            "scenario": this.scenario,
            "image": this.image,
            "configuration": this.configuration?.toJson(),
        }
    }
}