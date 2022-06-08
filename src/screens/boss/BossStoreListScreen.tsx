import { GoogleLogoutbutton, SignoutButton } from '@/components/auth'
import { RegisterStoreButton } from '@/components/boss'
import { ChangeUserButton } from '@/components/common'
import { AutoCreateStore } from '@/dummy/AutoCreateStore'
import { StoreListType } from '@/types/store.type'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
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
      <ScrollWrapper>
        <Text>가게 리스트</Text>
        <AutoCreateStore />
        {list.length ? (
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <ItemContainer
                onPress={() => handleClickStore(item.storeId)}
                isOpen={item.salesStatus === 'CLOSED' ? false : true}
              >
                <Item>{item.storeId}</Item>
                <Item>{item.storeName}</Item>
                <Item>{item.locationDescription}</Item>
              </ItemContainer>
            )}
            keyExtractor={(item, i) => String(i)}
            style={{ width: '100%' }}
          />
        ) : (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '60%',
            }}
          >
            <Text>가게가 없습니다!</Text>
          </View>
        )}

        <RegisterStoreButton />
        <ChangeUserButton />

        <GoogleLogoutbutton />
        <SignoutButton />
      </ScrollWrapper>
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
