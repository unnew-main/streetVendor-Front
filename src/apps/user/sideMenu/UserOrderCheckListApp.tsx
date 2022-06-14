import { orderApi } from '@/apis/orderApi'
import { UserOrderCheckListScreen } from '@/screens/user/sideMenu/UserOrderCheckListScreen'
import { UserOrderCheckListType } from '@/types/order.type'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

export const UserOrderCheckListApp = () => {
  const navigator = React.useContext(NavigationContext)
  const [orderList, setOrderList] = useState<UserOrderCheckListType[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data: data },
        } = await orderApi.userCheckOrder()
        console.log(data)
        setOrderList(data)
      } catch (error) {
        console.log('OrderListApp Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [navigator])

  return <UserOrderCheckListScreen orderList={orderList} />
}
