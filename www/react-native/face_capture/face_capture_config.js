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
    preventScreenRecording
    cameraPositionIOS
    cameraPositionAndroid
    screenOrientation
    timeout
    holdStillDuration

    constructor(options) {
        this.copyright = options?.copyright ?? true
        this.cameraSwitchEnabled = options?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = options?.closeButtonEnabled ?? true
        this.torchButtonEnabled = options?.torchButtonEnabled ?? true
        this.vibrateOnSteps = options?.vibrateOnSteps ?? true
        this.detectOcclusion = options?.detectOcclusion ?? true
        this.showFaceAnimation = options?.showFaceAnimation ?? true
        this.preventScreenRecording = options?.preventScreenRecording ?? false
        this.cameraPositionIOS = options?.cameraPositionIOS ?? CameraPosition.FRONT
        this.cameraPositionAndroid = options?.cameraPositionAndroid
        this.screenOrientation = options?.screenOrientation ?? [ScreenOrientation.PORTRAIT]
        this.timeout = options?.timeout
        this.holdStillDuration = options?.holdStillDuration
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
        result.preventScreenRecording = jsonObject["preventScreenRecording"]
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
            "preventScreenRecording": this.preventScreenRecording,
            "cameraPositionAndroid": this.cameraPositionAndroid,
            "cameraPositionIOS": this.cameraPositionIOS,
            "screenOrientation": this.screenOrientation,
            "timeout": this.timeout,
            "holdStillDuration": this.holdStillDuration,
        }
    }
}