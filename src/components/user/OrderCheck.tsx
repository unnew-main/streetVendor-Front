import React, { useRef, useState } from 'react'
import { Animated, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const OrderCheck = () => {
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
        <ScrollView>
          <Text>hello</Text>
        </ScrollView>
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
  width: 100%;
  background-color: white;
`
