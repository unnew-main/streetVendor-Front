import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  isEnabled: boolean
  toggleSwitch: React.Dispatch<React.SetStateAction<boolean>>
}
export const StateStoreToogle = ({ isEnabled, toggleSwitch }: Props) => {
  return (
    <ButtonWrapper
      onPress={() => toggleSwitch(prev => !prev)}
      isEnabled={isEnabled}
    >
      <Text>{isEnabled ? '모든 가게' : '영업중 가게'}</Text>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity<{ isEnabled: boolean }>`
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isEnabled }) => (isEnabled ? 'cyan' : 'gray')};
`
