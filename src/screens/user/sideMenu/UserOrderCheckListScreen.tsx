import { UserOrderCheckListType } from '@/types/order.type'
import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type Props = {
  orderList: UserOrderCheckListType[]
}
export const UserOrderCheckListScreen = ({ orderList }: Props) => {
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
                memberId: {item.request.orderMenuResponses[0].menuName}
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
