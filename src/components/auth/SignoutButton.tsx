import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { sessionHelper } from '@/util/sessionHelper'
import { memberApi } from '@/apis'

export const SignoutButton = () => {
  const navigator = React.useContext(NavigationContext)

  const handleSignout = useCallback(async () => {
    try {
      await memberApi.signOut()
      await sessionHelper.setSession(null)
      await GoogleSignin.signOut()

      navigator?.reset({ routes: [{ name: 'Splash' }] })
    } catch (e) {
      console.log('signOutError', e)
    }
  }, [navigator])
  return (
    <TouchableOpacity
      onPress={handleSignout}
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
      <Text>회원탈퇴</Text>
    </TouchableOpacity>
  )
}
