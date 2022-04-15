import React, { useEffect, useState } from 'react'
import { SplashScreen } from '@/screens'
import { NavigationContext } from '@react-navigation/native'
import { storeApi } from '@/apis'

export const BossSplashApp = () => {
  const navigator = React.useContext(NavigationContext)

  const [nowState, setNowState] = useState<string>('가게 정보 확인중...')

  useEffect(() => {
    ;(async () => {
      const {
        data: { data },
      } = await storeApi.getStore()

      console.log('storedata', data, data.length)

      if (!data.length) {
        console.log('가게가 없습니다.')

        navigator?.reset({ routes: [{ name: 'RegisterStore' }] })
      } else {
        console.log('가게가 있습니다.')
        navigator?.reset({ routes: [{ name: 'BossMain' }] })
      }
    })()
  }, [navigator])

  return <SplashScreen nowState={nowState} />
}
