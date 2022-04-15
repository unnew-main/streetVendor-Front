import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

export const SetOpenTimeScreen = ({ handleRouter }) => {
  return (
    <RegisterStoreLayout title="오픈일" handleRouter={handleRouter}>
      <View>
        <Text>SetOpenTimeScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
