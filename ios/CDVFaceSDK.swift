#if canImport(Cordova)
import Cordova
#endif
import UIKit

private weak var plugin: CDVFaceSDK?
private var eventCallbackIds: [String: String] = [:]

@objc(CDVFaceSDK)
class CDVFaceSDK: CDVPlugin {
    @objc(exec:)
    func exec(_ command: CDVInvokedUrlCommand) {
        plugin = self
        let method = command.arguments.first as! String
        args = Array(command.arguments.dropFirst())
        if method == "setEvent" {
            eventCallbackIds[args[0] as! String] = command.callbackId
            return
        }
        methodCall(method) { data in sendEvent(command.callbackId, data) }
    }
}

func sendEvent(_ event: String, _ data: Any? = nil) {
    let result: CDVPluginResult?
    switch data.toSendable() {
    case let value as String: result = CDVPluginResult(status: .ok, messageAs: value)
    case let value as NSNumber where CFGetTypeID(value) == CFBooleanGetTypeID(): result = CDVPluginResult(status: .ok, messageAs: value.boolValue)
    case let value as NSNumber: result = CDVPluginResult(status: .ok, messageAs: value.doubleValue)
    default: result = CDVPluginResult(status: .ok)
    }
    guard let result else { return }
    result.setKeepCallbackAs(true)
    plugin?.commandDelegate.send(result, callbackId: eventCallbackIds[event] ?? event)
}

func withPresenter(_ action: @escaping (UIViewController) -> Void) {
    DispatchQueue.main.async {
        let windows = UIApplication.shared.connectedScenes.compactMap { $0 as? UIWindowScene }.filter { $0.activationState == .foregroundActive || $0.activationState == .foregroundInactive }.flatMap { $0.windows }
        let candidates = windows.filter { $0.isKeyWindow } + windows.filter { !$0.isKeyWindow && !$0.isHidden && $0.alpha > 0 && $0.windowLevel == .normal }
        for window in candidates {
            guard var presenter = window.rootViewController else { continue }
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
