import { StoreTabScreen } from '@/screens/boss/store'
import React, { useEffect, useState } from 'react'
import { NavigationContext, RouteProp } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/store.type'
import { ReportError } from '@/utils/reportError'
type Props = {
  route: RouteProp<{
    params: {
      storeId: number
      handleStore: (id: number, isOpen: boolean) => void
    }
  }>
}
export const StoreTabApp = ({ route }: Props) => {
  const { storeId, handleStore } = route.params
  const navigator = React.useContext(NavigationContext)

  const [storeData, setStoreData] = useState<StoreDetailType>({
    bossNumber: '01012341234',
    businessHours: [
      { days: 'MON', endTime: '12:00:00', startTime: '12:00:00' },
    ],
    category: 'BUNG_EO_PPANG',
    location: { latitude: 37.787255643629464, longitude: 126.40588055822184 },
    locationDescription: '',
    menuList: [
      {
        menuCount: 0,
        menuName: '',
        menuPrice: 0,
        pictureUrl: '',
        menuId: 0,
        menuSalesStatus: 'ON_SALE',
      },
    ],
    payments: ['CASH'],
    pictureUrl: '',
    salesStatus: 'OPEN',
    storeDescription: '',
    storeId: 0,
    storeName: '',
  })
  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await storeApi.getDetailStore(storeId)
        console.log('detail storedata', data)
        setStoreData(data)
      } catch (error) {
        console.log('getDetailStore ERROR:', error)
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    })()
  }, [navigator, storeId])
  return <StoreTabScreen storeData={storeData} handleStore={handleStore} />
}
