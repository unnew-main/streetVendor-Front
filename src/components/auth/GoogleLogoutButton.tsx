import React, { useCallback, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { sessionHelper } from '@/utils/sessionHelper'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { authApi } from '@/apis/authApi'
export const GoogleLogoutbutton = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()

  useEffect(() => GoogleSignin.configure({}), [])

  const handleLogout = useCallback(async () => {
    onLoading()
    goAlert('로그아웃 하시겠습니까?', '', true, async () => {
      try {
        await authApi.logout()
        await sessionHelper.setSession(null)
        await GoogleSignin.signOut()

        navigator?.reset({ routes: [{ name: 'Splash' }] })
        goAlert('로그아웃되었습니다.')
      } catch (error) {
        console.log('LogoutError', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
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
