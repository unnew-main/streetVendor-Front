import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/store.type'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type Props = {
  storeId: number
}
export const DetailStore = ({ storeId }: Props) => {
  const [storeInfo, setStoreInfo] = useState<StoreDetailType>()
  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await storeApi.getDetailStore(storeId)
        console.log(data)
        setStoreInfo(data)
      } catch (e) {
        console.log('DetailStore Error: ', e)
      }
    })()
  }, [storeId])

  return (
    <Container>
      {storeInfo ? (
        <ScrollView>
          <Text>{storeInfo.name}</Text>
          {storeInfo.businessHours.map((item, index) => (
            <View key={index}>
              <Text>{item.days}</Text>
              <Text>{item.startTime}</Text>
              <Text>{item.endTime}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>로드중..</Text>
      )}
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
`
