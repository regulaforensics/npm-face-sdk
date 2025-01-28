import { exec, _setVideoEncoderCompletion, _setLivenessNotificationCompletion, _setCameraSwitchCallback } from './internal/bridge'

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
import { LivenessNotification, LivenessProcessStatus } from './liveness/liveness_notification'
import { LivenessResponse, LivenessStatus } from './liveness/liveness_response'

export { LivenessBackendException, LivenessBackendErrorCode, LivenessConfig, RecordingProcess, LivenessType, LivenessSkipStep, LivenessException, LivenessErrorCode, LivenessNotification, LivenessProcessStatus, LivenessResponse, LivenessStatus, CameraPosition, ScreenOrientation }

export class FaceSDK {
    async initialize(params) {
        var response = await exec("initialize", [params?.config])

        var jsonObject = JSON.parse(response)
        var success = jsonObject["success"]
        var error = jsonObject["error"]

        return [success, InitException.fromJson(error)]
    }

    deinitialize() {
        exec("deinitialize", [])
    }

    async startLiveness(params) {
        _setCameraSwitchCallback(params?.cameraSwitchCallback)
        _setLivenessNotificationCompletion(params?.notificationCompletion)
        var response = await exec("startLiveness", [params?.config])
        return LivenessResponse.fromJson(JSON.parse(response))
    }

    stopLiveness() {
        exec("stopLiveness", [])
    }
}
