import React

@objc(RNFaceSDK)
public class RNFaceSDK: RCTEventEmitter {
    override public func startObserving() { hasListeners = true }
    override public func stopObserving() { hasListeners = false }
    override public func supportedEvents()->[String] {
        return [cameraSwitchEvent,
                livenessNotificationEvent,
                videoEncoderCompletionEvent,
                onCustomButtonTappedEvent];
    }
    
    @objc
    func exec(
        _ method: String,
        newArgs: [Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        this = self
        args = newArgs
        methodCall(method, { data in
            if firedCallbacks.contains(where: { ($0 as AnyObject) === (resolve as AnyObject) }) { return }
            firedCallbacks.append(resolve)
            resolve(data.toSendable())
        })
    }
}

private var firedCallbacks: [RCTResponseSenderBlock] = []
private var hasListeners: Bool = false
private var this: RNFaceSDK?

func sendEvent(_ event: String, _ data: Any? = nil) {
    guard let plugin = this, hasListeners else { return }
    DispatchQueue.main.async {
        plugin.sendEvent(withName: event, body: data.toSendable())
    }
}

let rootViewController: () -> UIViewController? = { return RCTPresentedViewController() }
