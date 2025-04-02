import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

export class FaceCaptureConfig {
    copyright
    cameraSwitchEnabled
    closeButtonEnabled
    torchButtonEnabled
    vibrateOnSteps
    cameraPositionIOS
    screenOrientation
    cameraPositionAndroid
    timeout
    holdStillDuration

    constructor(params) {
        this.copyright = params?.copyright ?? true
        this.cameraSwitchEnabled = params?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = params?.closeButtonEnabled ?? true
        this.torchButtonEnabled = params?.torchButtonEnabled ?? true
        this.vibrateOnSteps = params?.vibrateOnSteps ?? true
        this.cameraPositionIOS = params?.cameraPositionIOS ?? CameraPosition.FRONT
        this.screenOrientation = params?.screenOrientation ?? [ScreenOrientation.PORTRAIT]
        this.cameraPositionAndroid = params?.cameraPositionAndroid
        this.timeout = params?.timeout
        this.holdStillDuration = params?.holdStillDuration
    }
}