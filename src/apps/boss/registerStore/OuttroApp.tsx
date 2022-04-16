import { OuttroScrreen } from '@/screens/boss/registerStore'
import { RegisterStorePropsType } from '@/screens/boss/RegisterStoreScreen.type'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'

type OuttroAppProps = {
  data: RegisterStorePropsType
}
export const OuttroApp = ({ data }: OuttroAppProps) => {
  const navigator = React.useContext(NavigationContext)
  console.log(data)
  const handleNextRouter = async () => {
    try {
      //여기에 가게정보 저장하는 APi 호출
      navigator?.reset({ routes: [{ name: 'BossSplash' }] })
    } catch (e) {
      console.log('OuttroApp Error: ', e)
    }
  }
  const handlePrevRouter = () => {
    navigator?.goBack()
  }
  return (
    <OuttroScrreen
      handleNextRouter={handleNextRouter}
      handlePrevRouter={handlePrevRouter}
    />
  )
}
