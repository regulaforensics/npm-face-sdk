import { ImageQualityCharacteristic } from './image_quality_characteristic'
import { ImageQualityRange } from './image_quality_range'

export class _Image {
    imageWidth(range) {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_WIDTH,
            { recommended: range }
        )
    }

    imageHeight(range) {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_HEIGHT,
            { recommended: range }
        )
    }

    imageWidthToHeight(range) {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_WIDTH_TO_HEIGHT,
            { recommended: range }
        )
    }

    imageChannelsNumber(channelsNumber) {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_CHANNELS_NUMBER,
            { recommended: ImageQualityRange.withValue(channelsNumber) }
        )
    }

    paddingRatio(range) {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.PADDING_RATIO,
            { recommended: range }
        )
    }

    artFace() {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.ART_FACE,
        )
    }

    allRecommended() {
        return [this.artFace()]
    }
}

export class _HeadSizeAndPosition {
    faceMidPointHorizontalPosition() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_MID_POINT_HORIZONTAL_POSITION)
    }

    faceMidPointVerticalPosition() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_MID_POINT_VERTICAL_POSITION)
    }

    headWidthRatio() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_WIDTH_RATIO)
    }

    headHeightRatio() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_HEIGHT_RATIO)
    }

    eyesDistance() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYES_DISTANCE)
    }

    yaw() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.YAW)
    }

    pitch() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.PITCH)
    }

    roll() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.ROLL)
    }

    allRecommended() {
        return [
            this.faceMidPointHorizontalPosition(),
            this.faceMidPointVerticalPosition(),
            this.headHeightRatio(),
            this.headWidthRatio(),
            this.eyesDistance(),
            this.yaw(),
            this.pitch(),
            this.roll(),
        ]
    }
}

export class _FaceImage {
    blurLevel() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.BLUR_LEVEL)
    }

    noiseLevel() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.NOISE_LEVEL)
    }

    unnaturalSkinTone() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.UNNATURAL_SKIN_TONE)
    }

    faceDynamicRange() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_DYNAMIC_RANGE)
    }

    allRecommended() {
        return [
            this.blurLevel(),
            this.noiseLevel(),
            this.unnaturalSkinTone(),
            this.faceDynamicRange(),
        ]
    }
}

export class _Eyes {
    eyeRightClosed() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_RIGHT_CLOSED)
    }

    eyeLeftClosed() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_LEFT_CLOSED)
    }

    eyeRightOccluded() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_RIGHT_OCCLUDED)
    }

    eyeLeftOccluded() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_LEFT_OCCLUDED)
    }

    eyesRed() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYES_RED)
    }

    eyeRightCoveredWithHair() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_RIGHT_COVERED_WITH_HAIR)
    }

    eyeLeftCoveredWithHair() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_LEFT_COVERED_WITH_HAIR)
    }

    offGaze() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.OFF_GAZE)
    }

    allRecommended() {
        return [
            this.eyeRightClosed(),
            this.eyeLeftClosed(),
            this.eyeRightOccluded(),
            this.eyeLeftOccluded(),
            this.eyesRed(),
            this.eyeRightCoveredWithHair(),
            this.eyeLeftCoveredWithHair(),
            this.offGaze(),
        ]
    }
}

export class _ShadowsAndLightning {
    tooDark() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.TOO_DARK)
    }

    tooLight() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.TOO_LIGHT)
    }

    faceGlare() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_GLARE)
    }

    shadowsOnFace() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SHADOWS_ON_FACE)
    }

    allRecommended() {
        return [
            this.tooDark(),
            this.tooLight(),
            this.faceGlare(),
            this.shadowsOnFace(),
        ]
    }
}

export class _PoseAndExpression {
    shouldersPose() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SHOULDERS_POSE)
    }

    expressionLevel() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EXPRESSION_LEVEL)
    }

    mouthOpen() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.MOUTH_OPEN)
    }

    smile() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SMILE)
    }

    allRecommended() {
        return [
            this.shouldersPose(),
            this.expressionLevel(),
            this.mouthOpen(),
            this.smile(),
        ]
    }
}

export class _HeadOcclusion {
    darkGlasses() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.DARK_GLASSES)
    }

    reflectionOnGlasses() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.REFLECTION_ON_GLASSES)
    }

    framesTooHeavy() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FRAMES_TOO_HEAVY)
    }

    faceOccluded() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_OCCLUDED)
    }

    headCovering() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_COVERING)
    }

    foreheadCovering() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FOREHEAD_COVERING)
    }

    strongMakeup() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.STRONG_MAKEUP)
    }

    headphones() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_PHONES)
    }

    medicalMask() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.MEDICAL_MASK)
    }

    allRecommended() {
        return [
            this.darkGlasses(),
            this.reflectionOnGlasses(),
            this.framesTooHeavy(),
            this.faceOccluded(),
            this.headCovering(),
            this.foreheadCovering(),
            this.strongMakeup(),
            this.headphones(),
            this.medicalMask(),
        ]
    }
}

export class _Background {
    backgroundUniformity() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.BACKGROUND_UNIFORMITY)
    }

    shadowsOnBackground() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SHADOWS_ON_BACKGROUND)
    }

    otherFaces() {
        return ImageQualityCharacteristic._create(ImageQualityCharacteristicName.OTHER_FACES)
    }

    backgroundColorMatch(params) {
        return ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.BACKGROUND_COLOR_MATCH,
            { color: params?.color }
        )
    }

    allRecommended() {
        return [
            this.backgroundUniformity(),
            this.shadowsOnBackground(),
            this.otherFaces(),
            this.backgroundColorMatch(),
        ]
    }
}

export class ImageQualityGroup {
    image = new _Image()
    headSizeAndPosition = new _HeadSizeAndPosition()
    faceImage = new _FaceImage()
    eyes = new _Eyes()
    shadowsAndLightning = new _ShadowsAndLightning()
    poseAndExpression = new _PoseAndExpression()
    headOcclusion = new _HeadOcclusion()
    background = new _Background()
}