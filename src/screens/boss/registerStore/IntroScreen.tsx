import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  handleNextRouter: () => void
  handlePrevRouter: () => void
}
export const IntroScreen = ({ handleNextRouter, handlePrevRouter }: Props) => {
  return (
    <Container style={{}}>
      <TouchableOpacity onPress={handlePrevRouter}>
        <Text>돌아가기</Text>
      </TouchableOpacity>
      <Text>Intro</Text>
      <TouchableOpacity onPress={handleNextRouter}>
        <Text>가게 생성 시작</Text>
      </TouchableOpacity>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
