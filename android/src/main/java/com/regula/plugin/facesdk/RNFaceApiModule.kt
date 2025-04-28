package com.regula.plugin.facesdk

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.ViewManager
import org.json.JSONArray
import org.json.JSONObject

var listenerCount = 0
lateinit var args: JSONArray
lateinit var reactContext: ReactContext

fun sendEvent(event: String, data: Any? = "") {
    if (listenerCount <= 0) return
    val result = if (data is JSONObject || data is JSONArray) data.toString() else data.toString() + ""
    reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit(event, result)
}

@Suppress("UNCHECKED_CAST")
fun <T> argsNullable(index: Int): T? {
    val value = args[index]
    if (value is Double && value % 1 == 0.0) return value.toInt() as T
    if (value.toString() == "null") return null
    return value as T
}

class RNFaceSDKPackage : ReactPackage {
    override fun createNativeModules(rc: ReactApplicationContext) = listOf(RNFaceSDKModule(rc))
    override fun createViewManagers(rc: ReactApplicationContext) = emptyList<ViewManager<*, *>>()
}

@Suppress("unused", "UNUSED_PARAMETER")
class RNFaceSDKModule(rc: ReactApplicationContext) : ReactContextBaseJavaModule(rc) {
    init {
        reactContext = rc
    }

    @ReactMethod
    fun addListener(eventName: String) {
        listenerCount += 1
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        listenerCount -= count
    }

    @ReactMethod
    fun exec(method: String, arguments: ReadableArray, promise: Promise) {
        args = JSONArray(arguments.toArrayList())
        reactContext.currentActivity?.let { activity = it }
        methodCall(method) { data -> promise.resolve(data.toSendable()) }
    }
    override fun getName() = "RNFaceSDK"
}
