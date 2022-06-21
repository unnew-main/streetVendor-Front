import { StoreDetailType } from '@/types/store.type'
import { useCallback, useState } from 'react'

export const useStore = () => {
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

  const handleStoreData = useCallback((data: StoreDetailType) => {
    setStoreData(data)
  }, [])
  return { storeData, handleStoreData }
}
