import { orderApi } from '@/apis/orderApi'
import { BossOrderListType } from '@/types/order.type'
import React, { useEffect, useState } from 'react'
import { useLoading } from '@/hooks/useLoading.hook'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { FlatList, Text, View } from 'react-native'
import { CancelOrderButton } from '@/components/boss/order'

type Props = {
  storeId: number
}
export const BossOrderList = ({ storeId }: Props) => {
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
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {orderList.length !== 0 ? (
        <FlatList
          data={orderList.sort((a, b) => b.orderId - a.orderId)}
          renderItem={({ item }) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>==========================</Text>
              <CancelOrderButton
                orderId={item.orderId}
                storeId={storeId}
                setRefreshing={setRefreshing}
              />
              <Text>orderId: {item.orderId}</Text>
              <Text>주문자: {item.nickName}</Text>
              <Text>주문시간: {item.createTime}</Text>

              <Text>-----주문내역-----</Text>

              <FlatList
                data={item.orderMenus}
                renderItem={({ item }) => (
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>menuName: {item.menuName}</Text>
                    <Text>count: {item.count}</Text>
                    <Text>price: {item.price}</Text>
                    <Text>----------</Text>
                  </View>
                )}
                keyExtractor={item => String(item.menuId)}
              />
            </View>
          )}
          keyExtractor={item => String(item.orderId)}
        />
      ) : (
        <View>
          <Text>주문이 없습니다!</Text>
        </View>
      )}
    </View>
  )
}
