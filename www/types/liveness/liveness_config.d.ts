import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

/**
 * Configuration for the Liveness processing.
 * The configuration provides convenient properties to change the behavior and the appearance of the Liveness UI module.
 */
export class LivenessConfig {
    /**
     * Defines, whether the logo is visible on the bottom of Liveness UI screens. Defaults to `true`.
     */
    copyright: boolean

    /**
     * Defines, whether the camera's toolbar switch camera button is available on the Liveness UI. Defaults to `false`.
     * When set to `true` the CameraToolbarView will contain a button to change current `cameraPosition`.
     * Only for livenessType = {@link LivenessType.PASSIVE}.
     */
    cameraSwitchEnabled: boolean

    closeButtonEnabled: boolean

    /**
     * Defines, whether the camera's toolbar torch button is available on the Liveness UI. Defaults to `true`.
     * When set to `false` the CameraToolbarView won't contain a button to toggle camera's flashlight.
     * Only for livenessType = {@link LivenessType.PASSIVE}.
     */
    torchButtonEnabled: boolean

    /**
     * Enables vibration during Liveness processing. Defaults to `true`.
     */
    vibrateOnSteps: boolean

    /**
     * Android only.
     */
    cameraPositionAndroid?: number

    /**
     * IOS only.
     */
    cameraPositionIOS: CameraPosition

    /**
     * Android only.
     */
    screenOrientation?: Array<ScreenOrientation>

    /**
     * Defines whether the liveness request sends a location of a device. Defaults to `true`.
     * When set to `true` the liveness request to web service will contain the `location`
     * object within the json `metadata` object.
     * The location is used only when permissions are granted and the location is available.
     */
    locationTrackingEnabled: boolean

    /**
     * The number of attempts to pass the Liveness before completing with error. Defaults to `0`.
     * When set to `0`  the Liveness will always ask to retry on error.
     */
    attemptsCount: number

    /**
     * Defines whether the liveness recording video of processing.
     * Defaults to {@link RecordingProcess.ASYNCHRONOUS_UPLOAD}.
     */
    recordingProcess: RecordingProcess

    /**
     * Defines whether the liveness processing type. Defaults to {@link LivenessType.ACTIVE}.
     */
    livenessType: LivenessType

    /**
     * Defines tag that can be used in Liveness processing. Defaults to `null`.
     */
    tag?: string

    /**
     * Defines which steps of the user interface can be omitted. See {@link LivenessSkipStep} enum for details.
     */
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