import { SetCNDScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
}

export const SetCNDApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('SetLocation')
  }

  return <SetCNDScreen handleNextRouter={handleNextRouter} />
}
