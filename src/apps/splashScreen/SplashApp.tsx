import React, { useEffect } from 'react'
import { SplashScreen } from '@/screens'
import { getIdToken } from '@/apis/Login'

export function SplashApp({ navigation }) {
  useEffect(() => {
    ;(async () => {
      try {
        setTimeout(() => {
          getIdToken().then(data => {
            console.log('SplashApp getIdToken: ', data)
            navigation.replace(data === 'null' ? 'Login' : 'Home')
          })
        }, 1000)
      } catch (e) {
        console.log('Splash Error: ', e)
      }
    })()
  }, [navigation])
  return <SplashScreen />
}
