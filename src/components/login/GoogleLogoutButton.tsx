import React from 'react'

import { signOut } from '@/apis/Login'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
export const GoogleLogoutbutton = () => {
  const navigation = React.useContext(NavigationContext)
  const handleLogout = async () => {
    try {
      await signOut()
      console.log('Logout...')

      navigation?.navigate('Splash')
    } catch (e) {
      console.log('LogoutError', e)
    }
  }
  return (
    <TouchableOpacity
      onPress={handleLogout}
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
