import { SetLocationScreen } from '@/screens/boss/registerStore'
import {
  LocationType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import { goAlert } from '@/utils/goAlert'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
  location: LocationType
  handleLocation: (data: LocationType) => void
}

export const SetLocationApp = ({
  navigation: { navigate },
  location,
  handleLocation,
}: Props) => {
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const [isPin, setIsPin] = useState(false)

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        if (location.latitude === 0 && location.longitude === 0) {
          setIsPin(false)
          setUserLocation({
            latitude: Number(position.coords.latitude),
            longitude: Number(position.coords.longitude),
          })
        } else {
          setIsPin(true)

          setUserLocation({
            latitude: location.latitude,
            longitude: location.longitude,
          })
        }
      },
      error => {
        console.log('Location Geolocation Error', error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    )
  }, [location.latitude, location.longitude])

  const handleMapClick = useCallback(
    (e: any) => {
      console.log('handleMapClick', e)
      setIsPin(true)
      handleLocation({ longitude: e.longitude, latitude: e.latitude })
    },
    [handleLocation],
  )

  const handleMapClickCancel = useCallback(() => {
    setIsPin(false)
  }, [])

  const beforeBackSave = useCallback(() => {
    if (isPin === false) {
      goAlert('위치를 설정해주세요')
      throw Error
    }
    handleLocation({
      latitude: location.latitude,
      longitude: location.longitude,
    })
  }, [handleLocation, isPin, location.latitude, location.longitude])

  const handleNextRouter = useCallback(() => {
    try {
      if (isPin === false) {
        goAlert('위치를 설정해주세요')
        throw Error
      }
      handleLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      })
      navigate('SetBusinessHours')
    } catch (e) {}
  }, [handleLocation, isPin, location.latitude, location.longitude, navigate])

  return (
    <SetLocationScreen
      handleNextRouter={handleNextRouter}
      location={location}
      handleMapClick={handleMapClick}
      handleMapClickCancel={handleMapClickCancel}
      userLocation={userLocation}
      isPin={isPin}
      beforeBackSave={beforeBackSave}
    />
  )
}
