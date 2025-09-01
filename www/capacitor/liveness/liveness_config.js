import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

export class LivenessConfig {
    copyright
    cameraSwitchEnabled
    closeButtonEnabled
    torchButtonEnabled
    vibrateOnSteps
    cameraPositionIOS
    cameraPositionAndroid
    screenOrientation
    locationTrackingEnabled
    attemptsCount
    recordingProcess
    livenessType
    tag
    skipStep
    metadata

    constructor(params) {
        this.copyright = params?.copyright ?? true
        this.cameraSwitchEnabled = params?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = params?.closeButtonEnabled ?? true
        this.torchButtonEnabled = params?.torchButtonEnabled ?? true
        this.vibrateOnSteps = params?.vibrateOnSteps ?? true
        this.cameraPositionIOS = params?.cameraPositionIOS ?? CameraPosition.FRONT
        this.cameraPositionAndroid = params?.cameraPositionAndroid
        this.screenOrientation = params?.screenOrientation ?? [ScreenOrientation.PORTRAIT]
        this.locationTrackingEnabled = params?.locationTrackingEnabled ?? true
        this.attemptsCount = params?.attemptsCount ?? 0
        this.recordingProcess = params?.recordingProcess ?? RecordingProcess.ASYNCHRONOUS_UPLOAD
        this.livenessType = params?.livenessType ?? LivenessType.ACTIVE
        this.tag = params?.tag
        this.skipStep = params?.skipStep ?? []
        this.metadata = params?.metadata
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessConfig()

        result.copyright = jsonObject["copyright"]
        result.cameraSwitchEnabled = jsonObject["cameraSwitchEnabled"]
        result.closeButtonEnabled = jsonObject["closeButtonEnabled"]
        result.torchButtonEnabled = jsonObject["torchButtonEnabled"]
        result.vibrateOnSteps = jsonObject["vibrateOnSteps"]
        result.cameraPositionAndroid = jsonObject["cameraPositionAndroid"]
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"]
        result.screenOrientation = jsonObject["screenOrientation"]
        result.locationTrackingEnabled = jsonObject["locationTrackingEnabled"]
        result.attemptsCount = jsonObject["attemptsCount"]
        result.recordingProcess = jsonObject["recordingProcess"]
        result.livenessType = jsonObject["livenessType"]
        result.tag = jsonObject["tag"]
        result.skipStep = jsonObject["skipStep"]
        result.metadata = jsonObject["metadata"]

        return result
    }

    toJson() {
        return {
            "copyright": this.copyright,
            "cameraSwitchEnabled": this.cameraSwitchEnabled,
            "closeButtonEnabled": this.closeButtonEnabled,
            "torchButtonEnabled": this.torchButtonEnabled,
            "vibrateOnSteps": this.vibrateOnSteps,
            "cameraPositionAndroid": this.cameraPositionAndroid,
            "cameraPositionIOS": this.cameraPositionIOS,
            "screenOrientation": this.screenOrientation,
            "locationTrackingEnabled": this.locationTrackingEnabled,
            "attemptsCount": this.attemptsCount,
            "recordingProcess": this.recordingProcess,
            "livenessType": this.livenessType,
            "tag": this.tag,
            "skipStep": this.skipStep,
            "metadata": this.metadata,
        }
    }
}

export const RecordingProcess = {
    ASYNCHRONOUS_UPLOAD: 0,
    SYNCHRONOUS_UPLOAD: 1,
    NOT_UPLOAD: 2,
}

export const LivenessType = {
    ACTIVE: 0,
    PASSIVE: 1,
}

export const LivenessSkipStep = {
    ONBOARDING_STEP: 0,
    SUCCESS_STEP: 1,
}