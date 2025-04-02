import { DetectFacesAttribute } from './detect_faces_attribute'
import { ImageQualityCharacteristic } from '../image_quality/image_quality_characteristic'
import { OutputImageParams } from '../image_params/output_image_params'

/** 
 * Custom configuration 
 */
export class DetectFacesConfig {
    /**
     * Current array for the face image detection attributes.
     */
    attributes?: Array<DetectFacesAttribute>
    /**
     * Current array for the face image quality assessment rules.
     */
    customQuality?: Array<ImageQualityCharacteristic>
    /**
     * If set the uploaded image is processed according to the indicated settings.
     */
    outputImageParams?: OutputImageParams
    /**
     * Whether to process only the central face on the image or all the faces.
     * If set to `true`, the SDK detects and processes only one—the most central face in the image.
     * If set to `false`, the SDK processes all faces in the image.
     * Default is `false`.
     */
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