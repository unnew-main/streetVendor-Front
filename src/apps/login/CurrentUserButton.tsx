import React from 'react'

import { getCurrentUser } from '@/apis/Login'
import { Text, TouchableOpacity } from 'react-native'

export const CurrentUserButton = () => {
  return (
    <TouchableOpacity onPress={getCurrentUser}>
      <Text>유저정보가져오기</Text>
    </TouchableOpacity>
  )
}
