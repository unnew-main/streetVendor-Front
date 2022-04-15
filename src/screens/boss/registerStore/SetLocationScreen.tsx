import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

export const SetLocationScreen = ({ handleRouter }) => {
  return (
    <RegisterStoreLayout title="장소" handleRouter={handleRouter}>
      <View>
        <Text>SetLocationScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
