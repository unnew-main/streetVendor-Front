import { storeApi } from '@/apis'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  storeId: number
}
export const CloseStoreButton = ({ storeId }: Props) => {
  const handleClose = useCallback(async () => {
    try {
      await storeApi.changeStateStore(storeId, 'CLOSED')
      console.log('가게닫기완료')
    } catch (e) {
      console.log('CLOSED Store Error:', e)
    }
  }, [storeId])

  return (
    <TouchableOpacity onPress={handleClose}>
      <Text>가게 마감하기</Text>
    </TouchableOpacity>
  )
}
