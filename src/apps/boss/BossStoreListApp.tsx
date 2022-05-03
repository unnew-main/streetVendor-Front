import React, { useEffect, useState } from 'react'

import { BossStoreListScreen } from '@/screens/boss'
// import { NavigationContext } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { StoreType } from '@/types/storeType'
import { goAlert } from '@/utils/goAlert'

export const BossStoreListApp = () => {
  const { onLoading, offLoading } = useLoading()
  const [list, setList] = useState<StoreType[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const {
          data: { data },
        } = await storeApi.getStore()
        console.log('store data', data)
        setList(data)
        offLoading()
      } catch (e) {
        console.log('BossMainApp Error: ', e)

        offLoading()
        goAlert(String(e))
      }
    })()
  }, [offLoading, onLoading])

  return <BossStoreListScreen list={list} />
}
