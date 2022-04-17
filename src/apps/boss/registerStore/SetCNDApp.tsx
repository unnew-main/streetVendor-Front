import { SetCNDScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
  data: { category: string; name: string; description: string }
  handle: {
    handleCategory: (data: string) => void
    handleName: (data: string) => void
    handleDescription: (data: string) => void
  }
}

export const SetCNDApp = ({
  navigation: { navigate },
  data,
  handle,
}: Props) => {
  console.log('category', data, handle)
  const handleNextRouter = () => {
    navigate('SetLocation')
  }

  return (
    <SetCNDScreen
      handleNextRouter={handleNextRouter}
      data={data}
      handle={handle}
    />
  )
}
