import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ReservationListApp, StoreInfoApp } from '@/apps/boss/store'

type Props = {}
const Tab = createBottomTabNavigator()

export function StoreTabScreen({}: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StoreInfo" component={StoreInfoApp} />
      <Tab.Screen name="ReservationList" component={ReservationListApp} />
    </Tab.Navigator>
  )
}
