import { UserOrderScreen } from '@/screens/user/order'
import { BasketType } from '@/types/order.type'
import { StoreMenuType, StorePinType } from '@/types/store.type'
import { RouteProp } from '@react-navigation/native'
import React, { useState } from 'react'

type Props = {
  route: RouteProp<{
    params: {
      storeName: StorePinType['storeName']
      menuList: StoreMenuType[]
      storeId: StorePinType['storeId']
    }
  }>
}

export const UserOrderApp = ({ route: { params } }: Props) => {
  const [basketList, setBasketList] = useState<BasketType[]>([])

  const handleAddBasket = ({
    menuId,
    menuCount,
    menuName,
    pictureUrl,
    menuPrice,
    menuTotal,
  }: BasketType) => {
    const basketTemp = [...basketList]
    let check = false
    basketTemp.forEach((item, index) => {
      if (item.menuId === menuId) {
        basketTemp[index].menuTotal++
        check = true
      }
    })
    if (check) {
      setBasketList(basketTemp)
    } else {
      setBasketList(prev =>
        prev.concat({
          menuId,
          menuName,
          menuCount,
          pictureUrl,
          menuPrice,
          menuTotal,
        }),
      )
    }
  }

  return (
    <UserOrderScreen
      {...params}
      basketList={basketList}
      setBasketList={setBasketList}
      handleAddBasket={handleAddBasket}
    />
  )
}
