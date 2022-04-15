import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  handleRouter: () => void
}

export const OuttroScrreen = ({ handleRouter }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>Outtro</Text>
      <TouchableOpacity onPress={handleRouter}>
        <Text>운영하러 가기</Text>
      </TouchableOpacity>
    </View>
  )
}
