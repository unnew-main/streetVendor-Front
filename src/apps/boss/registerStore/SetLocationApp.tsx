import { SetLocationScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
}

export const SetLocationApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('SetOpenTime')
  }

  return <SetLocationScreen handleNextRouter={handleNextRouter} />
}
