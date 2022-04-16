import { SetMenuScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
}

export const SetMenuApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('SetPicture')
  }

  return <SetMenuScreen handleNextRouter={handleNextRouter} />
}
