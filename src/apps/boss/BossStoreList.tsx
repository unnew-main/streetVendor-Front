import React, { useCallback, useEffect, useState } from 'react'

import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { StoreListType } from '@/types/store.type'
import { NavigationContext, useIsFocused } from '@react-navigation/native'
import { ReportError } from '@/utils/reportError'
import styled from 'styled-components/native'
import { GoogleLogoutbutton, SignoutButton } from '@/components/auth'
import { ChangeUserButton } from '@/components/common'
import { RegisterStoreButton } from '@/components/boss'
import { FlatList, Text, View } from 'react-native'
import { AutoCreateStore } from '@/dummy/AutoCreateStore'

export const BossStoreList = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const [list, setList] = useState<StoreListType[]>([])
  const isFocused = useIsFocused()

  useEffect(() => {
    ;(async () => {
      try {
        onLoading()
        const {
          data: { data },
        } = await storeApi.getListStore()
        console.log('store data List', data)
        setList(data)
        offLoading()
      } catch (error) {
        console.log('BossStoreListApp Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
        offLoading()
      }
    })()
  }, [navigator, offLoading, onLoading, isFocused])

  const handleClickStore = useCallback(
    (id: number) => {
      navigator?.navigate('BossStoreTab', {
        storeId: id,
      })
    },
    [navigator],
  )

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
