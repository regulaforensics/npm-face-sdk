import { ImageQualityCharacteristic } from './image_quality_characteristic'
import { ImageQualityRange } from './image_quality_range'

export class ImageQualityGroup {
    static get image(): _Image
    static get headSizeAndPosition(): _HeadSizeAndPosition
    static get faceImage(): _FaceImage
    static get eyes(): _Eyes
    static get shadowsAndLightning(): _ShadowsAndLightning
    static get poseAndExpression(): _PoseAndExpression
    static get headOcclusion(): _HeadOcclusion
    static get background(): _Background
}

export class _Image {
    imageWidth(range: ImageQualityRange): ImageQualityCharacteristic

    imageHeight(range: ImageQualityRange): ImageQualityCharacteristic

    imageWidthToHeight(range: ImageQualityRange): ImageQualityCharacteristic

    imageChannelsNumber(channelsNumber: number): ImageQualityCharacteristic

    paddingRatio(range: ImageQualityRange): ImageQualityCharacteristic

    artFace(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _HeadSizeAndPosition {
    faceMidPointHorizontalPosition(): ImageQualityCharacteristic

    faceMidPointVerticalPosition(): ImageQualityCharacteristic

    headWidthRatio(): ImageQualityCharacteristic

    headHeightRatio(): ImageQualityCharacteristic

    eyesDistance(): ImageQualityCharacteristic

    yaw(): ImageQualityCharacteristic

    pitch(): ImageQualityCharacteristic

    roll(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _FaceImage {
    blurLevel(): ImageQualityCharacteristic

    noiseLevel(): ImageQualityCharacteristic

    unnaturalSkinTone(): ImageQualityCharacteristic

    faceDynamicRange(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _Eyes {
    eyeRightClosed(): ImageQualityCharacteristic

    eyeLeftClosed(): ImageQualityCharacteristic

    eyeRightOccluded(): ImageQualityCharacteristic

    eyeLeftOccluded(): ImageQualityCharacteristic

    eyesRed(): ImageQualityCharacteristic

    eyeRightCoveredWithHair(): ImageQualityCharacteristic

    eyeLeftCoveredWithHair(): ImageQualityCharacteristic

    offGaze(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _ShadowsAndLightning {
    tooDark(): ImageQualityCharacteristic

    tooLight(): ImageQualityCharacteristic

    faceGlare(): ImageQualityCharacteristic

    shadowsOnFace(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _PoseAndExpression {
    shouldersPose(): ImageQualityCharacteristic

    expressionLevel(): ImageQualityCharacteristic

    mouthOpen(): ImageQualityCharacteristic

    smile(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _HeadOcclusion {
    darkGlasses(): ImageQualityCharacteristic

    reflectionOnGlasses(): ImageQualityCharacteristic

    framesTooHeavy(): ImageQualityCharacteristic

    faceOccluded(): ImageQualityCharacteristic

    headCovering(): ImageQualityCharacteristic

    foreheadCovering(): ImageQualityCharacteristic

    strongMakeup(): ImageQualityCharacteristic

    headphones(): ImageQualityCharacteristic

    medicalMask(): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}

export class _Background {
    backgroundUniformity(): ImageQualityCharacteristic

    shadowsOnBackground(): ImageQualityCharacteristic

    otherFaces(): ImageQualityCharacteristic

    backgroundColorMatch(params?: { color?: number }): ImageQualityCharacteristic

    allRecommended(): Array<ImageQualityCharacteristic>

    private constructor()
}