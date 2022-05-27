import { UserOrderScreen } from '@/screens/user/order'
import { StoreMenuType, StorePinType } from '@/types/store.type'
import { goAlert } from '@/utils/goAlert'
import { RouteProp } from '@react-navigation/native'
import React, { useState } from 'react'

type Props = {
  route: RouteProp<{
    params: {
      storeName: StorePinType['storeName']
      menuList: StoreMenuType[]
    }
  }>
}

export const UserOrderApp = ({ route: { params } }: Props) => {
  const [checkOrder, setCheckOrder] = useState(false)
  const handleAddBasket = (id: StoreMenuType['menuId']) => {
    console.log(id)
  }
  const handleOrder = () => {
    goAlert('주문이 완료되었습니다!')
  }
  return (
    <UserOrderScreen
      {...params}
      handleAddBasket={handleAddBasket}
      handleOrder={handleOrder}
      checkOrder={checkOrder}
      setCheckOrder={setCheckOrder}
    />
  )
}
