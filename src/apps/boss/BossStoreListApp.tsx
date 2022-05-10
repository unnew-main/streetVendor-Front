import React, { useEffect, useState } from 'react'

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

  const handleClickStore = (id: number) => {
    console.log(id)
    navigator?.reset({
      routes: [{ name: 'BossStoreTab', params: { storeId: id } }],
    })
  }
  return <BossStoreListScreen list={list} handleClickStore={handleClickStore} />
}
