import { UserOrderScreen } from '@/screens/user/order'
import { StoreDetailType, StoreMenuType } from '@/types/store.type'
import { RouteProp } from '@react-navigation/native'
import React from 'react'

type Props = {
  route: RouteProp<{
    params: {
      storeName: StoreDetailType['storeName']
      menuList: StoreMenuType[]
    }
  }>
}

export const UserOrderApp = ({ route: { params } }: Props) => {
  return <UserOrderScreen {...params} />
}
