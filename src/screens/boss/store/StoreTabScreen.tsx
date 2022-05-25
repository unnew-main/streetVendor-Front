import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { OrderListApp, StoreInfoApp } from '@/apps/boss/store'
import { StoreDetailType } from '@/types/store.type'

type Props = {
  storeData: StoreDetailType
  handleStore: (id: number, isOpen: boolean) => void
}
const Tab = createBottomTabNavigator()

export function StoreTabScreen({ storeData, handleStore }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="가게정보">
        {props => (
          <StoreInfoApp
            storeData={storeData}
            handleStore={handleStore}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="주문주문" component={OrderListApp} />
    </Tab.Navigator>
  )
}
