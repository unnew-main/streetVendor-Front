import { StoreInfoScreen } from '@/screens/boss/store'
import { StoreDetailType } from '@/types/storeType'
import { NavigationContext } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'

type Props = {
  storeData: StoreDetailType
}
export const StoreInfoApp = ({ storeData }: Props) => {
  const [isOpen, setIsOpen] = useState<'CLOSED' | 'OPEN'>(storeData.salesStatus)

  useEffect(() => {
    setIsOpen(storeData.salesStatus)
  }, [storeData.salesStatus])
  const navigator = React.useContext(NavigationContext)
  const handleBackList = () => {
    navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
  }
  return (
    <StoreInfoScreen
      storeData={storeData}
      handleBackList={handleBackList}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    />
  )
}
