import { RegisterStoreButton } from '@/apps/boss/components/RegisterStoreButton'
import { GoogleLogoutbutton, SignoutButton } from '@/components'
import { StoreType } from '@/types/storeType'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styled from 'styled-components/native'

type BossMainScreenProps = {
  list: StoreType[]
}
export const BossStoreListScreen = ({ list }: BossMainScreenProps) => {
  return (
    <Container>
      <ScrollView
        style={{
          height: '100%',
        }}
      >
        <Text>보스 메인스크린</Text>
        {list.length ? (
          list.map((param, i) => (
            <ItemContainer key={i}>
              <Item>-----------------------</Item>
              <Item>{param.storeId}</Item>
              <Item>{param.storeName}</Item>
              <Item>{param.locationDescription}</Item>
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
      </ScrollView>
    </Container>
  )
}
const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const ItemContainer = styled.View`
  display: flex;
`

const Item = styled.Text`
  margin-right: 10px;
`
