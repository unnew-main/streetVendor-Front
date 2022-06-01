import { BasketType } from '@/types/order.type'
import { StoreMenuType } from '@/types/store.type'
import React from 'react'
import { Image, ImageSourcePropType, Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  menuInfo: StoreMenuType
  handleAddBasket: (props: BasketType) => void
}
export const MenuItem = ({ menuInfo, handleAddBasket }: Props) => {
  const url: ImageSourcePropType = { uri: menuInfo.pictureUrl }
  console.log('menuInfo.menuId,', menuInfo.menuSalesStatus)
  return (
    <ItemContainer menuSalesStatus={menuInfo.menuSalesStatus}>
      <Image source={url} style={{ width: 80, height: 80 }} />
      <Text>{menuInfo.menuName}</Text>
      <Text>{menuInfo.menuCount}개</Text>
      <Text>{menuInfo.menuPrice}원</Text>
      <AddButton
        onPress={() =>
          handleAddBasket({
            menuId: menuInfo.menuId,
            menuCount: menuInfo.menuCount,
            menuName: menuInfo.menuName,
            pictureUrl: menuInfo.pictureUrl,
            menuPrice: menuInfo.menuPrice,
            menuTotal: 1,
          })
        }
      >
        <Text>추가</Text>
      </AddButton>
    </ItemContainer>
  )
}

const ItemContainer = styled.View<{
  menuSalesStatus: StoreMenuType['menuSalesStatus']
}>`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-bottom-color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 100px;
  background-color: ${({ menuSalesStatus }) =>
    menuSalesStatus === 'ON_SALE' ? 'white' : 'red'};
`
const AddButton = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
`
