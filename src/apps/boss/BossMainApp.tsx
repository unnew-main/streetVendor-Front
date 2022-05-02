import React, { useEffect, useState } from 'react'

import { BossMainScreen } from '@/screens/boss'
// import { NavigationContext } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { StoreType } from '@/types/storeType'
import { goAlert } from '@/utils/goAlert'

export const BossMainApp = () => {
  // const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const [list, setList] = useState<StoreType[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const {
          data: { data },
        } = await storeApi.getStore()
        setList(data)
        offLoading()
      } catch (e) {
        console.log('BossMainApp Error: ', e)

        offLoading()
        goAlert(String(e))
      }
    })()
  }, [offLoading, onLoading])

  return <BossMainScreen list={list} />
}
