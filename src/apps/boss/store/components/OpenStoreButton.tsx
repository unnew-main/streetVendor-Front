import { storeApi } from '@/apis'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  storeId: number
}

export const OpenStoreButton = ({ storeId }: Props) => {
  const handleOpen = useCallback(async () => {
    try {
      await storeApi.changeStateStore(storeId, 'OPEN')
      console.log('가게오픈완료')
    } catch (e) {
      console.log('Open Store Error:', e)
    }
  }, [storeId])

  return (
    <TouchableOpacity onPress={handleOpen}>
      <Text>가게 오픈하기</Text>
    </TouchableOpacity>
  )
}
