var eventCallbackIds: [String: String] = [:]
private var this: CDVFaceSDK?

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

let rootViewController: () -> UIViewController? = {
    return UIApplication.shared.connectedScenes
        .compactMap { $0 as? UIWindowScene }
        .flatMap { $0.windows }
        .first { $0.isKeyWindow }?
        .rootViewController
}
