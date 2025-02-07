import { LivenessNotification } from '../liveness/liveness_notification'

import { NativeModules, NativeEventEmitter } from 'react-native'
const { RNFaceSDK } = NativeModules
var eventManager = new NativeEventEmitter(RNFaceSDK)

export async function exec(name, params) {
    return RNFaceSDK.exec(name, params)
}

function _setEvent(id, completion) {
    eventManager.removeAllListeners(id)
    if (completion != null)
        eventManager.addListener(id, completion)
}

export function _setCustomButtonTappedCompletion(completion) {
    _setEvent("onCustomButtonTappedEvent", completion)
}

export function _setVideoEncoderCompletion(completion) {
    _setEvent("video_encoder_completion", (json) => {
        var jsonObject = JSON.parse(json)
        var transactionId = jsonObject["transactionId"]
        var success = jsonObject["success"]
        completion(transactionId, success)
    })
}

export function _setLivenessNotificationCompletion(completion) {
    _setEvent("livenessNotificationEvent", (json) => {
        var livenessNotification = LivenessNotification.fromJson(JSON.parse(json))
        completion(livenessNotification)
    })
}

export function _setCameraSwitchCallback(completion) {
    _setEvent("cameraSwitchEvent", completion)
}