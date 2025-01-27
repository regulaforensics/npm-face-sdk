import { ImageQualityCharacteristic } from './image_quality_characteristic'
import { ImageQualityRange } from './image_quality_range'

export class ImageQualityGroup {
    image: _Image
    headSizeAndPosition: _HeadSizeAndPosition
    faceImage: _FaceImage
    eyes: _Eyes
    shadowsAndLightning: _ShadowsAndLightning
    poseAndExpression: _PoseAndExpression
    headOcclusion: _HeadOcclusion
    background: _Background
}

export class _Image {
    /**
     * The image width, pixels.
     * Doesn't have recommended value. 
     */
    imageWidth(range: ImageQualityRange): ImageQualityCharacteristic

    /**
     * The image height, pixels.
     * Doesn't have recommended value.
     */
    imageHeight(range: ImageQualityRange): ImageQualityCharacteristic

    /**
     * The image width to height proportion.
     * Doesn't have recommended value.
     */
    imageWidthToHeight(range: ImageQualityRange): ImageQualityCharacteristic

    /**
     * The image RGB channels number.
     * Doesn't have recommended value.
     * 
     * @param channelsNumber - 3 is for RGB images.
     */
    imageChannelsNumber(channelsNumber: number): ImageQualityCharacteristic

    /**
     * The percentage of the area of the image that was "padded" during alignment.
     * The characteristic is needed to determine if the head goes beyond the image.
     * The range is from 0 to 1 where 0 is 0% of the image is "padded".
     * Doesn't have recommended value. 
     */
    paddingRatio(range: ImageQualityRange): ImageQualityCharacteristic

