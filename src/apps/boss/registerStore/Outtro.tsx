import { storeApi } from '@/apis/storeApi'
import { RegisterStorePropsType } from '@/types/store.type'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type OuttroAppProps = {
  data: RegisterStorePropsType
}
export const Outtro = ({ data }: OuttroAppProps) => {
  const { name, storeDescription, locationDescription, paymentMethods } = data
  const navigator = React.useContext(NavigationContext)

  const handleNextRouter = useCallback(async () => {
    try {
      //여기에 가게정보 저장하는 APi 호출
      await storeApi.createStore(data)
      navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
    } catch (error) {
      console.log('OuttroApp Error: ', error)
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      }
    }
  }, [data, navigator])

  const handlePrevRouter = useCallback(() => {
    navigator?.goBack()
  }, [navigator])

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>{name}</Text>
      <Text>{storeDescription}</Text>
      <Text>{locationDescription}</Text>
      <Text>{paymentMethods}</Text>
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
