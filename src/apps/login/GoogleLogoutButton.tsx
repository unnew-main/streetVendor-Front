import React from 'react'

import { signOut } from '@/apis/Login'
import { Text, TouchableOpacity } from 'react-native'

export const GoogleLogoutbutton = () => {
  return (
    <TouchableOpacity onPress={signOut}>
      <Text>로그아웃</Text>
    </TouchableOpacity>
  )
}
