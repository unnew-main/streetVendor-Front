import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ReservationListApp, StoreInfoApp } from '@/apps/boss/store'
import { StoreDetailType } from '@/types/storeType'

type Props = {
  storeData: StoreDetailType
  handleOpenStore: (id: number) => void
  handleClosedStore: (id: number) => void
}
const Tab = createBottomTabNavigator()

export function StoreTabScreen({
  storeData,
  handleOpenStore,
  handleClosedStore,
}: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="가게정보">
        {props => (
          <StoreInfoApp
            storeData={storeData}
            handleOpenStore={handleOpenStore}
            handleClosedStore={handleClosedStore}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="예약주문" component={ReservationListApp} />
    </Tab.Navigator>
  )
}
