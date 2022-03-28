import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Linking, Alert } from 'react-native'
import { InAppBrowser } from 'react-native-inappbrowser-reborn'

export const Login = () => {
  async function openLink() {
    try {
      const url =
        'https://328856282923-prkof1vnb5haq7psquq9inkq4opb8iah.apps.googleusercontent.com'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          // dismissButtonStyle: 'cancel',
          // // preferredBarTintColor: '#453AA4',
          // preferredControlTintColor: 'white',
          // readerMode: false,
          // animated: true,
          // modalPresentationStyle: 'fullScreen',
          // modalTransitionStyle: 'coverVertical',
          // modalEnabled: true,
          // enableBarCollapsing: false,
          // // Android Properties
          // showTitle: true,
          // // toolbarColor: '#6200EE',
          // secondaryToolbarColor: 'black',
          // navigationBarColor: 'black',
          // navigationBarDividerColor: 'white',
          // enableUrlBarHiding: true,
          // enableDefaultShare: true,
          // forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        })
        Alert.alert('result', JSON.stringify(result))
      } else Linking.openURL(url)
    } catch (error: any) {
      Alert.alert(error.message)
    }
  }
  return (
    <View>
      <Text>Login1</Text>
      <TouchableOpacity onPress={openLink}>
        <Text>Login google</Text>
      </TouchableOpacity>
    </View>
  )
}
