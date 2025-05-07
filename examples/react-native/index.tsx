
import React, { useRef } from 'react';
import { AppRegistry } from 'react-native';
import { onload } from './src/main';
import { WebView } from 'react-native-webview'

var webViewRef: any
const onclicks = {}

const onMessage = (json) => {
  const event = JSON.parse(json.nativeEvent.data)
  if (event.id === "ready") onload()
  if (event.id === "onclick") {
    onclicks[event.value]()
  }
}

export const App = () => {
  webViewRef = useRef(null)
  return (
    <WebView
      ref={webViewRef}
      onMessage={onMessage}
      source={require("./index.html")}
      scrollEnabled={false}
      injectedJavaScript="document.body.addEventListener('touchmove', function(e) { e.preventDefault() }, { passive: false })"
    />
  )
}

AppRegistry.registerComponent("App", () => App)

export const document = {
  getElementById(id: string): any {
    return new Proxy({}, {
      set(_, prop: string, value) {
        if (prop == "onclick") {
          onclicks[id] = value
          webViewRef.current.injectJavaScript(`
            document.getElementById("${id}").onclick = () => {
              window.ReactNativeWebView.postMessage(JSON.stringify({ id: "onclick", value: "${id}" }));
            }; true
          `)
        } else
          webViewRef.current.injectJavaScript(`document.getElementById("${id}").${prop} = "${value}"; true`)
        return true
      }
    }
    )
  }
}
