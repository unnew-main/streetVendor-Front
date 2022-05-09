import { StoreTabScreen } from '@/screens/boss/store'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
type Props = {
  route: RouteProp<{ params: { storeId: number } }, 'params'>
}
export const StoreTabApp = ({ route }: Props) => {
  const { storeId } = route.params
  console.log('id', storeId)

  return <StoreTabScreen />
}
