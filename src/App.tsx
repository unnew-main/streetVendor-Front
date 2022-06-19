import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Splash, Login, RegisterMember } from './apps'
import { LoadingContext } from './contexts/LoadingContext'
import { HomeStack } from './navigates'

export type StackAppList = {
  Splash: undefined
  Login: undefined
  RegisterMember: undefined
  HomeStack: undefined
}

const Stack = createStackNavigator<StackAppList>()
const App = () => {
  return (
    <LoadingContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterMember"
            component={RegisterMember}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoadingContext>
  )
}

export default App
