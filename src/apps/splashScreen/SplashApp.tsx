import React, { useEffect } from 'react'
import { SplashScreen } from '@/screens'
import { getIdToken } from '@/apis/Login'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@/App'

type SplashAppType = {
  navigation: StackNavigationProp<StackParamList, 'Splash'>
}
export function SplashApp({ navigation }: SplashAppType) {
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
