import { storeApi } from '@/apis'
import { OuttroScrreen } from '@/screens/boss/registerStore'
import { RegisterStorePropsType } from '@/types/storeType'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'

type OuttroAppProps = {
  data: RegisterStorePropsType
}
export const OuttroApp = ({ data }: OuttroAppProps) => {
  const navigator = React.useContext(NavigationContext)

  const handleNextRouter = useCallback(async () => {
    try {
      //여기에 가게정보 저장하는 APi 호출
      await storeApi.createStore(data)
      navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
    } catch (e) {
      console.log('OuttroApp Error: ', e)
    }
  }, [data, navigator])

  const handlePrevRouter = useCallback(() => {
    navigator?.goBack()
  }, [navigator])

  return (
    <OuttroScrreen
      handleNextRouter={handleNextRouter}
      handlePrevRouter={handlePrevRouter}
      storeData={data}
    />
  )
}
