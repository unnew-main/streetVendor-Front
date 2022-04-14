import { SelectJobApp, UserMainApp, BossSplashApp } from '@/apps'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type StackParamList = {
  SelectJob: undefined
  UserMain: undefined
  BossSplash: undefined
}

const Stack = createStackNavigator<StackParamList>()

export function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="SelectJob">
      <Stack.Screen
        name="SelectJob"
        component={SelectJobApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserMain"
        component={UserMainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossSplash"
        component={BossSplashApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
