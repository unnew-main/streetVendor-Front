import { RegisterStorePropsType } from '@/types/store.type'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  storeData: RegisterStorePropsType
  handleNextRouter: () => void
  handlePrevRouter: () => void
}

export const OuttroScrreen = ({
  storeData,
  handleNextRouter,
  handlePrevRouter,
}: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>{storeData.name}</Text>
      <Text>{storeData.storeDescription}</Text>
      <Text>{storeData.locationDescription}</Text>
      <Text>{storeData.paymentMethods}</Text>
      <TouchableOpacity onPress={handlePrevRouter}>
        <Text>이전</Text>
      </TouchableOpacity>
      <Text>Outtro</Text>
      <TouchableOpacity onPress={handleNextRouter}>
        <Text>운영하러 가기</Text>
      </TouchableOpacity>
    </View>
  )
}
