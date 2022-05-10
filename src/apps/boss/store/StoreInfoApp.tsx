import { StoreInfoScreen } from '@/screens/boss/store'
import { StoreDetailType } from '@/types/storeType'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'

type Props = {
  storeData: StoreDetailType
}
export const StoreInfoApp = ({ storeData }: Props) => {
  const navigator = React.useContext(NavigationContext)
  const handleBackList = () => {
    navigator?.goBack()
  }
  return (
    <StoreInfoScreen storeData={storeData} handleBackList={handleBackList} />
  )
}
