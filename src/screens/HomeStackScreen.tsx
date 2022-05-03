import { SelectJobApp, UserMainApp } from '@/apps'
import { BossStackApp } from '@/apps/boss/BossStackApp'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type StackHomeList = {
  SelectJob: undefined
  UserMain: undefined
  BossStack: undefined
}

const Stack = createStackNavigator<StackHomeList>()

export function HomeStackScreen() {
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
        name="BossStack"
        component={BossStackApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
