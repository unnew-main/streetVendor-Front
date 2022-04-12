import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { tokenHelper } from '@/util/tokenHelper'
import { sessionHelper } from '@/util/sessionHelper'
export const GoogleLogoutbutton = () => {
  const navigation = React.useContext(NavigationContext)
  const handleLogout = async () => {
    try {
      await tokenHelper.setIdToken('null')
      await sessionHelper.setSession('null')
      console.log('Logout...')
      await GoogleSignin.signOut()

      navigation?.reset({ routes: [{ name: 'Splash' }] })
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
