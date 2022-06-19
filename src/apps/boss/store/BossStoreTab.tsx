import React, { useEffect, useState } from 'react'
import { NavigationContext, RouteProp } from '@react-navigation/native'
import { storeApi } from '@/apis'
import { StoreDetailType } from '@/types/store.type'
import { ReportError } from '@/utils/reportError'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BossOrderList } from './BossOrderList'
import { BossStoreInfo } from './BossStoreInfo'
type Props = {
  route: RouteProp<{
    params: {
      storeId: number
      handleStore: (id: number, isOpen: boolean) => void
    }
  }>
}
const Tab = createBottomTabNavigator()

export const BossStoreTab = ({ route }: Props) => {
  const { storeId /* handleStore */ } = route.params
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
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="가게정보"
        options={{
          unmountOnBlur: true,
        }}
      >
        {props => <BossStoreInfo storeData={storeData} {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="주문주문"
        options={{
          unmountOnBlur: true,
        }}
      >
        {props => <BossOrderList storeId={storeData.storeId} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
