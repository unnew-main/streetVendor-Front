import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import { goAlert } from '@/utils/goAlert'
import { StackRegisterStoreList } from '@/types/route.type'
import { LocationType } from '@/types/store.type'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import styled from 'styled-components/native'
import NaverMapView, { Marker } from 'react-native-nmap'
import { Text } from 'react-native'
import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
  location: LocationType
  handleLocation: (data: LocationType) => void
}

export const SetLocation = ({
  navigation: { navigate },
  location,
  handleLocation,
}: Props) => {
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const [isPin, setIsPin] = useState(false)
  const navigator = React.useContext(NavigationContext)

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
      throw String('위치를 설정해주세요')
    }
  }, [isPin])

  const handleNextRouter = useCallback(() => {
    try {
      if (isPin === false) {
        throw String('위치를 설정해주세요')
      }

      navigate('SetBusinessHours')
    } catch (error) {
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      } else {
        goAlert(String(error))
      }
    }
  }, [isPin, navigate, navigator])

  return (
    <RegisterStoreLayout
      title="장소"
      handleNextRouter={handleNextRouter}
      beforeBackSave={beforeBackSave}
    >
      <ContentHeader>
        <Text>가게위치를 선택해주세요</Text>
      </ContentHeader>
      <NaverMapWrapper>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          showsMyLocationButton={true}
          center={{ ...userLocation, zoom: 16 }}
          compass={true}
          scaleBar={true}
          onMapClick={e => handleMapClick(e)}
          onCameraChange={e => console.log('cameraChange', e)}
        >
          {isPin !== false && (
            <Marker
              coordinate={location}
              onClick={() => handleMapClickCancel()}
            />
          )}
        </NaverMapView>
      </NaverMapWrapper>
    </RegisterStoreLayout>
  )
}

const ContentHeader = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`
const NaverMapWrapper = styled.View`
  width: 100%;
  height: 90%;
`
