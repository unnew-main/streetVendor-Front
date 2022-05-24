import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  handleClosed: (e?: boolean) => void
}
export const SideMenu = ({ handleClosed }: Props) => {
  return (
    <SafeContainer>
      <Container>
        <Text>여기에 무엇을 넣을까</Text>
        <Text>유저명</Text>
        <Text>???</Text>
        <Text>설정</Text>
        <MenuClosedButton onPress={() => handleClosed(false)}>
          <Text>닫아라</Text>
        </MenuClosedButton>
      </Container>
    </SafeContainer>
  )
}

const SafeContainer = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.View`
  position: relative;
  width: 90%;
  height: 100%;
  margin-top: 40px;
`
const MenuClosedButton = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  right: 0;
`
