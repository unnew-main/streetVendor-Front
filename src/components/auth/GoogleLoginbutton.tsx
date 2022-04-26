import React, { useCallback, useEffect } from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin'
import { NavigationContext } from '@react-navigation/native'
import { authApi } from '@/apis'
import { sessionHelper } from '@/utils/sessionHelper'
import { useLoading } from '@/hooks/useLoading.hook'

export const GoogleLoginbutton = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const handleLogin = useCallback(async () => {
    try {
      onLoading()

      await GoogleSignin.hasPlayServices()
      await GoogleSignin.signIn()
      const { accessToken } = await GoogleSignin.getTokens()

      const {
        data: { data },
      } = await authApi.login(accessToken)
      if (data.sessionId) {
        await sessionHelper.setSession(data.sessionId)
        navigator?.reset({ routes: [{ name: 'Home' }] })
        offLoading()
      } else {
        navigator?.reset({
          routes: [{ name: 'RegisterMember', params: { data, accessToken } }],
        })
        offLoading()
      }
    } catch (e) {
      offLoading()
      console.log('LoginButton Error', e)
    }
  }, [navigator, offLoading, onLoading])

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '233714446693-f5d3j4ndbtrfggv8hc9coq3nf0phk0f8.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      accountName: '',
    })
  }, [])
  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={handleLogin}
    />
  )
}