    /**
     * Whether the face in the image is a photo, not a drawing, sculpture, cartoon, etc.
     * If the returned value is out of the recommended range, the image is not a photo.
     * The range is from 0 to 1 where 0 means the image is a photo.
     */
    artFace(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _HeadSizeAndPosition {
    /**
     * The position of the "middle point" (the middle of the line connecting the eye centers)
     * relative to the width of the image.
     * The range is from 0 to 1 where range [0.5, 0.5] is for "middle point" strictly in the center .
     */
    faceMidPointHorizontalPosition(): ImageQualityCharacteristic

    /**
     * The position of the "middle point" (the middle of the line connecting the eye centers)
     * relative to the height of the image.
     * The range is from 0 to 1 where range [0.5, 0.5] is for "middle point" strictly in the center .
     */
    faceMidPointVerticalPosition(): ImageQualityCharacteristic

    /**
     * The head width to the image width ratio.
     * The range is from 0 to 1.
     */
    headWidthRatio(): ImageQualityCharacteristic

    /**
     * The head height to the image height ratio.
     * The range is from 0 to 1.
     */
    headHeightRatio(): ImageQualityCharacteristic

    /**
     * Inter-eye distance — the length of the line connecting the eye centers of the left and right eye, pixels.
     */
    eyesDistance(): ImageQualityCharacteristic

    /**
     * The yaw of the head, degrees.
     * The range is from -90 to 90. Range value [0, 0] for strictly stright head position.
     */
    yaw(): ImageQualityCharacteristic

    /**
     * The pitch of the head, degrees.
     * The range is from -90 to 90. Range value [0, 0] for strictly stright head position.
     */
    pitch(): ImageQualityCharacteristic

    /**
     * The roll of the head, degrees.
     * The range is from -90 to 90. Range value [0, 0] for strictly stright head position.
     */
    roll(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _FaceImage {
    /**
     * The blur level.
     * The range is from 0 to 1 where 0 is the absence of blur effect
     */
    blurLevel(): ImageQualityCharacteristic

    /**
     * The noise level.
     * The range is from 0 to 1 where 0 is minimal noise level.
     */
    noiseLevel(): ImageQualityCharacteristic

    /**
     * The true-colour representation of the skin colour.
     * The range is from 0 to 1.
     */
    unnaturalSkinTone(): ImageQualityCharacteristic

    /**
     * The range of tonal difference between the lightest light and darkest dark of an image, bits.
     */
    faceDynamicRange(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _Eyes {
    /**
     * Whether the right eye is closed.
     * The range is from 0 to 1 where 1 is the eye is fully closed.
     */
    eyeRightClosed(): ImageQualityCharacteristic

    /**
     * Whether the left eye is closed.
     * The range is from 0 to 1 where 1 is the eye is fully closed.
     */
    eyeLeftClosed(): ImageQualityCharacteristic

    /**
     * Whether the right eye is occluded.
     * The range is from 0 to 1 where 1 is the eye is fully occluded.
     */
    eyeRightOccluded(): ImageQualityCharacteristic

    /**
     *  Whether the left eye is occluded.
     * The range is from 0 to 1 where 1 is the eye is fully occluded.
     */
    eyeLeftOccluded(): ImageQualityCharacteristic

    /**
     * Whether there is the red-eye effect.
     * The range is from 0 to 1 where 0 is the absence of  red-eye effect.
     */
    eyesRed(): ImageQualityCharacteristic

    /**
     * Whether the right eye is covered with hair.
     * The range is from 0 to 1 where 1 is 100% of the eye is covered by hair.
     */
    eyeRightCoveredWithHair(): ImageQualityCharacteristic

    /**
     * Whether the left eye is covered with hair.
     * The range is from 0 to 1 where 1 is 100% of the eye is covered by hair.
     */
    eyeLeftCoveredWithHair(): ImageQualityCharacteristic

    /**
     * Whether the person is not looking directly at the camera.
     * The range is from 0 to 1 where 0 is for absolutely direct look.
     */
    offGaze(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _ShadowsAndLightning {
    /**
     * Whether the photo is too dark.
     * The range is from 0 to 1.
     */
    tooDark(): ImageQualityCharacteristic

    /**
     * Whether the photo is overexposed.
     * The range is from 0 to 1.
     */
    tooLight(): ImageQualityCharacteristic

    /**
     * Whether there is glare on the face.
     * The range is from 0 to 1 where 0 is the absence of glare.
     */
    faceGlare(): ImageQualityCharacteristic

    /**
     * Whether there are shadows on the face.
     * The range is from 0 to 1 where 0 is the absence of shadows on the face.
     */
    shadowsOnFace(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _PoseAndExpression {
    /**
     * Checks the symmetry of the shoulders.
     * The range is from 0 to 1 where 1 is for absolutely symmetrical shoulders.
     */
    shouldersPose(): ImageQualityCharacteristic

    /**
     * Checks the presence of any emotional facial expression.
     * The range is from 0 to 1 where 0 is for absolutely non-emotional expression.
     */
    expressionLevel(): ImageQualityCharacteristic

    /**
     * Whether the mouth is open.
     * The range is from 0 to 1 where 0 is closed mouth.
     */
    mouthOpen(): ImageQualityCharacteristic

    /**
     * Whether the person smiles.
     * The range is from 0 to 1 where 0 is smile absence.
     */
    smile(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _HeadOcclusion {
    /**
     * Whether the person wears dark glasses.
     * The range is from 0 to 1 where 0 is dark glasses absence.
     */
    darkGlasses(): ImageQualityCharacteristic

    /**
     * Whether there are reflections on glasses.
     * The range is from 0 to 1 where 0 is reflections absence.
     * In the current release, always succeeds. Will be developed in the coming releases.
     */
    reflectionOnGlasses(): ImageQualityCharacteristic

    /**
     * Whether the glasses frames do not obscure eye details and the irises of both eyes are visible.
     * The range is from 0 to 20 where 0 the absence of frames (glasses).
     */
    framesTooHeavy(): ImageQualityCharacteristic

    /**
     * Whether the face is visible and not occluded.
     * The range is from 0 to 1 where 0 is face occlusion absence.
     */
    faceOccluded(): ImageQualityCharacteristic

    /**
     * Whether there is any head coverage other than religious headwear.
     * The range is from 0 to 1.
     */
    headCovering(): ImageQualityCharacteristic

    /**
     * Whether the forehead is covered.
     * The range is from 0 to 1.
     */
    foreheadCovering(): ImageQualityCharacteristic

    /**
     * Whether the makeup is too strong.
     * In the current release, always succeeds. Will be developed in the coming releases.
     * The range is from 0 to 1.
     */
    strongMakeup(): ImageQualityCharacteristic

    /**
     * Whether the person is wearing headphones.
     * The range is from 0 to 1 where 0 is headphones absence.
     */
    headphones(): ImageQualityCharacteristic

    /**
     * Whether the person is wearing a medical mask.
     * The range is from 0 to 1 where 0 is medical mask absence.
     */
    medicalMask(): ImageQualityCharacteristic

    /**
     * All Group characteristics with default (recommended) values.
     * Doesn't include characteristics without default values.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _Background {
    /**
     * Checks uniformity of the portrait background.
     * The range is from 0 to 1 where 1 is absolute background uniformity.
     */
    backgroundUniformity(): ImageQualityCharacteristic

    /**
     * Whether there are shadows on the portrait background.
     * The range is from 0 to 1 where 1 is the absence of shadows on the portrait background.
     */
    shadowsOnBackground(): ImageQualityCharacteristic

    /** 
     * The number of faces on the photo.
     * The range is from 0 to 1 where 1 is full background color match.
     */
    otherFaces(): ImageQualityCharacteristic

    /**
     * Whether the background color matches default background color.
     * Default color is white (RGB(255,255,255) or hex #FFFFFF)
     * The range is from 0 to 1 where 1 is full background color match.
     */
    backgroundColorMatch(params?: { color?: number }): ImageQualityCharacteristic

    /**
     * Whether the background color matches the required color.
     * The range is from 0 to 1 where 1 is full background color match.
     */
    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}