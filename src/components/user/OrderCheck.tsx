import { BasketType } from '@/types/order.type'
import React, { useRef, useState } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type Props = {
  basketList: BasketType[]
  handleOrder: () => void
}
export const OrderCheck = ({ basketList, handleOrder }: Props) => {
  const [checkOrder, setCheckOrder] = useState(false)
  const Y = useRef(new Animated.Value(0)).current
  console.log('Y', checkOrder, Y)

  const handleShowDetail = () => {
    setCheckOrder(prev => !prev)
    checkOrder
      ? Animated.timing(Y, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start()
      : Animated.timing(Y, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start()
  }
  const ContainerHeight = Y.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '95%'],
  })
  return (
    <>
      <OrderButtonWrapper checkOrder={checkOrder} onPress={handleShowDetail}>
        <Text>{!checkOrder ? '주문 확인하기 ' : '돌아가기'} </Text>
      </OrderButtonWrapper>
      <OrderWrapper style={{ height: ContainerHeight }}>
        <FlatList
          data={basketList}
          renderItem={({ item }) => (
            <ItemContainer>
              <Image
                source={{ uri: item.pictureUrl }}
                style={{ width: 80, height: 80 }}
              />
              <Text>{item.menuName}</Text>
              <Text>{item.menuCount}개</Text>
              <Text>{item.menuPrice}원</Text>
              <Text>{item.menuTotal}개</Text>
            </ItemContainer>
          )}
          keyExtractor={(item, i) => String(i)}
        />
      </OrderWrapper>
    </>
  )
}

const OrderButtonWrapper = styled.TouchableOpacity<{ checkOrder: boolean }>`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: cyan;
`

const OrderWrapper = styled(Animated.View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
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
const AddButton = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
`
