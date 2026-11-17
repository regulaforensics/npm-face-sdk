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
    preventScreenRecording
    attemptsCount
    recordingProcess
    livenessType
    tag
    skipStep
    metadata

    constructor(options) {
        this.copyright = options?.copyright ?? true
        this.cameraSwitchEnabled = options?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = options?.closeButtonEnabled ?? true
        this.torchButtonEnabled = options?.torchButtonEnabled ?? true
        this.vibrateOnSteps = options?.vibrateOnSteps ?? true
        this.cameraPositionIOS = options?.cameraPositionIOS ?? CameraPosition.FRONT
        this.cameraPositionAndroid = options?.cameraPositionAndroid
        this.screenOrientation = options?.screenOrientation ?? [ScreenOrientation.PORTRAIT]
        this.locationTrackingEnabled = options?.locationTrackingEnabled ?? true
        this.preventScreenRecording = options?.preventScreenRecording ?? false
        this.attemptsCount = options?.attemptsCount ?? 0
        this.recordingProcess = options?.recordingProcess ?? RecordingProcess.ASYNCHRONOUS_UPLOAD
        this.livenessType = options?.livenessType ?? LivenessType.ACTIVE
        this.tag = options?.tag
        this.skipStep = options?.skipStep ?? []
        this.metadata = options?.metadata
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
        result.preventScreenRecording = jsonObject["preventScreenRecording"]
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
            "preventScreenRecording": this.preventScreenRecording,
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
    PASSIVE_WITH_BLINK: 2,
}

export const LivenessSkipStep = {
    ONBOARDING_STEP: 0,
    SUCCESS_STEP: 1,
}