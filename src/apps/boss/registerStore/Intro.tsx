import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Intro = () => {
  const navigator = React.useContext(NavigationContext)
  const handleNextRouter = useCallback(() => {
    navigator?.navigate('SetCND')
  }, [navigator])

  const handlePrevRouter = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
  }, [navigator])
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
