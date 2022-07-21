import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/useLoading.hook'

import { SplashScreen } from '@/components/common/SplashScreen'
import { goAlert } from '@/utils/goAlert'
import { NavigationContext } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'
import { memberApi } from '@/apis/memberApi'

export const BossSplash = () => {
  const navigator = React.useContext(NavigationContext)

  const { onLoading, offLoading } = useLoading()
  const [nowState, setNowState] = useState<string>('사장님 정보 확인중...')

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const { data } = await memberApi.getBossInfo()
        setNowState('사장님 정보확인 완료')
        offLoading()
        navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
      } catch (error) {
        console.log('BossMainApp Error: ', error)
        setNowState('사장님 정보확인 불가')

        if (error instanceof Error) {
          if (error.message.lastIndexOf('404') !== -1) {
            goAlert(
              '사장님 계정이 없습니다.',
              '사장님 등록화면으로 이동하시겠습니까?',
              true,
              () => {
                navigator?.reset({ routes: [{ name: 'RegisterBoss' }] })
              },
              () => {
                navigator?.reset({ routes: [{ name: 'SelectJob' }] })
              },
            )
          } else {
            ReportError(error.message, navigator)
          }
        }
        offLoading()
      }
    })()
  }, [navigator, offLoading, onLoading])

  return <SplashScreen nowState={nowState} />
}
