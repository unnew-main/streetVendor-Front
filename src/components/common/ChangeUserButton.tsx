import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const ChangeUserButton = () => {
  const navigator = React.useContext(NavigationContext)

  const handlePressUser = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'UserStack' }] })
  }, [navigator])

  return (
    <ButtonWrapper onPress={handlePressUser}>
      <Text>손님 계정으로 전환</Text>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
`
