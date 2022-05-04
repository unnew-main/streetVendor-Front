import { RegisterStoreButton } from '@/apps/boss/components/RegisterStoreButton'
import { GoogleLogoutbutton, SignoutButton } from '@/components'
import { StoreType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

type BossMainScreenProps = {
  list: StoreType[]
}
export const BossStoreListScreen = ({ list }: BossMainScreenProps) => {
  return (
    <Container>
      <Scroll>
        <ScrollWrapper>
          <Text>가게 리스트</Text>
          {list.length ? (
            list.map((param, i) => (
              <ItemContainer key={i}>
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
        </ScrollWrapper>
      </Scroll>
    </Container>
  )
}
const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  height: 100%;
`
const Scroll = styled.ScrollView`
  width: 90%;
  height: 100%;
  padding-top: 100px;
`
const ScrollWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const ItemContainer = styled.View`
  display: flex;
  justify-content: center;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`

const Item = styled.Text`
  margin-bottom: 10px;
`
