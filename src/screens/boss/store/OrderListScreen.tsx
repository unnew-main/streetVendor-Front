import { CancelOrderButton } from '@/components/boss/order'
import { BossOrderListType } from '@/types/order.type'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

type Props = {
  orderList: BossOrderListType[]
  storeId: number
  setRefreshing: React.Dispatch<React.SetStateAction<boolean>>
}
export const OrderListScreen = ({
  orderList,
  storeId,
  setRefreshing,
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
