import { UserMainApp } from '@/apps/user'
import { UserSettingApp } from '@/apps/user/sideMenu/UserSettingApp'

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

export type UserStackList = {
  UserMain: undefined
  UserSetting: undefined
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
    </Stack.Navigator>
  )
}
