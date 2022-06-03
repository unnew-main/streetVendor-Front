import { orderApi } from '@/apis/orderApi'
import { OrderListScreen } from '@/screens/boss/store'
import { BossOrderListType } from '@/types/order.type'
import React, { useEffect, useState } from 'react'

type Props = {
  storeId: number
}
export const OrderListApp = ({ storeId }: Props) => {
  const [orderList, setOrderList] = useState<BossOrderListType[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data: data },
        } = await orderApi.bossCheckOrder(storeId)
        console.log(data)
        setOrderList(data)
      } catch (e) {
        console.log('OrderListApp Error: ', e)
      }
    })()
  }, [storeId])
  return <OrderListScreen orderList={orderList} />
}
