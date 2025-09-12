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

export function dateToString(date) {
    if (date == null) return null
    const fmt = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
        hour12: false
    });

    const parts = fmt.formatToParts(date);
    const get = (t) => parts.find(p => p.type === t)?.value ?? '';

    return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')}.${get('fractionalSecond')}`;
}
