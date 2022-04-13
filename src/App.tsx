import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashApp, LoginApp, HomeApp, RegisterMemberApp } from './apps'

export type StackParamList = {
  Splash: undefined
  Login: undefined
  RegisterMember: undefined
  Home: undefined
}

const Stack = createStackNavigator<StackParamList>()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterMember"
          component={RegisterMemberApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
