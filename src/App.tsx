// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { Splash, Login, RegisterMember } from './apps'
// import { LoadingContext } from './contexts/LoadingContext'
// import { HomeStack } from './navigates'

// export type StackAppList = {
//   Splash: undefined
//   Login: undefined
//   RegisterMember: undefined
//   HomeStack: undefined
// }

// const Stack = createStackNavigator<StackAppList>()
// const App = () => {
//   return (
//     <LoadingContext>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Splash">
//           <Stack.Screen
//             name="Splash"
//             component={Splash}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="RegisterMember"
//             component={RegisterMember}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="HomeStack"
//             component={HomeStack}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </LoadingContext>
//   )
// }

// export default App

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Alert,
  BackHandler,
  View,
} from 'react-native'
import WebViewContainer from './components/webView/WebViewContainer'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.root}>
        <WebViewContainer
          handleClose={() => {
            Alert.alert('앱 종료', '앱을 종료하시겠습니까?', [
              {
                text: '아니오',
                onPress: () => null,
              },
              { text: '예', onPress: () => BackHandler.exitApp() },
            ])
          }}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default App
