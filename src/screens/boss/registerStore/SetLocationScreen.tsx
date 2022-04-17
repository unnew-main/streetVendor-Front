import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
  location: string
  handleLocation: (data: string) => void
}

export const SetLocationScreen = ({
  handleNextRouter,
  location,
  handleLocation,
}: Props) => {
  return (
    <RegisterStoreLayout title="장소" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetLocationScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
