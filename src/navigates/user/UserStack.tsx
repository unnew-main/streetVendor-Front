import { UserMain } from '@/apps/user'
import { UserOrder } from '@/apps/user/order'
import { UserSetting, UserOrderCheckList } from '@/apps/user/sideMenu'

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
        component={UserMain}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserSetting"
        component={UserSetting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserOrderCheckList"
        component={UserOrderCheckList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserOrder"
        component={UserOrder}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
