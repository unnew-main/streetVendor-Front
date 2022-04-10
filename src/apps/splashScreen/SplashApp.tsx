import React, { useEffect, useState } from 'react'
import { SplashScreen } from '@/screens'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@/App'
import { tokenHelper } from '@/util/tokenHelper'
import { memberApi } from '@/apis'
type SplashAppType = {
  navigation: StackNavigationProp<StackParamList, 'Splash'>
}
export function SplashApp({ navigation }: SplashAppType) {
  const [nowState, setNowState] = useState<string>('구글 로그인 확인중...')
  useEffect(() => {
    ;(async () => {
      try {
        const idToken = await tokenHelper.getIdToken()
        idToken === 'null' && navigation.replace('Login')
        console.log(idToken)
        setNowState('세션 가져오는 중...')
        // const session = await memberApi.login()
        const session = null
        console.log('session', session)
        session
          ? navigation.replace('Home')
          : navigation.replace('RegisterMember')
      } catch (e) {
        console.log('Splash Error: ', e)
      }
    })()
  }, [navigation])
  return <SplashScreen nowState={nowState} />
}
