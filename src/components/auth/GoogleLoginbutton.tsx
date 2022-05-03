import React, { useCallback, useEffect } from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin'
import { NavigationContext } from '@react-navigation/native'
import { authApi } from '@/apis'
import { sessionHelper } from '@/utils/sessionHelper'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'

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
        navigator?.reset({ routes: [{ name: 'HomeStack' }] })
        offLoading()
      } else {
        navigator?.reset({
          routes: [{ name: 'RegisterMember', params: { data, accessToken } }],
        })
        offLoading()
      }
    } catch (e) {
      offLoading()
      goAlert(String(e))
      console.log('LoginButton Error', e)
    }
  }, [navigator, offLoading, onLoading])

  useEffect(() => {
    const FIREBASE_WEB_CLIENT_ID = __DEV__
      ? '233714446693-f5d3j4ndbtrfggv8hc9coq3nf0phk0f8.apps.googleusercontent.com'
      : '233714446693-vk2612khdagnk5vgv00oc1208ki89sm8.apps.googleusercontent.com'

    GoogleSignin.configure({
      webClientId: FIREBASE_WEB_CLIENT_ID,
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
