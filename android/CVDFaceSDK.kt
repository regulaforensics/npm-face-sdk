package com.regula.plugin.facesdk

import android.content.Context
import org.apache.cordova.CallbackContext
import org.apache.cordova.CordovaPlugin
import org.apache.cordova.PluginResult
import org.json.JSONArray

val eventCallbackIds = mutableMapOf<String, String>()

lateinit var args: JSONArray
lateinit var binding: CordovaPlugin
val context: Context
    get() = binding.cordova.context

fun sendEvent(callbackId: String, data: Any? = "") {
    val pluginResult = when (data) {
        is Int -> PluginResult(PluginResult.Status.OK, data)
        is Boolean -> PluginResult(PluginResult.Status.OK, data)
        else -> PluginResult(PluginResult.Status.OK, data.toSendable() as String?)
    }
    pluginResult.keepCallback = true
    binding.webView.sendPluginResult(pluginResult, eventCallbackIds[callbackId] ?: callbackId)
}

@Suppress("UNCHECKED_CAST")
fun <T> argsNullable(index: Int): T? = if (args.get(index).toString() != "null") {
    args.get(index) as T
} else null

class CVDFaceSDK : CordovaPlugin() {
    init {
        binding = this
    }

    override fun execute(action: String, arguments: JSONArray, callbackContext: CallbackContext): Boolean {
        args = arguments
        val method = args.remove(0) as String
        if (method == "setEvent") eventCallbackIds[args(0)] = callbackContext.callbackId
        methodCall(method) { data: Any? -> sendEvent(callbackContext.callbackId, data) }
        return true
    }
}
