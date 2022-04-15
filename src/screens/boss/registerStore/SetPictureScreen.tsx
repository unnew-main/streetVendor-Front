import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

export const SetPictureScreen = ({ handleRouter }) => {
  return (
    <RegisterStoreLayout title="가게사진" handleRouter={handleRouter}>
      <View>
        <Text>SetPictureScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
