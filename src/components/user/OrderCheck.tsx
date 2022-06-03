import { BasketType } from '@/types/order.type'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Animated, Image, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type Props = {
  basketList: BasketType[]
  handleOrder: () => void
  handleRemoveBasket: (id: number) => void
  handleMinerBasket: (id: number) => void
}
export const OrderCheck = ({
  basketList,
  handleOrder,
  handleRemoveBasket,
  handleMinerBasket,
}: Props) => {
  const [checkOrder, setCheckOrder] = useState(false)
  const animate = useRef(new Animated.Value(0)).current

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
        outputRange: ['0%', '90%'],
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
  return (
    <>
      <OrderCheckButtonWrapper
        checkOrder={checkOrder}
        onPress={handleShowDetail}
      >
        <Text>{!checkOrder ? '주문 확인하기 ' : '돌아가기'} </Text>
      </OrderCheckButtonWrapper>
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
              <RemoveMenuButton onPress={() => handleRemoveBasket(item.menuId)}>
                <Text>삭제</Text>
              </RemoveMenuButton>
              <RemoveMenuButton
                onPress={() =>
                  item.menuTotal > 1
                    ? handleMinerBasket(item.menuId)
                    : handleRemoveBasket(item.menuId)
                }
              >
                <Text>카운트다운</Text>
              </RemoveMenuButton>
            </ItemContainer>
          )}
          keyExtractor={item => String(item.menuId)}
        />
        <ButtonWrapper style={{ height: ButtonHeight }}>
          <OrderButton onPress={handleOrder}>
            <Text>주문하기</Text>
          </OrderButton>
        </ButtonWrapper>
      </OrderWrapper>
    </>
  )
}

const OrderCheckButtonWrapper = styled.TouchableOpacity<{
  checkOrder: boolean
}>`
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
