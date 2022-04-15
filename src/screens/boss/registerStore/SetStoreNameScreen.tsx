import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

export const SetStoreNameScreen = ({ handleRouter }) => {
  return (
    <RegisterStoreLayout title="가게이름,설명" handleRouter={handleRouter}>
      <View>
        <Text>SetStoreNameScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
