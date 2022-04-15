import { IntroScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'Intro'>
}

export const IntroApp = ({ navigation: { navigate } }: Props) => {
  const handleRouter = () => {
    navigate('SetStoreName')
  }
  return <IntroScreen handleRouter={handleRouter} />
}
