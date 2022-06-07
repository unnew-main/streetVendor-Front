import { orderApi } from '@/apis/orderApi'
import { OrderListScreen } from '@/screens/boss/store'
import { BossOrderListType } from '@/types/order.type'
import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/useLoading.hook'
import { ReportError } from '@/utils/reportError'

type Props = {
  storeId: number
}
export const OrderListApp = ({ storeId }: Props) => {
  const [orderList, setOrderList] = useState<BossOrderListType[]>([])
  const { onLoading, offLoading } = useLoading()

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
          ReportError(error.message)
        }
      }
      offLoading()
    })()
  }, [offLoading, onLoading, storeId])
  return <OrderListScreen orderList={orderList} />
}
