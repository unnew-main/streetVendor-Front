import { SetOpenTimeScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetOpenTime'>
}

export const SetOpenTimeApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('SetMenu')
  }

  return <SetOpenTimeScreen handleNextRouter={handleNextRouter} />
}
