import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/store.type'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
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
      } catch (e) {
        console.log('DetailStore Error: ', e)
      }
    })()
  }, [storeId])

  const handleOrderClick = () => {
    console.log(storeInfo?.storeName)
    navigator?.navigate('UserOrder', {
      storeName: storeInfo?.storeName,
      menuList: storeInfo?.menuList,
    })
  }
  if (!storeInfo) {
    return <Text>로드중..</Text>
  }

  return (
    <Container>
      <ScrollView>
        <Text>{storeInfo.storeName}</Text>
        {storeInfo.businessHours.map((item, index) => (
          <View key={index}>
            <Text>{item.days}</Text>
            <Text>{item.startTime}</Text>
            <Text>{item.endTime}</Text>
          </View>
        ))}
      </ScrollView>
      <ButtonWrapper>
        <OrderButton handleOrderClick={handleOrderClick} />
      </ButtonWrapper>
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
  position: relative;
`
const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 10%;
  right: 5%;
`
