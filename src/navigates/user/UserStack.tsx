import { UserMainApp } from '@/apps/user'
import { UserOrderApp } from '@/apps/user/order'
import { UserSettingApp, UserOrderCheckListApp } from '@/apps/user/sideMenu'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type UserStackList = {
  UserMain: undefined
  UserSetting: undefined
  UserOrderCheckList: undefined
  UserOrder: undefined
}

const Stack = createStackNavigator<UserStackList>()

export function UserStack() {
  return (
    <Stack.Navigator initialRouteName="UserMain">
      <Stack.Screen
        name="UserMain"
        component={UserMainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserSetting"
        component={UserSettingApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserOrderCheckList"
        component={UserOrderCheckListApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserOrder"
        component={UserOrderApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
