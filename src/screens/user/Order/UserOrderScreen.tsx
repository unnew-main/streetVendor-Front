import { MenuItem } from '@/components/user'
import { OrderCheck } from '@/components/user/OrderCheck'
import { BasketType } from '@/types/order.type'
import { StoreMenuType, StorePinType } from '@/types/store.type'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

import styled from 'styled-components/native'

type Props = {
  storeName: StorePinType['storeName']
  storeId: StorePinType['storeId']
  menuList: StoreMenuType[]
  handleAddBasket: (props: BasketType) => void
  basketList: BasketType[]
  setBasketList: React.Dispatch<React.SetStateAction<BasketType[]>>
}
export const UserOrderScreen = ({
  storeName,
  storeId,
  menuList,
  handleAddBasket,
  basketList,
  setBasketList,
}: Props) => {
  const navigator = React.useContext(NavigationContext)

  return (
    <Container>
      <BackButtonWrapper onPress={() => navigator?.goBack()}>
        <Text>뒤로가기</Text>
      </BackButtonWrapper>
      <MenuInfoWrapper>
        <Text style={{ backgroundColor: 'red' }}>주문화면</Text>
        <Text>가게이름: {storeName}</Text>
      </MenuInfoWrapper>
      <MenuList>
        {menuList ? (
          <FlatList
            data={menuList}
            renderItem={({ item }) => (
              <MenuItem menuInfo={item} handleAddBasket={handleAddBasket} />
            )}
            keyExtractor={(item, i) => String(i)}
          />
        ) : (
          <View>메뉴가 없습니다!</View>
        )}
      </MenuList>
      <OrderCheck
        basketList={basketList}
        setBasketList={setBasketList}
        storeId={storeId}
      />
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

const BackButtonWrapper = styled.TouchableOpacity`
  width: 40%;
  border: 1px solid black;
  padding: 10px;
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
  height: 80%;
`
