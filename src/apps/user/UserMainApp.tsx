import React, { useCallback, useState } from 'react'

import { UserMainScreen } from '@/screens/user'
import { StoreDetailType } from '@/types/store.type'

export const UserMainApp = () => {
  const [showAllStore, setShowAllStore] = useState(false)

  const [isClickMapPin, setIsClickMapPin] = useState<boolean>(false)
  const [
    detailStoreInfo,
    setDetailStoreInfo,
  ] = useState<StoreDetailType | null>(null)

  const handleClickMapPin = useCallback(
    (item?: StoreDetailType) => {
      if (item) {
        detailStoreInfo?.storeId === item.storeId
          ? setIsClickMapPin(prev => !prev)
          : setIsClickMapPin(true)

        setDetailStoreInfo(item)
      } else {
        setDetailStoreInfo(null)
        setIsClickMapPin(false)
      }
    },
    [detailStoreInfo?.storeId],
  )
  return (
    <UserMainScreen
      handleClickMapPin={handleClickMapPin}
      isClickMapPin={isClickMapPin}
      detailStoreInfo={detailStoreInfo}
      showAllStore={showAllStore}
      setShowAllStore={setShowAllStore}
    />
  )
}
