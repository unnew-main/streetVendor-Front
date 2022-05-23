import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  handleClick: (data?: boolean) => void
}
export const SideMoreButton = ({ handleClick }: Props) => {
  return (
    <Container onPress={() => handleClick()}>
      <Text>메뉴</Text>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  background-color: white;
`
