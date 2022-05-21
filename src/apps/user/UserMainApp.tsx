import React, { useCallback, useEffect, useState } from 'react'

import { UserMainScreen } from '@/screens/user'
import { LocationType, StoreDetailType } from '@/types/store.type'
import Geolocation from '@react-native-community/geolocation'
import { storeApi } from '@/apis'

export const UserMainApp = () => {
  const [showAllStore, setShowAllStore] = useState(false)
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const [cameraLocation, setCameraLocation] = useState({
    latitude: 0,
    longitude: 0,
  })
  const [storeList, setStoreList] = useState<StoreDetailType[]>([])

  const [isClickMapPin, setIsClickMapPin] = useState<boolean>(false)
  const [
    detailStoreInfo,
    setDetailStoreInfo,
  ] = useState<StoreDetailType | null>(null)

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
        })
      },
      error => {
        console.log('Location Geolocation Error', error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    )
  }, [])

  useEffect(() => {
    console.log('cameraLocation', cameraLocation)
    ;(async () => {
      try {
        const {
          data: { data },
        } = showAllStore
          ? await storeApi.getLocationClosedStore(
              2,
              cameraLocation.latitude,
              cameraLocation.longitude,
            )
          : await storeApi.getLocationOpenStore(
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
  }, [cameraLocation, showAllStore])

  const handleCameraMove = (latitude: number, longitude: number) => {
    console.log('[카메라 위치]', latitude, longitude)
    setCameraLocation({ latitude, longitude })
  }

  const handleClickMapPin = useCallback(
    (item?: StoreDetailType) => {
      console.log('item??', item)
      if (item) {
        detailStoreInfo?.storeId === item.storeId
          ? setIsClickMapPin(prev => !prev)
          : setIsClickMapPin(true)

        setDetailStoreInfo(item)
      } else {
        setDetailStoreInfo(null)
        setIsClickMapPin(false)
      }
    },
    [detailStoreInfo?.storeId],
  )
  return (
    <UserMainScreen
      userLocation={userLocation}
      handleCameraMove={handleCameraMove}
      storeList={storeList}
      handleClickMapPin={handleClickMapPin}
      isClickMapPin={isClickMapPin}
      detailStoreInfo={detailStoreInfo}
      showAllStore={showAllStore}
      setShowAllStore={setShowAllStore}
    />
  )
}
