import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ReservationListApp, StoreInfoApp } from '@/apps/boss/store'
import { StoreDetailType } from '@/types/storeType'

type Props = { storeData: StoreDetailType }
const Tab = createBottomTabNavigator()

export function StoreTabScreen({ storeData }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="가게정보">
        {props => <StoreInfoApp storeData={storeData} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="예약주문" component={ReservationListApp} />
    </Tab.Navigator>
  )
}
