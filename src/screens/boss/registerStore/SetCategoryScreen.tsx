import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleRouter: () => void
}
export const SetCategoryScreen = ({ handleRouter }: Props) => {
  return (
    <RegisterStoreLayout title="카테고리" handleRouter={handleRouter}>
      <View>
        <Text>SetCategoryScreen</Text>
      </View>
    </RegisterStoreLayout>
  )
}
