import { StoreMenuType } from '@/types/store.type'
import React from 'react'
import { Image, ImageSourcePropType, Text } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  menuInfo: StoreMenuType
  handleAddBasket: (id: StoreMenuType['menuId']) => void
}
export const MenuItem = ({ menuInfo, handleAddBasket }: Props) => {
  const url: ImageSourcePropType = { uri: menuInfo.pictureUrl }
  console.log('menuInfo.menuId,', menuInfo)
  return (
    <ItemContainer salesStatus={menuInfo.salesStatus}>
      <Image source={url} style={{ width: 80, height: 80 }} />
      <Text>{menuInfo.menuName}</Text>
      <Text>{menuInfo.menuCount}개</Text>
      <Text>{menuInfo.menuPrice}원</Text>
      <AddButton onPress={() => handleAddBasket(menuInfo.menuId)}>
        <Text>추가</Text>
      </AddButton>
    </ItemContainer>
  )
}

const ItemContainer = styled.View<{
  salesStatus: StoreMenuType['salesStatus']
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
  background-color: ${({ salesStatus }) =>
    salesStatus === 'ON_SALE' ? 'white' : 'red'};
`
const AddButton = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
`
