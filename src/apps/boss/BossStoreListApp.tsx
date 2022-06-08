import React, { useCallback, useEffect, useState } from 'react'

import { BossStoreListScreen } from '@/screens/boss'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { StoreListType } from '@/types/store.type'
import { NavigationContext, useIsFocused } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'

export const BossStoreListApp = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const [list, setList] = useState<StoreListType[]>([])
  const isFocused = useIsFocused()

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const {
          data: { data },
        } = await storeApi.getListStore()
        console.log('store data List', data)
        setList(data)
        offLoading()
      } catch (error) {
        console.log('BossStoreListApp Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
        offLoading()
      }
    })()
  }, [navigator, offLoading, onLoading, isFocused])

  const handleClickStore = useCallback(
    (id: number) => {
      navigator?.navigate('BossStoreTab', {
        storeId: id,
      })
    },
    [navigator],
  )

  return <BossStoreListScreen list={list} handleClickStore={handleClickStore} />
}
