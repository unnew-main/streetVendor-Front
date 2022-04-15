import { SetStoreNameScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetStoreName'>
}

export const SetStoreNameApp = ({ navigation: { navigate } }: Props) => {
  const handleRouter = () => {
    navigate('SetLocation')
  }
  return <SetStoreNameScreen handleRouter={handleRouter} />
}
