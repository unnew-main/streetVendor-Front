import React from 'react'
import { View } from 'react-native'
import { GoogleLoginbutton, GoogleLogoutbutton } from '@/components/auth'

export function Login() {
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
