import {
  BossStoreList,
  RegisterBoss,
  RegisterStore,
  BossSplash,
} from '@/apps/boss'
import { BossStoreTab } from '@/apps/boss/store'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type StackBossList = {
  BossSplash: undefined
  RegisterStore: undefined
  BossStoreList: undefined
  RegisterBoss: undefined
  BossStoreTab: undefined
}

const Stack = createStackNavigator<StackBossList>()

export function BossStack() {
  return (
    <Stack.Navigator initialRouteName="BossSplash">
      <Stack.Screen
        name="BossSplash"
        component={BossSplash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterStore"
        component={RegisterStore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossStoreList"
        component={BossStoreList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossStoreTab"
        component={BossStoreTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterBoss"
        component={RegisterBoss}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
