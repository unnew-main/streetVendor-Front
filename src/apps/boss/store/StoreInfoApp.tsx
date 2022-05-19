import { StoreInfoScreen } from '@/screens/boss/store'
import { StoreDetailType } from '@/types/store.type'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

type Props = {
  storeData: StoreDetailType
  handleStore: (id: number, isOpen: boolean) => void
}
export const StoreInfoApp = ({ storeData, handleStore }: Props) => {
  const [isOpen, setIsOpen] = useState<'CLOSED' | 'OPEN'>(storeData.salesStatus)

  useEffect(() => {
    setIsOpen(storeData.salesStatus)
  }, [storeData.salesStatus])
  const navigator = React.useContext(NavigationContext)
  const handleBackList = () => {
    navigator?.navigate('BossStoreList')
  }
  return (
    <StoreInfoScreen
      storeData={storeData}
      handleBackList={handleBackList}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      handleStore={handleStore}
    />
  )
}
