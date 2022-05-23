import { GoogleLoginbutton, GoogleLogoutbutton } from '@/components/auth'
import React from 'react'
import { View } from 'react-native'

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
      <GoogleLogoutbutton />
    </View>
  )
}
