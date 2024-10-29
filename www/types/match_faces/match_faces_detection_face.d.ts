import { Point } from '../image_params/point'
import { Rect } from '../image_params/rect'

/**
 * Represents face detection information as a part of {@link MatchFacesResponse}.
 */
export class MatchFacesDetectionFace {
    /**
     * The index of the face detection object in the array of detections.
     */
    get faceIndex(): number

    /**
     * Main coordinates of the detected face (eyes, nose, lips, ears and etc.).
     */
    get landmarks(): Array<Point>

    /**
     * Rectangular area of the detected face in the original image.
     */
    get faceRect(): Rect

    /**
     * Rotation is measured counterclockwise in degrees, with zero indicating
     * that a line drawn between the eyes is horizontal relative to the image orientation.
     */
    get rotationAngle(): number | null

    /**
     * Coordinates of the rectangle with the face on the original image prepared for the face crop.
     * Requires {@link OutputImageCrop.returnOriginalRect} is set.
     * Returns `null` if {@link OutputImageCrop.returnOriginalRect} isn't set.
     */
    get originalRect(): Rect | null

    /**
     * String image of the aligned and cropped portrait.
     * Returned if {@link MatchFacesRequest.outputImageParams} is set or predefined scenario is used.
     */
    get crop(): string | null

    private constructor()
}