import { orderApi } from '@/apis/orderApi'
import { BasketType } from '@/types/order.type'
import { LocationType } from '@/types/store.type'
import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import Geolocation from '@react-native-community/geolocation'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Dimensions, Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type Props = {
  basketList: BasketType[]
  storeId: number
  setBasketList: React.Dispatch<React.SetStateAction<BasketType[]>>
  handleAddBasket: (props: BasketType) => void
}
export const OrderCheck = ({
  basketList,
  setBasketList,
  storeId,
  handleAddBasket,
}: Props) => {
  const [checkOrder, setCheckOrder] = useState(false)
  const [totalPrice, setTotalPrice] = useState<any>(0)
  const animate = useRef(new Animated.Value(0)).current
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const navigator = React.useContext(NavigationContext)

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

  useEffect(() => {
    setTotalPrice(
      basketList.reduce(
        (pervPrice, nextPrice) =>
          pervPrice + nextPrice.menuPrice * nextPrice.menuTotal,
        0,
      ),
    )
  }, [basketList])

  const handleShowDetail = useCallback(() => {
    setCheckOrder(prev => !prev)
    checkOrder
      ? Animated.timing(animate, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start()
      : Animated.timing(animate, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start()
  }, [animate, checkOrder])

  const ContainerHeight = useMemo(
    () =>
      animate.interpolate({
        inputRange: [0, 1],
        outputRange: [60, Dimensions.get('window').height - 60],
      }),
    [animate],
  )
  const ButtonHeight = useMemo(
    () =>
      animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 60],
      }),
    [animate],
  )

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
    [basketList, setBasketList],
  )

  const handleRemoveBasket = useCallback(
    (id: number) => {
      setBasketList(prev => prev.filter(data => data.menuId !== id))
    },
    [setBasketList],
  )

  const handleOrder = useCallback(async () => {
    try {
      if (basketList.length === 0) {
        throw String('????????? ??????????????????!')
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
        storeId: storeId,
      })
      goAlert('????????? ?????????????????????!')
    } catch (error) {
      console.log('User handleOrder Error: ', error)
      if (error instanceof Error) {
        if (error.message.lastIndexOf('404') !== -1) {
          goAlert('[404] ????????? ????????????!')
        } else {
          ReportError(error.message, navigator)
        }
      } else {
        goAlert(String(error))
      }
    }
  }, [
    basketList,
    navigator,
    storeId,
    userLocation.latitude,
    userLocation.longitude,
  ])

  return (
    <OrderWrapper
      style={{
        height: ContainerHeight,
      }}
    >
      <OrderCheckButtonWrapper onPress={handleShowDetail}>
        <Text>{!checkOrder ? '?????? ???????????? ' : '????????????'} </Text>
      </OrderCheckButtonWrapper>

      <FlatList
        data={basketList}
        renderItem={({ item }) => (
          <ItemContainer>
            <Image
              source={{ uri: item.pictureUrl }}
              style={{ width: 80, height: 80 }}
            />
            <Text>{item.menuName}</Text>
            <Text>{item.menuCount}???</Text>
            <Text>{item.menuPrice}???</Text>
            <Text>{item.menuTotal}???</Text>
            <RemoveMenuButton onPress={() => handleRemoveBasket(item.menuId)}>
              <Text>??????</Text>
            </RemoveMenuButton>
            <RemoveMenuButton
              onPress={() =>
                item.menuTotal > 1
                  ? handleMinerBasket(item.menuId)
                  : goAlert('??????????????? 1??? ???????????????!')
              }
            >
              <Text>-</Text>
            </RemoveMenuButton>
            <RemoveMenuButton onPress={() => handleAddBasket(item)}>
              <Text>+</Text>
            </RemoveMenuButton>
          </ItemContainer>
        )}
        keyExtractor={item => String(item.menuId)}
      />

      <ButtonWrapper style={{ height: ButtonHeight }}>
        <View>
          <Text>{totalPrice}</Text>
        </View>
        <OrderButton onPress={handleOrder}>
          <Text>????????????</Text>
        </OrderButton>
      </ButtonWrapper>
    </OrderWrapper>
  )
}

const OrderWrapper = styled(Animated.View)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0px;
  background-color: gray;
`

const OrderCheckButtonWrapper = styled.TouchableOpacity`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: cyan;
`

const ItemContainer = styled.View`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-bottom-color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 100px;
`

const ButtonWrapper = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`
const OrderButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: green;
`

const RemoveMenuButton = styled.TouchableOpacity`
  padding: 4px;
  border: 1px solid black;
  background-color: white;
`
