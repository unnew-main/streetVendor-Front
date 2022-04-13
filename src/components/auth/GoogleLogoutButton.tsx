import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { sessionHelper } from '@/util/sessionHelper'
import { authApi } from '@/apis'
export const GoogleLogoutbutton = () => {
  const navigator = React.useContext(NavigationContext)
  const handleLogout = async () => {
    try {
      await authApi.logout()
      await sessionHelper.setSession(null)
      await GoogleSignin.signOut()
      console.log('Logout...')

      navigator?.reset({ routes: [{ name: 'Splash' }] })
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
