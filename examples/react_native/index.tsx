import { registerRootComponent } from 'expo'
import WebView from 'react-native-webview'
import { onload } from './src/main'

var webViewRef: any
const onclicks: any = {}
const onMessage = (json: any) => {
  const event = JSON.parse(json.nativeEvent.data)
  if (event.id === "ready") onload()
  if (event.id === "onclick") {
    onclicks[event.value]()
  }
}

export const document = {
  getElementById(id: string): any {
    return new Proxy({}, {
      set(_, prop: string, value) {
        if (prop == "onclick") {
          onclicks[id] = value
          webViewRef.injectJavaScript(`
            document.getElementById("${id}").onclick = () => {
              window.ReactNativeWebView.postMessage(JSON.stringify({ id: "onclick", value: "${id}" }));
            }; true
          `)
        } else
          webViewRef.injectJavaScript(`document.getElementById("${id}").${prop} = "${value}"; true`)
        return true
      },
      get(_, prop: string) {
        if (prop === "style") return new Proxy({}, {
          set(_, styleProp: string, value) {
            webViewRef.injectJavaScript(`document.getElementById("${id}").style.${styleProp} = "${value}"; true`)
            return true
          }
        })
        return undefined
      },
    }
    )
  }
}

registerRootComponent(() =>
  <WebView
    ref={ref => { webViewRef = ref }}
    onMessage={onMessage}
    source={require("./index.html")}
    scrollEnabled={false}
    injectedJavaScript="document.body.addEventListener('touchmove', function(e) { e.preventDefault() }, { passive: false })"
  />
)
