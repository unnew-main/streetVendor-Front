import React from 'react'
import { GoogleLoginbutton } from '@/components'
import { Text, TouchableOpacity, View } from 'react-native'

export function LoginScreen() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <GoogleLoginbutton />
    </View>
  )
}
