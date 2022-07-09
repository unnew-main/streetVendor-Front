import React, { useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { WebView } from 'react-native-webview'

type Props = {
  handleClose: () => void
}
const WebViewContainer = ({ handleClose }: Props) => {
  // const BASE_URL = 'http://10.0.2.2:3000'
  const BASE_URL = 'http://localhost:3000'

  const [webview, setWebview] = useState<any>()
  const [goBackable, setGoBackable] = useState(false)
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        console.log('goBackable', goBackable)
        if (goBackable) webview.goBack()
        else handleClose()
        return true
      },
    )
    return () => backHandler.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goBackable])
  useEffect(() => {
    if (webview && webview.clearCache) webview.clearCache()
  }, [webview])
  return (
    <WebView
      // pullToRefreshEnabled={true}
      // startInLoadingState={true}
      // allowsBackForwardNavigationGestures={true}
      source={{ uri: BASE_URL }}
      // mixedContentMode={'compatibility'}
      // originWhitelist={['https://*', 'http://*']}
      // overScrollMode={'never'}
      // // ref={ref => setWebview(ref)}
      // injectedJavaScript={`
      //   (function() {
      //       function wrap(fn) {
      //       return function wrapper() {
      //           var res = fn.apply(this, arguments);
      //           window.ReactNativeWebView.postMessage(window.location.href);
      //           return res;
      //       }
      //       }
      //       history.pushState = wrap(history.pushState);
      //       history.replaceState = wrap(history.replaceState);
      //       window.addEventListener('popstate', function() {
      //       window.ReactNativeWebView.postMessage(window.location.href);
      //       });
      //   })();
      //   true;
      //   `}
      // onMessage={event => {
      //   const url = event.nativeEvent.data
      //   setGoBackable(url !== BASE_URL)
      //   console.log('onMessage', event.nativeEvent.data)
      // }}
    />
  )
}

export default WebViewContainer
