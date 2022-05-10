import { ChangeUserButton } from '@/components'
import { StoreDetailType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  storeData: any
}

export const StoreInfoScreen = ({ storeData }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {/* <Text>가게 상세화면</Text>
      <Text>{storeData.storeName}</Text>
      <Text>{storeData.category}</Text>
      <Text>{storeData.description}</Text> */}
      <ChangeUserButton />
    </View>
  )
}
