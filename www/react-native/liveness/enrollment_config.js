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
        this.preventScreenRecording = params?.preventScreenRecording ?? false
        this.attemptsCount = params?.attemptsCount ?? 0
        this.recordingProcess = params?.recordingProcess ?? RecordingProcess.ASYNCHRONOUS_UPLOAD
        this.livenessType = params?.livenessType ?? LivenessType.ACTIVE
        this.tag = params?.tag
        this.skipStep = params?.skipStep ?? []
        this.metadata = params?.metadata
        this.externalId = params?.externalId
        this.groupId = params?.groupId
        this.checkDuplicatesEnabled = params?.checkDuplicatesEnabled
        this.duplicatesThreshold = params?.duplicatesThreshold
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
