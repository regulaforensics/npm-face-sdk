import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

export class LivenessConfig {
    copyright: boolean
    cameraSwitchEnabled: boolean
    closeButtonEnabled: boolean
    torchButtonEnabled: boolean
    vibrateOnSteps: boolean
    cameraPositionAndroid?: number
    cameraPositionIOS: CameraPosition
    screenOrientation?: Array<ScreenOrientation>
    locationTrackingEnabled: boolean
    attemptsCount: number
    recordingProcess: RecordingProcess
    livenessType: LivenessType
    tag?: string
    skipStep: Array<LivenessSkipStep>
    metadata?: Record<string, any>

    constructor(
        params?: {
            copyright?: boolean
            cameraSwitchEnabled?: boolean
            closeButtonEnabled?: boolean
            torchButtonEnabled?: boolean
            vibrateOnSteps?: boolean
            cameraPositionAndroid?: number
            cameraPositionIOS?: CameraPosition
            screenOrientation?: Array<ScreenOrientation>
            locationTrackingEnabled?: boolean
            attemptsCount?: number
            recordingProcess?: RecordingProcess
            livenessType?: LivenessType
            tag?: string
            skipStep?: Array<LivenessSkipStep>
            metadata?: Record<string, any>
        }
    )
}

export enum RecordingProcess {
    ASYNCHRONOUS_UPLOAD,
    SYNCHRONOUS_UPLOAD,
    NOT_UPLOAD,
}

export enum LivenessType {
    ACTIVE,
    PASSIVE,
}

export enum LivenessSkipStep {
    ONBOARDING_STEP,
    SUCCESS_STEP,
}