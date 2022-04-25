import {
  SelectJobApp,
  UserMainApp,
  RegisterStoreApp,
  BossMainApp,
} from '@/apps'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type StackHomeList = {
  SelectJob: undefined
  UserMain: undefined
  RegisterStore: undefined
  BossMain: undefined
}

const Stack = createStackNavigator<StackHomeList>()

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
        name="RegisterStore"
        component={RegisterStoreApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossMain"
        component={BossMainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
