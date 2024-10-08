import { DetectFacesAttribute } from './detect_faces_attribute'
import { ImageQualityCharacteristic } from '../image_quality/image_quality_characteristic'
import { OutputImageParams } from '../image_params/output_image_params'

export class DetectFacesConfig {
    attributes?: Array<DetectFacesAttribute>
    customQuality?: Array<ImageQualityCharacteristic>
    outputImageParams?: OutputImageParams
    onlyCentralFace: boolean

    constructor(
        params?: {
            attributes?: Array<DetectFacesAttribute>,
            customQuality?: Array<ImageQualityCharacteristic>,
            outputImageParams?: OutputImageParams,
            onlyCentralFace?: boolean
        }
    )
}