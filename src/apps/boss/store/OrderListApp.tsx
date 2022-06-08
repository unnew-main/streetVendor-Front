import { orderApi } from '@/apis/orderApi'
import { OrderListScreen } from '@/screens/boss/store'
import { BossOrderListType } from '@/types/order.type'
import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/useLoading.hook'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'

type Props = {
  storeId: number
}
export const OrderListApp = ({ storeId }: Props) => {
  const [orderList, setOrderList] = useState<BossOrderListType[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const { onLoading, offLoading } = useLoading()
  const navigator = React.useContext(NavigationContext)
  useEffect(() => {
    ;(async () => {
      onLoading()
      try {
        const {
          data: { data: data },
        } = await orderApi.bossCheckOrder(storeId)
        console.log(data)
        setOrderList(data)
      } catch (error) {
        console.log('OrderListApp Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
      offLoading()
    })()
  }, [navigator, offLoading, onLoading, storeId, refreshing])
  return (
    <OrderListScreen
      orderList={orderList}
      storeId={storeId}
      setRefreshing={setRefreshing}
    />
  )
}
