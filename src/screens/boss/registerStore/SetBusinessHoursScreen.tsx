import React from 'react'
import { Text, View } from 'react-native'
import { BusinessHoursType } from '../RegisterStoreScreen.type'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
  businessHours: BusinessHoursType[]
  handleBusinessHours: (data: BusinessHoursType) => void
}

export const SetBusinessHoursScreen = ({
  handleNextRouter,
  businessHours,
  handleBusinessHours,
}: Props) => {
  return (
    <RegisterStoreLayout title="오픈일" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetBusinessHoursScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
