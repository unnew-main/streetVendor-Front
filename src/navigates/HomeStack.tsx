import { SelectJob } from '@/apps'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { BossStack } from './boss/BossStack'
import { UserStack } from './user/UserStack'

export type StackHomeList = {
  SelectJob: undefined
  UserStack: undefined
  BossStack: undefined
}

const Stack = createStackNavigator<StackHomeList>()

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="SelectJob">
      <Stack.Screen
        name="SelectJob"
        component={SelectJob}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserStack"
        component={UserStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossStack"
        component={BossStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
