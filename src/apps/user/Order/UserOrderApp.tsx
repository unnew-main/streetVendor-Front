import { UserOrderScreen } from '@/screens/user/order'
import { BasketType } from '@/types/order.type'
import { StoreMenuType, StorePinType } from '@/types/store.type'
import { goAlert } from '@/utils/goAlert'
import { RouteProp } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'

type Props = {
  route: RouteProp<{
    params: {
      storeName: StorePinType['storeName']
      menuList: StoreMenuType[]
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
  const handleMinerBasket = useCallback(
    (id: number) => {
      const basketTemp = [...basketList]

      basketTemp.forEach((item, index) => {
        if (item.menuId === id) {
          basketTemp[index].menuTotal--
        }
      })
      setBasketList(basketTemp)
    },
    [basketList],
  )

  const handleRemoveBasket = useCallback((id: number) => {
    setBasketList(prev => prev.filter(data => data.menuId !== id))
  }, [])
  const handleOrder = useCallback(() => {
    goAlert('주문이 완료되었습니다!')
  }, [])
  return (
    <UserOrderScreen
      {...params}
      basketList={basketList}
      handleAddBasket={handleAddBasket}
      handleOrder={handleOrder}
      handleRemoveBasket={handleRemoveBasket}
      handleMinerBasket={handleMinerBasket}
    />
  )
}
