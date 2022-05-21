import { ChangeBossButton } from '@/components'
import { PreviewDetailStore } from '@/components/user'
import { StateStoreToogle } from '@/components/user/StateStoreToogle'
import { LocationType, StoreDetailType } from '@/types/store.type'
import React from 'react'
import { View } from 'react-native'
import NaverMapView, { Marker } from 'react-native-nmap'
import styled from 'styled-components/native'

type Props = {
  userLocation: LocationType
  handleCameraMove: (latitude: number, longitude: number) => void
  storeList: StoreDetailType[]
  handleClickMapPin: (item?: StoreDetailType) => void
  isClickMapPin: boolean
  detailStoreInfo: StoreDetailType | null
  showAllStore: boolean
  setShowAllStore: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserMainScreen = ({
  userLocation,
  handleCameraMove,
  storeList,
  handleClickMapPin,
  isClickMapPin,
  detailStoreInfo,
  showAllStore,
  setShowAllStore,
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
      <NaverMapWrapper>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          showsMyLocationButton={true}
          center={{ ...userLocation, zoom: 16 }}
          compass={true}
          scaleBar={true}
          onMapClick={() => handleClickMapPin()}
          onCameraChange={e => handleCameraMove(e.latitude, e.longitude)}
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
                pinColor={item.salesStatus === 'OPEN' ? 'black' : 'red'}
              />
            ))}
        </NaverMapView>
        {isClickMapPin && detailStoreInfo && (
          <PreviewDetailStore storeInfo={detailStoreInfo} />
        )}
      </NaverMapWrapper>
      <ChangeUserButtonWrapper>
        <ChangeBossButton />
      </ChangeUserButtonWrapper>
      <StateStoreToogleWrapper>
        <StateStoreToogle
          isEnabled={showAllStore}
          toggleSwitch={setShowAllStore}
        />
      </StateStoreToogleWrapper>
    </View>
  )
}

const NaverMapWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`

const ChangeUserButtonWrapper = styled.View`
  position: absolute;
  top: 10%;
  left: 10%;
`

const StateStoreToogleWrapper = styled.View`
  position: absolute;
  top: 10%;
  right: 10%;
`
