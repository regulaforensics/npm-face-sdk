import { DetectFacesConfig } from './detect_faces_config'

/**
 * Detect Faces Request.
 * Could be created by predefined scenarios (e.g: {@link DetectFacesRequest.qualityICAO}, {@link DetectFacesRequest.cropAllFaces} etc. )
 * or by using custom {@link DetectFacesConfig}.
 */
export class DetectFacesRequest {

    /**
     * Create {@link DetectFacesRequest} object.
     * 
     * @param image - Image base64.
     * @param config - Custom Request configuration to specify  image, quality, attributes parameters.
     * @param params.tag - Defines tag that can be used in detect faces processing. Defaults to `null`.
     */
    constructor(
        image: string,
        config: DetectFacesConfig,
        params?: {
            tag?: string,
        }
    )

    /**
     * Creates a request to check all the available quality characteristics.
     * 
     * @param image - Image base64.
     */
    static qualityFull(image: string): DetectFacesRequest

    /**
     * Creates a request to check the quality characteristics based on the ICAO standard.
     * 
     * @param image - Image base64.
     */
    static qualityICAO(image: string): DetectFacesRequest

    /**
     * Creates a request to check the quality characteristics based on the Schengen visa standard.
     * 
     * @param image - Image base64.
     */
    static qualityVisaSchengen(image: string): DetectFacesRequest

    /**
     * Creates a request to check the quality characteristics based on the USA visa standard.
     * 
     * @param image - Image base64.
     */
    static qualityVisaUSA(image: string): DetectFacesRequest

    /**
     * Creates a request for a cropped portrait of the person whose face is the most central.
     * 
     * @param image - Image base64.
     */
    static cropCentralFace(image: string): DetectFacesRequest

    /**
     * Creates a request for cropped portraits of all the people in the image.
     * 
     * @param image - Image base64.
     */
    static cropAllFaces(image: string): DetectFacesRequest

    /**
     * Creates a request for a cropped portrait of the person whose face is the most central in the image in the original size.
     * 
     * @param image - Image base64.
     */
    static thumbnail(image: string): DetectFacesRequest

    /**
     * Creates a request for all available attribute results.
     * 
     * @param image - Image base64.
     */
    static allAttributes(image: string): DetectFacesRequest
}