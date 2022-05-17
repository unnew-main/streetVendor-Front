import { GoogleLogoutbutton, SignoutButton } from '@/components'
import { RegisterStoreButton } from '@/components/boss'
import { StoreListType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

type BossMainScreenProps = {
  list: StoreListType[]
  handleClickStore: (id: number) => void
}
export const BossStoreListScreen = ({
  list,
  handleClickStore,
}: BossMainScreenProps) => {
  return (
    <Container>
      <Scroll>
        <ScrollWrapper>
          <Text>가게 리스트</Text>
          {list.length ? (
            list.map((param, i) => (
              <ItemContainer
                key={i}
                onPress={() => handleClickStore(param.storeId)}
                isOpen={param.salesStatus === 'CLOSED' ? false : true}
              >
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
const ItemContainer = styled.TouchableOpacity<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  border: ${({ isOpen }) =>
    !isOpen ? '2px solid #000000' : '2px solid green'};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`

const Item = styled.Text`
  margin-bottom: 10px;
`
