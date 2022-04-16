import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
}

export const SetBusinessHoursScreen = ({ handleNextRouter }: Props) => {
  return (
    <RegisterStoreLayout title="오픈일" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetBusinessHoursScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
