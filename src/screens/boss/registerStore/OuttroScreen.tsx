import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  handleNextRouter: () => void
  handlePrevRouter: () => void
}

export const OuttroScrreen = ({
  handleNextRouter,
  handlePrevRouter,
}: Props) => {
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
        <Text>이전</Text>
      </TouchableOpacity>
      <Text>Outtro</Text>
      <TouchableOpacity onPress={handleNextRouter}>
        <Text>운영하러 가기</Text>
      </TouchableOpacity>
    </View>
  )
}
