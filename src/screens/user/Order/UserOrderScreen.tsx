import { StoreDetailType, StoreMenuType } from '@/types/store.type'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { MenuItem } from './MenuItem'

type Props = {
  storeName: StoreDetailType['storeName']
  menuList: StoreMenuType[]
}
export const UserOrderScreen = ({ storeName, menuList }: Props) => {
  console.log('menuList!!!', menuList)
  return (
    <Container>
      <ScrollViewStyle>
        <MenuInfoWrapper>
          <Text style={{ backgroundColor: 'red' }}>주문화면</Text>
          <Text>가게이름: {storeName}</Text>
        </MenuInfoWrapper>
        <MenuList>
          {menuList.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </MenuList>
      </ScrollViewStyle>
      <OrderButtonWrapper>
        <Text>주문하기</Text>
      </OrderButtonWrapper>
    </Container>
  )
}

const ScrollViewStyle = styled.ScrollView`
  height: 100%;
  width: 100%;
`

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const MenuInfoWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom-color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`
const MenuList = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const OrderButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: cyan;
`
