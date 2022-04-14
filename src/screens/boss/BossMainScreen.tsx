import { GoogleLogoutbutton, SignoutButton } from '@/components'
import React from 'react'
import { Text, View } from 'react-native'

export const BossMainScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>보스 메인스크린</Text>

      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}
