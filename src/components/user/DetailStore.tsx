import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/storeType'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

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
    <View>
      {storeInfo ? (
        <View>
          <Text>{storeInfo.storeName}</Text>
          {storeInfo.businessHours.map((item, index) => (
            <View key={index}>
              <Text>{item.days}</Text>
              <Text>{item.startTime}</Text>
              <Text>{item.endTime}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>로드중..</Text>
      )}
    </View>
  )
}
