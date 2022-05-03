import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/useLoading.hook'

import { SplashScreen } from '@/screens'
import { memberApi } from '@/apis'
import { goAlert } from '@/utils/goAlert'
import { NavigationContext } from '@react-navigation/native'

export const BossSplashApp = () => {
  const navigator = React.useContext(NavigationContext)

  const { onLoading, offLoading } = useLoading()
  const [nowState, setNowState] = useState<string>('사장님 정보 확인중...')

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const { data } = await memberApi.getBossInfo()
        console.log('getBossInfo: ', data)
        setNowState('사장님 정보확인 완료')
        offLoading()
        navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
      } catch (e) {
        console.log('BossMainApp Error: ', e)
        setNowState('사장님 정보확인 불가')

        offLoading()
        goAlert(String(e))
        navigator?.reset({ routes: [{ name: 'RegisterBoss' }] })
      }
    })()
  }, [navigator, offLoading, onLoading])

  return <SplashScreen nowState={nowState} />
}
