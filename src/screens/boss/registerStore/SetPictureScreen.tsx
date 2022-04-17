import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
  pictureUrl: string
  handlePictureUrl: (data: string) => void
}

export const SetPictureScreen = ({ handleNextRouter }: Props) => {
  return (
    <RegisterStoreLayout title="가게사진" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetPictureScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
