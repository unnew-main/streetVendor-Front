import React, { useCallback, useEffect, useState } from 'react'

import { UserMainScreen } from '@/screens/user'
import { LocationType, StoreDetailType } from '@/types/store.type'
import Geolocation from '@react-native-community/geolocation'
import { storeApi } from '@/apis'

export const UserMainApp = () => {
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const [cameraLocation, setCameraLocation] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0,
  })
  const [storeList, setStoreList] = useState<StoreDetailType[]>([])

  const [isClickMapPin, setIsClickMapPin] = useState<boolean>(false)
  const [detailStoreInfo, setDetailStoreInfo] = useState<StoreDetailType>({
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
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
        })
        setCameraLocation({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
          zoom: 16,
        })
      },
      error => {
        console.log('Location Geolocation Error', error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    )
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { data },
        } = await storeApi.getLocationStore(
          2,
          cameraLocation.latitude,
          cameraLocation.longitude,
        )
        console.log('dateeeee', data)
        setStoreList(data)
      } catch (e) {
        console.log('getLocationStore API ERROR: ', e)
      }
    })()
  }, [cameraLocation])

  const handleCameraMove = (
    latitude: number,
    longitude: number,
    zoom: number,
  ) => {
    console.log(latitude, longitude, zoom)
    setCameraLocation({ latitude, longitude, zoom })
  }

  const handleClickMapPin = useCallback((item?: StoreDetailType) => {
    item ? setIsClickMapPin(prev => !prev) : setIsClickMapPin(false)
    item && setDetailStoreInfo(item)
  }, [])
  return (
    <UserMainScreen
      userLocation={userLocation}
      handleCameraMove={handleCameraMove}
      storeList={storeList}
      handleClickMapPin={handleClickMapPin}
      isClickMapPin={isClickMapPin}
      detailStoreInfo={detailStoreInfo}
    />
  )
}
