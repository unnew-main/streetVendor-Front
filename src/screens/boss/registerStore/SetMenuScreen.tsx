import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

export const SetMenuScreen = ({ handleRouter }) => {
  return (
    <RegisterStoreLayout title="메뉴" handleRouter={handleRouter}>
      <View>
        <Text>SetMenuScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
