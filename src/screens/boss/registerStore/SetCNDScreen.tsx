import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
}
export const SetCNDScreen = ({ handleNextRouter }: Props) => {
  return (
    <RegisterStoreLayout title="카테고리" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetCNDScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
