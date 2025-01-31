import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

export class FaceCaptureConfig {
    copyright: boolean
    cameraSwitchEnabled: boolean
    closeButtonEnabled: boolean
    torchButtonEnabled: boolean
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
    timeout?: number
    holdStillDuration?: number

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
            timeout?: number
            holdStillDuration?: number
        }
    )
}