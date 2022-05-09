import { LocationType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'
import NaverMapView from 'react-native-nmap'
import styled from 'styled-components/native'

type Props = {
  userLocation: LocationType
}

export const UserMainScreen = ({ userLocation }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>유저 메인스크린</Text>
      <NaverMapWrapper>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          showsMyLocationButton={true}
          center={{ ...userLocation, zoom: 16 }}
          compass={true}
          scaleBar={true}
          onMapClick={e => console.log('onMapClick', e)}
          onCameraChange={e => console.log('cameraChange', e)}
        >
          {/* {isPin !== false && (
            <Marker
              coordinate={location}
              onClick={() => handleMapClickCancel()}
            />
          )} */}
        </NaverMapView>
      </NaverMapWrapper>
    </View>
  )
}

const NaverMapWrapper = styled.View`
  width: 100%;
  height: 90%;
`
