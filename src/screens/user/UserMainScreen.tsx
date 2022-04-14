import { GoogleLogoutbutton, SignoutButton } from '@/components'
import React from 'react'
import { Text, View } from 'react-native'

export const UserMainScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>유저 메인스크린</Text>

      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}
