import { SetMenuScreen } from '@/screens/boss/registerStore'
import {
  MenuType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
  menu: MenuType[]
  handleMenu: (data: MenuType) => void
}

export const SetMenuApp = ({ navigation: { navigate } }: Props) => {
  const handleNextRouter = () => {
    navigate('SetPicture')
  }

  return <SetMenuScreen handleNextRouter={handleNextRouter} />
}
