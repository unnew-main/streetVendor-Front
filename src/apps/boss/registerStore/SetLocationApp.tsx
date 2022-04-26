import { SetLocationScreen } from '@/screens/boss/registerStore'
import {
  LocationType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useState } from 'react'
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
    />
  )
}
