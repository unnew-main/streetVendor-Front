import { SetBusinessHoursScreen } from '@/screens/boss/registerStore'
import {
  BusinessHoursType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetBusinessHours'>
  businessHours: BusinessHoursType[]
  handleBusinessHours: (data: BusinessHoursType) => void
}

export const SetBusinessHoursApp = ({
  navigation: { navigate },
  businessHours,
  handleBusinessHours,
}: Props) => {
  const [day, setDay] = useState()
  const [endTime, setEndTime] = useState()
  const [startTime, setStartTime] = useState()

  const handleNextRouter = () => {
    navigate('SetMenu')
  }

  return (
    <SetBusinessHoursScreen
      handleNextRouter={handleNextRouter}
      businessHours={businessHours}
      handleBusinessHours={handleBusinessHours}
    />
  )
}
