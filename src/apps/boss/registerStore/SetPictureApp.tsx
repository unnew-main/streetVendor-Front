import { SetPictureScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetPicture'>
}

export const SetPictureApp = ({ navigation: { navigate } }: Props) => {
  const handleRouter = () => {
    navigate('Outtro')
  }
  return <SetPictureScreen handleRouter={handleRouter} />
}
