import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'

type Props = {
  handleNextRouter: () => void
  data: { category: string; name: string; description: string }
  handle: {
    handleCategory: (data: string) => void
    handleName: (data: string) => void
    handleDescription: (data: string) => void
  }
}
export const SetCNDScreen = ({ handleNextRouter, data, handle }: Props) => {
  return (
    <RegisterStoreLayout title="카테고리" handleNextRouter={handleNextRouter}>
      <View>
        <Text>SetCNDScreen</Text>
        <Text>가게 카테고리:</Text>
        <TextInput
          onChangeText={handle.handleCategory}
          value={data.category}
          placeholder="가게 카테고리를 선택해주세요."
        />
        <Text>가게 이름: </Text>
        <TextInput
          onChangeText={handle.handleName}
          value={data.name}
          placeholder="가게이름을 입력해주세요."
        />
        <Text>가게 설명: </Text>
        <TextInput
          onChangeText={handle.handleDescription}
          value={data.description}
          placeholder="가게설명을 입력해주세요."
        />
      </View>
    </RegisterStoreLayout>
  )
}
