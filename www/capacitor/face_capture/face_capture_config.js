import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

export class FaceCaptureConfig {
    copyright
    cameraSwitchEnabled
    closeButtonEnabled
    torchButtonEnabled
    vibrateOnSteps
    detectOcclusion
    showFaceAnimation
    cameraPositionIOS
    cameraPositionAndroid
    screenOrientation
    timeout
    holdStillDuration

    constructor(params) {
        this.copyright = params?.copyright ?? true
        this.cameraSwitchEnabled = params?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = params?.closeButtonEnabled ?? true
        this.torchButtonEnabled = params?.torchButtonEnabled ?? true
        this.vibrateOnSteps = params?.vibrateOnSteps ?? true
        this.detectOcclusion = params?.detectOcclusion ?? true
        this.showFaceAnimation = params?.showFaceAnimation ?? true
        this.cameraPositionIOS = params?.cameraPositionIOS ?? CameraPosition.FRONT
        this.cameraPositionAndroid = params?.cameraPositionAndroid
        this.screenOrientation = params?.screenOrientation ?? [ScreenOrientation.PORTRAIT]
        this.timeout = params?.timeout
        this.holdStillDuration = params?.holdStillDuration
    }
}