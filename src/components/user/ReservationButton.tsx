import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  handleOrderClick: () => void
}

export const OrderButton = ({ handleOrderClick }: Props) => {
  return (
    <ButtonWrapper onPress={handleOrderClick}>
      <Text>주문</Text>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  border-radius: 9999px;
  padding: 5px;
  width: 60px;
  height: 60px;
`
