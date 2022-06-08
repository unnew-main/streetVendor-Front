import React, { useCallback, useEffect, useState } from 'react'

import { BossStoreListScreen } from '@/screens/boss'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { StoreListType } from '@/types/store.type'
import { NavigationContext } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'

export const BossStoreListApp = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const [list, setList] = useState<StoreListType[]>([])

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
  }, [navigator, offLoading, onLoading])

  const handleStore = useCallback((id: number, isOpen: boolean) => {
    setList(prevList =>
      prevList.map((prevItem: StoreListType) => {
        if (prevItem.storeId === id) {
          return {
            locationDescription: prevItem.locationDescription,
            storeName: prevItem.storeName,
            storeId: prevItem.storeId,
            salesStatus: isOpen ? 'OPEN' : 'CLOSED',
          }
        }
        return prevItem
      }),
    )
  }, [])

  const handleClickStore = useCallback(
    (id: number) => {
      navigator?.navigate('BossStoreTab', {
        storeId: id,
        handleStore,
      })
    },
    [handleStore, navigator],
  )

  return <BossStoreListScreen list={list} handleClickStore={handleClickStore} />
}
