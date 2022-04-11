import React, { useEffect, useState } from 'react'
import { SplashScreen } from '@/screens'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@/App'
import { tokenHelper } from '@/util/tokenHelper'
import { memberApi } from '@/apis'
import { NavigationContext } from '@react-navigation/native'
type SplashAppType = {
  navigation: StackNavigationProp<StackParamList, 'Splash'>
}
export function SplashApp({ navigation }: SplashAppType) {
  const navigator = React.useContext(NavigationContext)
  const [nowState, setNowState] = useState<string>('구글 로그인 확인중...')
  useEffect(() => {
    ;(async () => {
      try {
        setNowState('구글 로그인 확인중...')

        const idToken = await tokenHelper.getIdToken()

        if (idToken === 'null') {
          navigator?.reset({ routes: [{ name: 'Login' }] })
        } else {
          setNowState('세션 가져오는 중...')
          const {
            data: { data },
          } = await memberApi.login()
          console.log('session: ', data.sessionId)
          data.sessionId
            ? navigator?.reset({ routes: [{ name: 'Home' }] })
            : navigator?.reset({ routes: [{ name: 'RegisterMember' }] })
        }
      } catch (e) {
        console.log('Splash Error: ', e)
        setNowState('에러가 발생했습니다.')
        // navigator?.reset({ routes: [{ name: 'Splash' }] })
      }
    })()
  }, [navigation, navigator])
  return <SplashScreen nowState={nowState} />
}
