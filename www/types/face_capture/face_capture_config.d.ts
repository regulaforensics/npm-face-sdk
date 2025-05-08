import { CameraPosition } from '../customization/camera_position'
import { ScreenOrientation } from '../customization/screen_orientation'

export class FaceCaptureConfig {
    copyright: boolean
    cameraSwitchEnabled: boolean
    closeButtonEnabled: boolean
    torchButtonEnabled: boolean
    vibrateOnSteps: boolean
    /**
     * Enables global face hint animation.
     */
    showFaceAnimation: boolean
    /**
     * Android only.
     */
    cameraPositionAndroid?: number
    /**
     * IOS only.
     */
    cameraPositionIOS: CameraPosition
    /**
     * Allows you to specify an orientation of the camera view controller.
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
            showFaceAnimation?: boolean
            cameraPositionAndroid?: number
            cameraPositionIOS?: CameraPosition
            screenOrientation?: Array<ScreenOrientation>
            timeout?: number
            holdStillDuration?: number
        }
    )
}