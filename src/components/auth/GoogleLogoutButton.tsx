import React, { useCallback, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { sessionHelper } from '@/utils/sessionHelper'
import { authApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
export const GoogleLogoutbutton = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()

  useEffect(() => GoogleSignin.configure({}), [])

  const handleLogout = useCallback(async () => {
    onLoading()
    goAlert('로그아웃 하시겠습니까?', '', async () => {
      try {
        await authApi.logout()
        await sessionHelper.setSession(null)
        await GoogleSignin.signOut()

        navigator?.reset({ routes: [{ name: 'Splash' }] })
      } catch (e) {
        console.log('LogoutError', e)
      }
    })
    offLoading()
  }, [navigator, offLoading, onLoading])
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
