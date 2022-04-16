import { SetPictureScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetPicture'>
}

export const SetPictureApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('Outtro')
  }

  return <SetPictureScreen handleNextRouter={handleNextRouter} />
}
