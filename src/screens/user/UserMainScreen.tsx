import { ChangeBossButton } from '@/components'
import { PreviewDetailStore } from '@/components/user'
import { LocationType, StoreDetailType } from '@/types/storeType'
import React from 'react'
import { Text, View } from 'react-native'
import NaverMapView, { Marker } from 'react-native-nmap'
import styled from 'styled-components/native'

type Props = {
  userLocation: LocationType
  handleCameraMove: (latitude: number, longitude: number, zoom: number) => void
  storeList: StoreDetailType[]
  handleClickMapPin: (item: StoreDetailType) => void
  isClickMapPin: boolean
  detailStoreInfo: StoreDetailType
}

export const UserMainScreen = ({
  userLocation,
  handleCameraMove,
  storeList,
  handleClickMapPin,
  isClickMapPin,
  detailStoreInfo,
}: Props) => {
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
      <ChangeBossButton />
      <NaverMapWrapper>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          showsMyLocationButton={true}
          center={{ ...userLocation, zoom: 16 }}
          compass={true}
          scaleBar={true}
          onMapClick={e => console.log('onMapClick', e)}
          onCameraChange={e =>
            handleCameraMove(e.latitude, e.longitude, e.zoom)
          }
        >
          {storeList.length !== 0 &&
            storeList.map(item => (
              <Marker
                key={item.storeId}
                coordinate={{
                  latitude: item.location.latitude,
                  longitude: item.location.longitude,
                }}
                onClick={() => handleClickMapPin(item)}
              />
            ))}
        </NaverMapView>
        {isClickMapPin && <PreviewDetailStore storeInfo={detailStoreInfo} />}
      </NaverMapWrapper>
    </View>
  )
}

const NaverMapWrapper = styled.View`
  width: 100%;
  height: 90%;
`
