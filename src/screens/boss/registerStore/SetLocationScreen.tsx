import React from 'react'
import { Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import NaverMapView, { Marker } from 'react-native-nmap'

type Props = {
  handleNextRouter: () => void
  location: string
  handleLocation: (data: string) => void
}

export const SetLocationScreen = ({ handleNextRouter }: Props) => {
  const P0 = { latitude: 37.564362, longitude: 126.977011 }
  const P1 = { latitude: 37.565051, longitude: 126.978567 }
  const P2 = { latitude: 37.565383, longitude: 126.976292 }

  return (
    <RegisterStoreLayout title="장소" handleNextRouter={handleNextRouter}>
      <View style={{ width: '100%', height: '30%' }}>
        <Text>SetLocationScreen</Text>
      </View>
      <View /* style={{ width: '100%', height: '100%' }} */>
        <NaverMapView
          style={{ width: '100%', height: '100%' }}
          showsMyLocationButton={true}
          center={{ ...P0, zoom: 16 }}
          // onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
          onCameraChange={e => console.warn('onCameraChange', e)}
          onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
        >
          <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />
          <Marker
            coordinate={P1}
            pinColor="blue"
            onClick={() => console.warn('onClick! p1')}
          />
          <Marker
            coordinate={P2}
            pinColor="red"
            onClick={() => console.warn('onClick! p2')}
          />
        </NaverMapView>
      </View>
    </RegisterStoreLayout>
  )
}
