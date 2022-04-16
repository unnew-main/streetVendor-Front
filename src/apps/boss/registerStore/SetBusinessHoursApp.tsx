import { SetBusinessHoursScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { BusinessHoursType } from '../RegisterStoreApp'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetBusinessHours'>
  businessHours: BusinessHoursType[]
  handleBusinessHours: (data: BusinessHoursType) => void
}

export const SetBusinessHoursApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('SetMenu')
  }

  return <SetBusinessHoursScreen handleNextRouter={handleNextRouter} />
}
