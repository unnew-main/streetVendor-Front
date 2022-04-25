import { OuttroScrreen } from '@/screens/boss/registerStore'
import { RegisterStorePropsType } from '@/screens/boss/RegisterStoreScreen.type'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'

type OuttroAppProps = {
  data: RegisterStorePropsType
}
export const OuttroApp = ({ data }: OuttroAppProps) => {
  const navigator = React.useContext(NavigationContext)
  console.log(data)

  const handleNextRouter = useCallback(async () => {
    try {
      //여기에 가게정보 저장하는 APi 호출
      navigator?.reset({ routes: [{ name: 'BossMain' }] })
    } catch (e) {
      console.log('OuttroApp Error: ', e)
    }
  }, [navigator])

  const handlePrevRouter = useCallback(() => {
    navigator?.goBack()
  }, [navigator])

  return (
    <OuttroScrreen
      handleNextRouter={handleNextRouter}
      handlePrevRouter={handlePrevRouter}
    />
  )
}
