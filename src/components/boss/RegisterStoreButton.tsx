import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const RegisterStoreButton = () => {
  const navigator = React.useContext(NavigationContext)

  const handleOnPress = () => {
    navigator?.reset({ routes: [{ name: 'RegisterStore' }] })
  }
  return (
    <ButtonWrapper onPress={handleOnPress}>
      <Text style={{ color: 'blue' }}>가게추가하기</Text>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
`
