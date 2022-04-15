import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleRouter: () => void
}

export const SetLocationScreen = ({ handleRouter }: Props) => {
  return (
    <RegisterStoreLayout title="장소" handleRouter={handleRouter}>
      <View>
        <Text>SetLocationScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
