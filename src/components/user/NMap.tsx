import React, { useEffect, useState } from 'react'

import { LocationType, StorePinType } from '@/types/store.type'
import Geolocation from '@react-native-community/geolocation'
import { storeApi } from '@/apis'
import NaverMapView, { Marker } from 'react-native-nmap'

type Props = {
  showAllStore: boolean
  handleClickMapPin: (item?: StorePinType) => void
}
export const NMap = ({ showAllStore, handleClickMapPin }: Props) => {
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const [cameraLocation, setCameraLocation] = useState({
    latitude: 0,
    longitude: 0,
  })
  const [storeList, setStoreList] = useState<StorePinType[]>([])

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
        })
        setCameraLocation({
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

  useEffect(() => {
    console.log('cameraLocation', cameraLocation)
    ;(async () => {
      try {
        const {
          data: { data },
        } = showAllStore
          ? await storeApi.getLocationClosedStore(
              2,
              cameraLocation.latitude,
              cameraLocation.longitude,
            )
          : await storeApi.getLocationOpenStore(
              2,
              cameraLocation.latitude,
              cameraLocation.longitude,
            )
        console.log('storeList', data)
        setStoreList(data)
      } catch (e) {
        console.log('getLocationStore API ERROR: ', e)
      }
    })()
  }, [cameraLocation, showAllStore])

  const handleCameraMove = (latitude: number, longitude: number) => {
    setCameraLocation({ latitude, longitude })
  }

  return (
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
  )
}
