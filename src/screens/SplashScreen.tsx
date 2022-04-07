import React from 'react'
import { Image, Text, View } from 'react-native'

export function SplashScreen() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Image
        source={require('@/Assets/Images/TOM.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>길거리 노점</Text>
    </View>
  )
}
