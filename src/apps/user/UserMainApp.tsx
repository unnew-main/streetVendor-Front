import React, { useEffect, useState } from 'react'

import { UserMainScreen } from '@/screens/user'
import { LocationType } from '@/types/storeType'
import Geolocation from '@react-native-community/geolocation'

export const UserMainApp = () => {
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
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

  return <UserMainScreen userLocation={userLocation} />
}
