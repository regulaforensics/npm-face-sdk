package com.regula.plugin.facesdk

import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.apache.cordova.CordovaWebView
import org.apache.cordova.PluginResult
import org.json.JSONArray

lateinit var args: JSONArray
lateinit var eventSender: CordovaWebView
val eventCallbackIds = mutableMapOf<String, String>()

fun sendEvent(callbackId: String, data: Any? = "") {
    val pluginResult = PluginResult(PluginResult.Status.OK, data.toSendable() as String?)
    pluginResult.keepCallback = true
    eventSender.sendPluginResult(pluginResult, eventCallbackIds[callbackId] ?: callbackId)
}

@Suppress("UNCHECKED_CAST")
fun <T> argsNullable(index: Int): T? = if (args.get(index).toString() != "null") {
    args.get(index) as T
} else null

class CVDFaceSDK : CordovaPlugin() {
    override fun execute(action: String, arguments: JSONArray, callbackContext: CallbackContext): Boolean {
        activity = cordova.activity
        eventSender = webView
        args = arguments
        val method = args.remove(0) as String
        if (method == "setEvent") eventCallbackIds[args(0)] = callbackContext.callbackId
        methodCall(method) { data: Any? -> sendEvent(callbackContext.callbackId, data) }
        return true
    }
}
