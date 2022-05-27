import { StoreMenuType } from '@/types/store.type'
import React from 'react'
import { Image, ImageSourcePropType, Text } from 'react-native'
import styled from 'styled-components/native'

export const MenuItem = (props: StoreMenuType) => {
  const url: ImageSourcePropType = { uri: props.pictureUrl }
  return (
    <ItemContainer>
      <Image source={url} style={{ width: 80, height: 80 }} />
      <Text>{props.menuName}</Text>
      <Text>{props.menuCount}개</Text>
      <Text>{props.menuPrice}원</Text>
    </ItemContainer>
  )
}

const ItemContainer = styled.View`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-bottom-color: black;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 100px;
`
