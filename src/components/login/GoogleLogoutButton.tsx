import React from 'react'

import { signOut } from '@/apis/Login'
import { Text, TouchableOpacity } from 'react-native'

export const GoogleLogoutbutton = () => {
  return (
    <TouchableOpacity
      onPress={signOut}
      style={{
        width: 192,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>로그아웃</Text>
    </TouchableOpacity>
  )
}
