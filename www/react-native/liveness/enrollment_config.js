import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'
import { RecordingProcess, LivenessType, LivenessSkipStep } from './liveness_config'

export class EnrollmentConfig {
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
    externalId
    groupId
    checkDuplicatesEnabled
    duplicatesThreshold

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
        this.externalId = options?.externalId
        this.groupId = options?.groupId
        this.checkDuplicatesEnabled = options?.checkDuplicatesEnabled
        this.duplicatesThreshold = options?.duplicatesThreshold
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new EnrollmentConfig()

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
        result.externalId = jsonObject["externalId"]
        result.groupId = jsonObject["groupId"]
        result.checkDuplicatesEnabled = jsonObject["checkDuplicatesEnabled"]
        result.duplicatesThreshold = jsonObject["duplicatesThreshold"]

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
            "externalId": this.externalId,
            "groupId": this.groupId,
            "checkDuplicatesEnabled": this.checkDuplicatesEnabled,
            "duplicatesThreshold": this.duplicatesThreshold,
        }
    }
}
