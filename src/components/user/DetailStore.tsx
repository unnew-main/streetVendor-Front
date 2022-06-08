import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/store.type'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { OrderButton } from './OrderButton'

type Props = {
  storeId: number
}
export const DetailStore = ({ storeId }: Props) => {
  const navigator = React.useContext(NavigationContext)

  const [storeInfo, setStoreInfo] = useState<StoreDetailType>()
  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await storeApi.getDetailStore(storeId)
        console.log('[DetailStore]storeDetail Info', data)
        setStoreInfo(data)
      } catch (error) {
        console.log('DetailStore Error: ', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [navigator, storeId])

  const handleOrderClick = () => {
    console.log(storeInfo?.storeName)
    navigator?.navigate('UserOrder', {
      storeName: storeInfo?.storeName,
      menuList: storeInfo?.menuList,
      storeId: storeInfo?.storeId,
    })
  }
  if (!storeInfo) {
    return <Text>로드중..</Text>
  }

  return (
    <Container>
      <FlatList
        data={storeInfo.businessHours}
        renderItem={({ item }) => (
          <View>
            <Text>{storeInfo.storeName}</Text>

            <Text>{item.days}</Text>
            <Text>{item.startTime}</Text>
            <Text>{item.endTime}</Text>
          </View>
        )}
        keyExtractor={(item, i) => String(i)}
      />
      {storeInfo.salesStatus === 'OPEN' && (
        <ButtonWrapper>
          <OrderButton handleOrderClick={handleOrderClick} />
        </ButtonWrapper>
      )}
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
`
const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 5%;
  right: 5%;
`
