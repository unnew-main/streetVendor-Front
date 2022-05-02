import { RegisterStoreButton } from '@/apps/boss/components/RegisterStoreButton'
import { GoogleLogoutbutton, SignoutButton } from '@/components'
import { StoreType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

type BossMainScreenProps = {
  list: StoreType[]
}
export const BossMainScreen = ({ list }: BossMainScreenProps) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>보스 메인스크린</Text>
      {list.length ? (
        list.map((param, i) => (
          <ItemContainer key={i}>
            <Item>-----------------------</Item>

            <Item>{param.bossId}</Item>
            <Item>{param.name}</Item>
            <ItemContainer>
              {param.businessHours.map((param, i) => (
                <View key={i}>
                  <Item>{param.days}</Item>
                  <Item>{param.startTime}</Item>
                  <Item>{param.endTime}</Item>
                </View>
              ))}
            </ItemContainer>
            <Item>{param.category}</Item>
            <Item>{param.description}</Item>
            <ItemContainer>
              {param.menus.map((param, i) => (
                <View key={i}>
                  <Item>{param.menuCount}</Item>
                  <Item>{param.price}</Item>
                  <Item>{param.name}</Item>
                </View>
              ))}
            </ItemContainer>
            <Item>{param.paymentMethods}</Item>
            <Item>{param.storeId}</Item>
          </ItemContainer>
        ))
      ) : (
        <View>
          <Text>가게가 없습니다!</Text>
        </View>
      )}
      <RegisterStoreButton />

      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}

const ItemContainer = styled.View`
  display: flex;
`

const Item = styled.Text`
  margin-right: 10px;
`
