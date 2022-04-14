import { GoogleLogoutbutton, SignoutButton } from '@/components'
import React from 'react'
import { Text, View } from 'react-native'

export const RegisterStoreScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>보스 가게등록페이지</Text>

      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}
