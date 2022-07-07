import { orderApi } from '@/apis/orderApi'
import { UserOrderCheckListType } from '@/types/order.type'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native'

export const UserOrderCheckList = () => {
  const navigator = React.useContext(NavigationContext)
  const [orderList, setOrderList] = useState<UserOrderCheckListType[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data: data },
        } = await orderApi.userCheckOrder()
        setOrderList(data)
      } catch (error) {
        console.log('OrderListApp Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [navigator])

  return (
    <Container>
      <Text>UserOrerList</Text>
      {orderList.length !== 0 ? (
        <FlatList
          data={orderList.sort((a, b) => a.orderId - b.orderId)}
          renderItem={({ item }) => (
            <View>
              <Text>orderId: {item.orderId}</Text>
              <Text>
                memberId: {item.request.orderHistoryMenuResponses[0].menuName}
              </Text>
              <Text>---------------</Text>
            </View>
          )}
          keyExtractor={item => String(item.orderId)}
        />
      ) : (
        <View>
          <Text>주문한 내역이 없습니다!</Text>
        </View>
      )}
    </Container>
  )
}

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: white;
`
