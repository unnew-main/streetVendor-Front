import { StoreTabScreen } from '@/screens/boss/store'
import React, { useEffect } from 'react'
import { RouteProp } from '@react-navigation/native'
type Props = {
  route: RouteProp<{ params: { storeId: number } }>
}
export const StoreTabApp = ({ route }: Props) => {
  const { storeId } = route.params
  useEffect(() => {
    console.log('id', storeId)
  }, [storeId])
  return <StoreTabScreen />
}
