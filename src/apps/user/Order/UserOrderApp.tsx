import { orderApi } from '@/apis/orderApi'
import { UserOrderScreen } from '@/screens/user/order'
import { BasketType } from '@/types/order.type'
import { LocationType, StoreMenuType, StorePinType } from '@/types/store.type'
import { goAlert } from '@/utils/goAlert'
import Geolocation from '@react-native-community/geolocation'
import { RouteProp } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'

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
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
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

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
        })
      },
      error => {
        goAlert('Location Geolocation Error', error.message)
        console.log('Location Geolocation Error', error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    )
  }, [])

  const handleOrder = useCallback(async () => {
    try {
      if (basketList.length === 0) {
        goAlert('메뉴를 선택해주세요!')
        throw Error('No Menu')
      }
      await orderApi.userOrder({
        distance: 2,
        location: {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        },
        menus: basketList.map(item => {
          const obj = { count: 0, menuId: 0 }
          obj.count = item.menuTotal
          obj.menuId = item.menuId
          return obj
        }),
        storeId: params.storeId,
      })
      goAlert('주문이 완료되었습니다!')
    } catch (e) {
      console.log('User handleOrder Error: ', e)
    }
  }, [basketList, params.storeId, userLocation])

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
