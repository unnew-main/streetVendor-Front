import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const ReservationButton = () => {
  return (
    <ButtonWrapper onPress={() => {}}>
      <Text>예약</Text>
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
