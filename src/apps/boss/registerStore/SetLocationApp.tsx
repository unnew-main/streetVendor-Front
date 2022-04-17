import { SetLocationScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
  location: string
  handleLocation: (data: string) => void
}

export const SetLocationApp = ({
  navigation: { navigate },
  location,
  handleLocation,
}: Props) => {
  const handleNextRouter = () => {
    navigate('SetBusinessHours')
  }

  return (
    <SetLocationScreen
      handleNextRouter={handleNextRouter}
      location={location}
      handleLocation={handleLocation}
    />
  )
}
