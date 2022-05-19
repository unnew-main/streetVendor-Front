import React from 'react'
import { Text } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import NaverMapView, { Marker } from 'react-native-nmap'
import { LocationType } from '@/types/store.type'
import styled from 'styled-components/native'

type Props = {
  handleNextRouter: () => void
  location: LocationType
  handleMapClick: (e: any) => void
  handleMapClickCancel: () => void
  userLocation: LocationType
  isPin: boolean
  beforeBackSave: () => void
}

export const SetLocationScreen = ({
  handleNextRouter,
  handleMapClick,
  location,
  handleMapClickCancel,
  userLocation,
  isPin,
  beforeBackSave,
}: Props) => {
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
