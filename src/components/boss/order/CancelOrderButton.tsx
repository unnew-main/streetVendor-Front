import { orderApi } from '@/apis/orderApi'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  storeId: number
  orderId: number
  setRefreshing: React.Dispatch<React.SetStateAction<boolean>>
}
export const CancelOrderButton = ({
  storeId,
  orderId,
  setRefreshing,
}: Props) => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const handleCancelOrder = async () => {
    onLoading()

    goAlert('주문을 거절하시겠습니까?', '', true, async () => {
      try {
        await orderApi.bossCancelOrder(storeId, orderId)
        goAlert('주문이 거절되었습니다.')
      } catch (error) {
        console.log('handleCancelOrder Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
      setRefreshing(prev => !prev)
    })
    offLoading()
  }
  return (
    <TouchableOpacity
      onPress={handleCancelOrder}
      style={{
        width: 192,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>주문 거절하기</Text>
    </TouchableOpacity>
  )
}
