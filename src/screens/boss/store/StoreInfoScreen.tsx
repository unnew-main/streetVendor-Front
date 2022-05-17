import { ChangeUserButton } from '@/components'
import { CloseStoreButton, OpenStoreButton } from '@/components/boss/store'
import { StoreDetailType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  storeData: StoreDetailType
  handleBackList: () => void
  isOpen: 'CLOSED' | 'OPEN'
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>

  handleOpenStore: (id: number) => void
  handleClosedStore: (id: number) => void
}

export const StoreInfoScreen = ({
  storeData,
  handleBackList,
  isOpen,
  setIsOpen,
  handleOpenStore,
  handleClosedStore,
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
      <TouchableOpacity onPress={handleBackList}>
        <Text>리스트화면으로 가기</Text>
      </TouchableOpacity>
      <Text>가게 상세화면</Text>
      <Text>{storeData.storeName}</Text>
      <Text>{storeData.storeId}</Text>
      <Text>{storeData.category}</Text>
      <Text>{storeData.storeDescription}</Text>
      <ChangeUserButton />
      {isOpen === 'CLOSED' ? (
        <OpenStoreButton
          storeId={storeData.storeId}
          setIsOpen={setIsOpen}
          handleOpenStore={handleOpenStore}
        />
      ) : (
        <CloseStoreButton
          storeId={storeData.storeId}
          setIsOpen={setIsOpen}
          handleClosedStore={handleClosedStore}
        />
      )}
    </View>
  )
}
