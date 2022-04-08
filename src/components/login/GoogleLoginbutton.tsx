import React, { useEffect } from 'react'

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin'
import { NavigationContext } from '@react-navigation/native'
import { signIn } from '@/apis/Login'

export const GoogleLoginbutton = () => {
  const navigation = React.useContext(NavigationContext)

  const handleLogin = async () => {
    try {
      await signIn()
      console.log('Login...')

      navigation?.reset({ routes: [{ name: 'Home' }] })
    } catch (e) {
      console.log('LoginButton Error', e)
    }
  }
  useEffect(() => {
    //clientId 숨겨야함!!!
    GoogleSignin.configure({
      webClientId:
        '328856282923-prkof1vnb5haq7psquq9inkq4opb8iah.apps.googleusercontent.com',
      androidClientId:
        '328856282923-r382lh7ngu84o47gmqc6rcref7gfj5m8.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: false,
      accountName: '',
      iosClientId:
        '328856282923-0pbrrjup6i9bm3lqbc87fe2up53hpdba.apps.googleusercontent.com',
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
