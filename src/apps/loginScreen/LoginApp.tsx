import React from 'react'
import { LoginScreen } from '@/screens'
import { signIn } from '@/apis/Login'

// type LoginAppType ={
//   navigation:
// }
export function LoginApp({ navigation }) {
  const handleLogin = async () => {
    try {
      await signIn()
      console.log('Login...')

      navigation.replace('Home')
    } catch (e) {
      console.log('LoginButton Error', e)
    }
  }
  return <LoginScreen navigation={navigation} handleLogin={handleLogin} />
}
