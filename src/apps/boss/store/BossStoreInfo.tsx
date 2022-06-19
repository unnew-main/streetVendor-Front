import {
  CloseStoreButton,
  OpenStoreButton,
  RemoveStoreButton,
} from '@/components/boss/store'
import { StoreDetailType } from '@/types/store.type'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  storeData: StoreDetailType
}
export const BossStoreInfo = ({ storeData }: Props) => {
  const [isOpen, setIsOpen] = useState<'CLOSED' | 'OPEN'>(storeData.salesStatus)

  useEffect(() => {
    setIsOpen(storeData.salesStatus)
  }, [storeData.salesStatus])
  const navigator = React.useContext(NavigationContext)
  const handleBackList = () => {
    navigator?.navigate('BossStoreList')
  }

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TouchableOpacity onPress={handleBackList}>
        <Text>리스트화면으로 가기</Text>
      </TouchableOpacity>
      <Text>가게 상세화면</Text>
      <Text>{storeData.storeName}</Text>
      <Text>{storeData.storeId}</Text>
      <Text>{storeData.category}</Text>
      <Text>{storeData.storeDescription}</Text>
      {isOpen === 'CLOSED' ? (
        <OpenStoreButton storeId={storeData.storeId} setIsOpen={setIsOpen} />
      ) : (
        <CloseStoreButton storeId={storeData.storeId} setIsOpen={setIsOpen} />
      )}
      <RemoveStoreButton storeId={storeData.storeId} isOpen={isOpen} />
    </View>
  )
}
