import React, { useEffect, useState } from 'react'
import { SplashScreen } from '@/screens'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '@/App'
import { NavigationContext } from '@react-navigation/native'
import { sessionHelper } from '@/util/sessionHelper'
import { memberApi } from '@/apis'
type SplashAppType = {
  navigation: StackNavigationProp<StackParamList, 'Splash'>
}
export function SplashApp({ navigation }: SplashAppType) {
  const navigator = React.useContext(NavigationContext)
  const [nowState, setNowState] = useState<string>('구글 로그인 확인중...')
  useEffect(() => {
    ;(async () => {
      try {
        setNowState('세션 가져오는 중...')

        const session = await sessionHelper.getSession()
        if (session) {
          console.log('스토리지에 세션 정보확인완료')
          setNowState('유저정보 가져오는 중...')
          const {
            data: { data: data },
          } = await memberApi.getInfo()

          console.log(data)
          if (data) {
            navigator?.reset({ routes: [{ name: 'Home' }] })
          } else {
            navigator?.reset({ routes: [{ name: 'Login' }] })
          }
        } else {
          console.log('스토리지에 세션 정보 없음')
          setNowState('구글 로그인 확인중...')

          navigator?.reset({ routes: [{ name: 'Login' }] })
        }
      } catch (e) {
        console.log('Splash Error: ', e)
        setNowState('에러가 발생했습니다.')
      }
    })()
  }, [navigation, navigator])
  return <SplashScreen nowState={nowState} />
}
