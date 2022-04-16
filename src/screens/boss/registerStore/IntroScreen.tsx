import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  handleNextRouter: () => void
  handlePrevRouter: () => void
}
export const IntroScreen = ({ handleNextRouter, handlePrevRouter }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TouchableOpacity onPress={handlePrevRouter}>
        <Text>돌아가기</Text>
      </TouchableOpacity>
      <Text>Intro</Text>
      <TouchableOpacity onPress={handleNextRouter}>
        <Text>가게 생성 시작</Text>
      </TouchableOpacity>
    </View>
  )
}
