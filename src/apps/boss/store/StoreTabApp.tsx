import { StoreTabScreen } from '@/screens/boss/store'
import React, { useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/storeType'
type Props = {
  route: RouteProp<{ params: { storeId: number } }>
}
export const StoreTabApp = ({ route }: Props) => {
  const { storeId } = route.params
  // const [storeData, setStoreData] = useState<StoreDetailType>({
  //   bossNumber: '',
  //   category: '',
  //   description: 'string',
  //   menuList: [
  //     {
  //       menuCount: 0,
  //       menuName: '',
  //       menuPrice: 0,
  //       pictureUrl: '',
  //     },
  //   ],
  //   openingTime: [
  //     {
  //       days: '',
  //       endTime: '',
  //       startTime: '',
  //       storeId: '',
  //     },
  //   ],
  //   storeId: 0,
  //   storeName: '',
  // })
  const [storeData, setStoreData] = useState<StoreDetailType>()
  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await storeApi.getDetailStore(storeId)
        //TODO: 데이터 정리 및 넘기기
        console.log('detail storedata', data)
        setStoreData(data)
      } catch (e) {
        console.log('getDetailStore ERROR:', e)
      }
    })()
  }, [storeId])
  return <StoreTabScreen /*  storeData={storeData} */ />
}
