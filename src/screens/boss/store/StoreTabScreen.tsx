import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { OrderListApp, StoreInfoApp } from '@/apps/boss/store'
import { StoreDetailType } from '@/types/store.type'

type Props = {
  storeData: StoreDetailType
}
const Tab = createBottomTabNavigator()

export function StoreTabScreen({ storeData }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="가게정보"
        options={{
          unmountOnBlur: true,
        }}
      >
        {props => <StoreInfoApp storeData={storeData} {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="주문주문"
        options={{
          unmountOnBlur: true,
        }}
      >
        {props => <OrderListApp storeId={storeData.storeId} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
