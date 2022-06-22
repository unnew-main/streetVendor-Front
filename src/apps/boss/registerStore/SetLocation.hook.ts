import { LocationType } from '@/types/store.type'
import { useCallback, useState } from 'react'

export const useLocation = () => {
  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  })
  const [isPin, setIsPin] = useState(false)

  const handleUserLocation = ({ latitude, longitude }: LocationType) => {
    setUserLocation({
      latitude,
      longitude,
    })
  }
  const pinOff = useCallback(() => {
    setIsPin(false)
  }, [])
  const pinOn = useCallback(() => {
    setIsPin(true)
  }, [])

  return { userLocation, handleUserLocation, isPin, pinOn, pinOff }
}
