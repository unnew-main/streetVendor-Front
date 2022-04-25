import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { sessionHelper } from '@/util/sessionHelper'
import { memberApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'

export const SignoutButton = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const handleSignout = useCallback(async () => {
    try {
      onLoading()
      await memberApi.signOut()
      await sessionHelper.setSession(null)
      await GoogleSignin.signOut()

      navigator?.reset({ routes: [{ name: 'Splash' }] })
      offLoading()
    } catch (e) {
      offLoading()
      console.log('signOutError', e)
    }
  }, [navigator, offLoading, onLoading])
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
