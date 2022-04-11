import { GoogleLogoutbutton } from '@/components'
import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'

export function SplashScreen({ nowState }: { nowState: string }) {
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

      <Text>Loading....</Text>
      <Text>{nowState}</Text>
      <ActivityIndicator size="large" color="#666666" />
      <GoogleLogoutbutton />
    </View>
  )
}
