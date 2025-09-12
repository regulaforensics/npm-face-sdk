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

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureConfig()

        result.copyright = jsonObject["copyright"]
        result.cameraSwitchEnabled = jsonObject["cameraSwitchEnabled"]
        result.closeButtonEnabled = jsonObject["closeButtonEnabled"]
        result.torchButtonEnabled = jsonObject["torchButtonEnabled"]
        result.vibrateOnSteps = jsonObject["vibrateOnSteps"]
        result.detectOcclusion = jsonObject["detectOcclusion"]
        result.showFaceAnimation = jsonObject["showFaceAnimation"]
        result.cameraPositionAndroid = jsonObject["cameraPositionAndroid"]
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"]
        result.screenOrientation = jsonObject["screenOrientation"]
        result.timeout = jsonObject["timeout"]
        result.holdStillDuration = jsonObject["holdStillDuration"]

        return result
    }

    toJson() {
        return {
            "copyright": this.copyright,
            "cameraSwitchEnabled": this.cameraSwitchEnabled,
            "closeButtonEnabled": this.closeButtonEnabled,
            "torchButtonEnabled": this.torchButtonEnabled,
            "vibrateOnSteps": this.vibrateOnSteps,
            "detectOcclusion": this.detectOcclusion,
            "showFaceAnimation": this.showFaceAnimation,
            "cameraPositionAndroid": this.cameraPositionAndroid,
            "cameraPositionIOS": this.cameraPositionIOS,
            "screenOrientation": this.screenOrientation,
            "timeout": this.timeout,
            "holdStillDuration": this.holdStillDuration,
        }
    }
}