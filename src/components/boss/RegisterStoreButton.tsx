import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const RegisterStoreButton = () => {
  const navigator = React.useContext(NavigationContext)

  const handleOnPress = () => {
    navigator?.reset({ routes: [{ name: 'RegisterStore' }] })
  }
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text style={{ color: 'blue' }}>가게추가하기</Text>
    </TouchableOpacity>
  )
}
