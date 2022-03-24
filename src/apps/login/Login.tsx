import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Linking, Alert } from 'react-native'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import { getDeepLink } from './utilities'

export function Login(this: any) {
  // const openLink = async () => {
  //   try {
  //     const url = 'https://www.naver.com'
  //     if (await InAppBrowser.isAvailable) {
  //       const result = await InAppBrowser.open(url, {
  //         // iOS Properties
  //         dismissButtonStyle: 'cancel',
  //         preferredBarTintColor: '#453AA4',
  //         preferredControlTintColor: 'white',
  //         readerMode: false,
  //         animated: true,
  //         modalPresentationStyle: 'fullScreen',
  //         modalTransitionStyle: 'coverVertical',
  //         modalEnabled: true,
  //         enableBarCollapsing: false,
  //         // Android Properties
  //         showTitle: true,
  //         toolbarColor: '#6200EE',
  //         secondaryToolbarColor: 'black',
  //         navigationBarColor: 'black',
  //         navigationBarDividerColor: 'white',
  //         enableUrlBarHiding: true,
  //         enableDefaultShare: true,
  //         forceCloseOnRedirection: false,
  //         // Specify full animation resource identifier(package:anim/name)
  //         // or only resource name(in case of animation bundled with app).
  //         animations: {
  //           startEnter: 'slide_in_right',
  //           startExit: 'slide_out_left',
  //           endEnter: 'slide_in_left',
  //           endExit: 'slide_out_right',
  //         },
  //         // headers: {
  //         //   'my-custom-header': 'my custom header value',
  //         // },
  //       })
  //       Alert.alert(JSON.stringify(result))
  //     } else {
  //       Linking.openURL(url)
  //     }
  //   } catch (error: any) {
  //     Alert.alert(error.message)
  //   }
  // }

  const onLogin = async () => {
    const deepLink = getDeepLink('callback')
    const url = `https://my-auth-login-page.com?redirect_uri=${deepLink}`
    try {
      if (await InAppBrowser.isAvailable()) {
        InAppBrowser.openAuth(url, deepLink, {
          // iOS Properties
          ephemeralWebSession: false,
          // Android Properties
          showTitle: false,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
        }).then(response => {
          if (response.type === 'success' && response.url) {
            Linking.openURL(response.url)
          }
        })
      } else {
        Linking.openURL(url)
      }
    } catch (error) {
      Linking.openURL(url)
    }
  }
  return (
    <View>
      <Text>Ehll</Text>
      {/* <TouchableOpacity onPress={openLink}>
        <Text>Touch</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={onLogin}>
        <Text>Touch2</Text>
      </TouchableOpacity>
    </View>
  )
}
