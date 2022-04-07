import React from 'react'
import {
  GoogleLoginbutton,
  GoogleLogoutbutton,
  CurrentUserButton,
} from '@/components'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

export function LoginScreen() {
  const data = useSelector(state => state)

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
      <CurrentUserButton />
      <TouchableOpacity
        onPress={() => {
          console.log(data)
        }}
      >
        <Text>정보가져오기</Text>
      </TouchableOpacity>
    </View>
  )
}
