import { SetCategoryScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCategory'>
}

export const SetCategoryApp = ({ navigation: { navigate } }: Props) => {
  const handleRouter = () => {
    navigate('SetStoreName')
  }
  return <SetCategoryScreen handleRouter={handleRouter} />
}
