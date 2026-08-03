var _exec = (completion, options) => cordova.exec(completion, null, "FaceSDK", "exec", options)

export const NativeModules = {
    RNFaceSDK: {
        exec: async (name, options) => new Promise((resolve, _) => _exec(data => resolve(data), [name, ...options]))
    }
}

export class NativeEventEmitter {
    addListener(id, completion) {
        _exec(completion, ["setEvent", id])
    }

    removeAllListeners(id) {
        _exec(null, ["setEvent", id])
    }
}