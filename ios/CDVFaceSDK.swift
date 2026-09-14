@objc(CDVFaceSDK)
class CDVFaceSDK: CDVPlugin {
    @objc(exec:)
    func exec(_ command: CDVInvokedUrlCommand) {
        this = self
        let method = command.arguments.first as! String
        args = Array(command.arguments.dropFirst())
        
        if method == "setEvent" {
            eventCallbackIds[args.first as! String] = command.callbackId
            return
        }
        
        methodCall(method, { data in sendEvent(command.callbackId, data) })
    }
}

var this: CDVFaceSDK?
var eventCallbackIds: [String: String] = [:]
func sendEvent(_ event: String, _ data: Any? = "") {
    var callbackId = event
    let eventId = eventCallbackIds[event]
    if eventId != nil { callbackId = eventId! }
    
    // In this section unreasonable casts and optionals are made to
    // ensure that this code works with both cordova-ios@7 and cordova-ios@8.
    var sendable = data.toSendable()
    if sendable is NSNull { sendable = "" }
    let message = sendable as! String
    let result: CDVPluginResult? = CDVPluginResult(status: CDVCommandStatus.ok, messageAs: message)
    result!.setKeepCallbackAs(true)
    
    this!.commandDelegate.send(result!, callbackId: callbackId)
}

func runAsync (_ action: @escaping (UIViewController) -> Void) {
    DispatchQueue.main.async {
        for case let scene as UIWindowScene in UIApplication.shared.connectedScenes
            where scene.activationState == .foregroundActive || scene.activationState == .foregroundInactive {
            let window = scene.windows.first { $0.isKeyWindow } ?? scene.windows.first { !$0.isHidden && $0.alpha > 0 && $0.windowLevel == .normal }
            guard var presenter = window?.rootViewController else { continue }
            while let next = presenter.presentedViewController
                ?? (presenter as? UINavigationController)?.visibleViewController
                ?? (presenter as? UINavigationController)?.topViewController
                ?? (presenter as? UITabBarController)?.selectedViewController {
                presenter = next
            }
            guard presenter.viewIfLoaded?.window != nil else { continue }
            action(presenter)
            return
        }
        print("REGULA: Cannot present the UI: no presenter available.")
    }
}
