import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleRouter: () => void
}

export const SetPictureScreen = ({ handleRouter }: Props) => {
  return (
    <RegisterStoreLayout title="가게사진" handleRouter={handleRouter}>
      <View>
        <Text>SetPictureScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
