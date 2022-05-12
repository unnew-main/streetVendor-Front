import React, { useCallback, useEffect, useState } from 'react'

import { BossStoreListScreen } from '@/screens/boss'
// import { NavigationContext } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { StoreListType } from '@/types/storeType'
import { goAlert } from '@/utils/goAlert'
import { NavigationContext } from '@react-navigation/native'

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
      } catch (e) {
        console.log('BossStoreListApp Error: ', e)

        offLoading()
        goAlert(String(e))
      }
    })()
  }, [offLoading, onLoading])

  const handleOpenStore = useCallback((id: number) => {
    setList(prevList =>
      prevList.map((prevItem: StoreListType) => {
        if (prevItem.storeId === id) {
          return {
            locationDescription: prevItem.locationDescription,
            storeName: prevItem.storeName,
            storeId: prevItem.storeId,
            salesStatus: 'OPEN',
          }
        }
        return prevItem
      }),
    )
  }, [])
  const handleClosedStore = useCallback((id: number) => {
    setList(prevList =>
      prevList.map((prevItem: StoreListType) => {
        if (prevItem.storeId === id) {
          return {
            locationDescription: prevItem.locationDescription,
            storeName: prevItem.storeName,
            storeId: prevItem.storeId,
            salesStatus: 'CLOSED',
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
        handleOpenStore,
        handleClosedStore,
      })
    },
    [handleClosedStore, handleOpenStore, navigator],
  )

  return <BossStoreListScreen list={list} handleClickStore={handleClickStore} />
}
