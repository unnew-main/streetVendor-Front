import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleRouter: () => void
}

export const SetStoreNameScreen = ({ handleRouter }: Props) => {
  return (
    <RegisterStoreLayout title="가게이름,설명" handleRouter={handleRouter}>
      <View>
        <Text>SetStoreNameScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
