import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const IntroScreen = ({ handleRouter }) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>Intro</Text>
      <TouchableOpacity onPress={handleRouter}>
        <Text>가게 생성 시작</Text>
      </TouchableOpacity>
    </View>
  )
}
