import { SetLocationScreen } from '@/screens/boss/registerStore'
import {
  LocationType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'

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

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        // const latitude = String(position.coords.latitude)
        // const longitude = String(position.coords.longitude)

        setUserLocation({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
        })
      },
      error => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    )
  }, [])
  // const geoLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       // const latitude = String(position.coords.latitude)
  //       // const longitude = String(position.coords.longitude)

  //       setLatitude(String(position.coords.latitude))
  //       setLogitude(String(position.coords.longitude))
  //     },
  //     error => {
  //       console.log(error.code, error.message)
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  //   )
  // }

  const handleMapClick = (e: any) => {
    console.log('handleMapClick', e)
    handleLocation({ longitude: e.longitude, latitude: e.latitude })
  }
  const handleMapClickCancel = () => {
    handleLocation({ longitude: 0, latitude: 0 })
  }
  const handleNextRouter = useCallback(() => {
    navigate('SetBusinessHours')
  }, [navigate])

  return (
    <SetLocationScreen
      handleNextRouter={handleNextRouter}
      location={location}
      handleMapClick={handleMapClick}
      handleMapClickCancel={handleMapClickCancel}
      userLocation={userLocation}
    />
  )
}
