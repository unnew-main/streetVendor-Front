import React, { useEffect, useState } from 'react'
import { NavigationContext } from '@react-navigation/native'
import { sessionHelper } from '@/utils/sessionHelper'
import { memberApi } from '@/apis'
import { ReportError } from '@/utils/reportError'
import { SplashScreen } from '@/components/common/SplashScreen'

export function Splash() {
  const navigator = React.useContext(NavigationContext)
  const [nowState, setNowState] = useState<string>('구글 로그인 확인중...')
  useEffect(() => {
    ;(async () => {
      try {
        setNowState('세션 가져오는 중...')

        const session = await sessionHelper.getSession()
        console.log('현재 가지고 있는 세션', session)
        if (session) {
          console.log('스토리지에 세션 정보확인완료')
          setNowState('유저정보 가져오는 중...')
          const {
            data: { data: data },
          } = await memberApi.getInfo()

          if (data) {
            navigator?.reset({ routes: [{ name: 'HomeStack' }] })
          } else {
            navigator?.reset({ routes: [{ name: 'Login' }] })
          }
        } else {
          console.log('스토리지에 세션 정보 없음')
          setNowState('구글 로그인 확인중...')

          navigator?.reset({ routes: [{ name: 'Login' }] })
        }
      } catch (error) {
        setNowState('에러가 발생했습니다.')
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [navigator])
  return <SplashScreen nowState={nowState} />
}
