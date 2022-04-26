import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import NaverMapView, { Marker } from 'react-native-nmap'
import styled from 'styled-components'
import { LocationType } from '../RegisterStoreScreen.type'

type Props = {
  handleNextRouter: () => void
  location: LocationType
  handleMapClick: (e: any) => void
  handleMapClickCancel: () => void
  userLocation: LocationType
}

export const SetLocationScreen = ({
  handleNextRouter,
  handleMapClick,
  location,
  handleMapClickCancel,
  userLocation,
}: Props) => {
  console.log('userLocation', userLocation)
  return (
    <RegisterStoreLayout title="장소" handleNextRouter={handleNextRouter}>
      <ContentHeader>
        <Text>가게위치를 선택해주세요</Text>
      </ContentHeader>
      <NaverMapWrapper>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          showsMyLocationButton={true}
          center={
            location.latitude !== 0
              ? { ...location, zoom: 16 }
              : { ...userLocation, zoom: 16 }
          }
          // onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
          // onCameraChange={e => console.log('CameraChange', e)}
          onMapClick={e => handleMapClick(e)}
        >
          {location.latitude !== 0 && (
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

const ContentHeader = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`
const NaverMapWrapper = styled(View)`
  width: 100%;
  height: 90%;
`
