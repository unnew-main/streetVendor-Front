import React, { useEffect } from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin'
import { NavigationContext } from '@react-navigation/native'
import { authApi } from '@/apis'
import { sessionHelper } from '@/util/sessionHelper'

export const GoogleLoginbutton = () => {
  const navigator = React.useContext(NavigationContext)

  const handleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      await GoogleSignin.signIn()
      const { accessToken } = await GoogleSignin.getTokens()

      const {
        data: { data },
      } = await authApi.login(accessToken)
      if (data.sessionId) {
        await sessionHelper.setSession(data.sessionId)
        navigator?.reset({ routes: [{ name: 'Home' }] })
      } else {
        navigator?.reset({
          routes: [{ name: 'RegisterMember', params: { data, accessToken } }],
        })
      }

      console.log('Login...')
    } catch (e) {
      console.log('LoginButton Error', e)
    }
  }
  useEffect(() => {
    //clientId 숨겨야함!!!
    GoogleSignin.configure({
      // webClientId:
      webClientId:
        '233714446693-f5d3j4ndbtrfggv8hc9coq3nf0phk0f8.apps.googleusercontent.com',

      // '328856282923-prkof1vnb5haq7psquq9inkq4opb8iah.apps.googleusercontent.com',
      // androidClientId:
      // '328856282923-r382lh7ngu84o47gmqc6rcref7gfj5m8.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      accountName: '',

      // iosClientId:
      // '328856282923-0pbrrjup6i9bm3lqbc87fe2up53hpdba.apps.googleusercontent.com',
      // '233714446693-5mpu1a98cdjrlor8g3kke7os20klhqol.apps.googleusercontent.com',
    })
  }, [])
  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      // onPress={signIn}
      onPress={handleLogin}
    />
  )
}
