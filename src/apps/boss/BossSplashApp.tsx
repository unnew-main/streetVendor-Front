import React, { useEffect, useState } from 'react'
import { SplashScreen } from '@/screens'
import { NavigationContext } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
export const BossSplashApp = () => {
  const navigator = React.useContext(NavigationContext)

  const [nowState, setNowState] = useState<string>('가게 정보 확인중...')
  const { onLoading, offLoading } = useLoading()
  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const {
          data: { data },
        } = await storeApi.getStore()
        console.log('storedata', data, data.length)

        if (!data.length) {
          console.log('가게가 없습니다.')
          setNowState('가게 생성 준비중')

          navigator?.reset({ routes: [{ name: 'RegisterStore' }] })
          offLoading()
        } else {
          console.log('가게가 있습니다.')
          setNowState('가게 영업 준비중')

          navigator?.reset({ routes: [{ name: 'BossMain' }] })
          offLoading()
        }
      } catch (e) {
        console.log(e)
        setNowState('에러가 발생했습니다.')
      }
    })()
  }, [navigator, offLoading, onLoading])

  return <SplashScreen nowState={nowState} />
}
