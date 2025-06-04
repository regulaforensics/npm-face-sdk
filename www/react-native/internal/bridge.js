import { LivenessNotification } from '../liveness/liveness_notification'

import { NativeModules, NativeEventEmitter } from 'react-native'
const { RNFaceSDK } = NativeModules
var eventManager = new NativeEventEmitter(RNFaceSDK)

export async function exec(name, params) {
    return RNFaceSDK.exec(name, params)
}

function _setEvent(id, completion, fromJson) {
    eventManager.removeAllListeners(id)
    // if no fromJson provided, just call completion
    if (fromJson == undefined) fromJson = func => func
    if (completion != undefined) eventManager.addListener(id, fromJson(completion))
}

export function _setCustomButtonTappedCompletion(completion) {
    _setEvent("onCustomButtonTappedEvent", completion)
}

export function _setVideoEncoderCompletion(completion) {
    _setEvent("video_encoder_completion", completion, func => json => {
        var jsonObject = JSON.parse(json)
        var transactionId = jsonObject["transactionId"]
        var success = jsonObject["success"]
        func(transactionId, success)
    })
}

export function _setLivenessNotificationCompletion(completion) {
    _setEvent("livenessNotificationEvent", completion, func => json => {
        var livenessNotification = LivenessNotification.fromJson(JSON.parse(json))
        func(livenessNotification)
    })
}

export function _setCameraSwitchCallback(completion) {
    _setEvent("cameraSwitchEvent", completion)
}