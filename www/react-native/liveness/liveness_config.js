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