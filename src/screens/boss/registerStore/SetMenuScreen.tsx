import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
}

export const SetMenuScreen = ({ handleNextRouter }: Props) => {
  return (
    <RegisterStoreLayout title="메뉴" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetMenuScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
