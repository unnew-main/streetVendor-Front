import { StoreDetailType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  storeInfo: StoreDetailType
}
export const PreviewDetailStore = ({ storeInfo }: Props) => {
  console.log(storeInfo)
  return (
    <View>
      <Text>디테일</Text>
    </View>
  )
}
