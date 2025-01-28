
import { InitConfig } from './init/init_config'
import { InitException } from './init/init_exception'
import { InitErrorCode } from './init/init_exception'
import { LicenseException } from './init/license_exception'
import { LicensingResultCode } from './init/license_exception'
export { InitConfig, InitException, InitErrorCode, LicenseException, LicensingResultCode }

import { CameraPosition } from './customization/camera_position'
import { ScreenOrientation } from './customization/screen_orientation'
import { LivenessBackendException, LivenessBackendErrorCode } from './liveness/liveness_backend_exception'
import { LivenessConfig, RecordingProcess, LivenessType, LivenessSkipStep } from './liveness/liveness_config'
import { LivenessException, LivenessErrorCode } from './liveness/liveness_exception'
import { LivenessNotification, LivenessProcessStatus, LivenessNotificationCompletion } from './liveness/liveness_notification'
import { LivenessResponse, LivenessStatus } from './liveness/liveness_response'
export { LivenessBackendException, LivenessBackendErrorCode, LivenessConfig, RecordingProcess, LivenessType, LivenessSkipStep, LivenessException, LivenessErrorCode, LivenessNotification, LivenessProcessStatus, LivenessNotificationCompletion, LivenessResponse, LivenessStatus, CameraPosition, ScreenOrientation }

/**
 * Entry point of the Regula Face SDK.
 */
export class FaceSDK {
    /**
     * Allows you to initialize FaceSDK.
     * 
     * @param params.config - configuration file for FaceSDK initialization.
     * 
     * @returns Returns boolean indicating success of initialization
     * and a nullable {@link InitException}.
     */
    initialize(
        params?: {
            config?: InitConfig
        }
    ): Promise<[boolean, InitException | null]>

    /**
     * Used to deinitialize FaceSDK and free up RAM as a
     * consequence of this.
     */
    deinitialize(): void

    startLiveness(
        params?: {
            config?: LivenessConfig,
            notificationCompletion?: LivenessNotificationCompletion,
            cameraSwitchCallback?: CameraSwitchCallback,
        }
    ): Promise<LivenessResponse>

    stopLiveness(): void
}

export type CameraSwitchCallback = (cameraId: number) => void
