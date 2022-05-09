import { RegisterStoreApp, BossStoreListApp, RegisterBossApp } from '@/apps'
import { BossSplashApp } from '@/apps/boss/BossSplashApp'
import { StoreTabApp } from '@/apps/boss/store'

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

export function BossStackScreen() {
  return (
    <Stack.Navigator initialRouteName="BossSplash">
      <Stack.Screen
        name="BossSplash"
        component={BossSplashApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterStore"
        component={RegisterStoreApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossStoreList"
        component={BossStoreListApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BossStoreTab"
        component={StoreTabApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterBoss"
        component={RegisterBossApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
