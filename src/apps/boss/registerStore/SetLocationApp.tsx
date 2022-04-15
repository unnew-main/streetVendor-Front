import { SetLocationScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCategory'>
}

export const SetLocationApp = ({ navigation: { navigate } }: Props) => {
  const handleRouter = () => {
    navigate('SetOpenTime')
  }
  return <SetLocationScreen handleRouter={handleRouter} />
}
