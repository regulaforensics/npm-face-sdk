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
    runAsync { _ in plugin.sendEvent(withName: event, body: data.toSendable()) }
}

func runAsync(_ action: @escaping (UIViewController) -> Void) {
    DispatchQueue.main.async {
        if let presenter = RCTPresentedViewController() {
            action(presenter)
            return
        }
        print("REGULA: Cannot present Face SDK UI: no presenter available.")
    }
}
