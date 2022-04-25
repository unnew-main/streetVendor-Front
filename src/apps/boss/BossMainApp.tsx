import React, { useEffect, useState } from 'react'

import { BossMainScreen } from '@/screens/boss'
// import { NavigationContext } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'

export const BossMainApp = () => {
  // const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const [list, setList] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const {
          data: { data },
        } = await storeApi.getStore()
        console.log('storedata', data, data.length)
        setList(data)
        offLoading()
      } catch (e) {
        console.log(e)
        offLoading()
      }
    })()
  }, [offLoading, onLoading])

  return <BossMainScreen list={list} />
}
