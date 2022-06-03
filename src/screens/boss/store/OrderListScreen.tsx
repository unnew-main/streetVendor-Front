import { BossOrderListType } from '@/types/order.type'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

type Props = {
  orderList: BossOrderListType[]
}
export const OrderListScreen = ({ orderList }: Props) => {
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
          data={orderList}
          renderItem={({ item }) => (
            <View>
              <Text>orderId: {item.orderId}</Text>
              <FlatList
                data={item.orderMenus}
                renderItem={({ item }) => (
                  <View>
                    <Text>menuName: {item.menuName}</Text>
                    <Text>count: {item.count}</Text>
                    <Text>price: {item.price}</Text>
                  </View>
                )}
                keyExtractor={item => String(item.menuId)}
              />
              <Text>---------</Text>
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
