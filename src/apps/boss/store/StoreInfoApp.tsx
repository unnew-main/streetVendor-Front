import { StoreInfoScreen } from '@/screens/boss/store'
import { StoreDetailType } from '@/types/storeType'
import React from 'react'

type Props = {
  storeData: StoreDetailType
}
export const StoreInfoApp = ({ storeData }: Props) => {
  console.log('store', storeData)
  return <StoreInfoScreen storeData={storeData} />
}
