import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleRouter: () => void
}

export const SetMenuScreen = ({ handleRouter }: Props) => {
  return (
    <RegisterStoreLayout title="메뉴" handleRouter={handleRouter}>
      <View>
        <Text>SetMenuScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
