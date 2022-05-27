import React, { useCallback, useState } from 'react'

import { UserMainScreen } from '@/screens/user'
import { StorePinType } from '@/types/store.type'

export const UserMainApp = () => {
  const [showAllStore, setShowAllStore] = useState(false)
  const [isSideMenu, setIsSideMenu] = useState(false)
  const [isClickMapPin, setIsClickMapPin] = useState<boolean>(false)
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)

  const [detailStoreInfo, setDetailStoreInfo] = useState<StorePinType | null>(
    null,
  )

  const handleClickMapPin = useCallback(
    (item?: StorePinType) => {
      setIsOpenDetail(false)
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
  const handleSideMenu = (data?: boolean) => {
    if (data !== undefined) {
      setIsSideMenu(data)
    } else if (data === undefined) {
      setIsSideMenu(prev => !prev)
    }
  }
  console.log('isSideMenum', isSideMenu)
  return (
    <UserMainScreen
      handleClickMapPin={handleClickMapPin}
      isClickMapPin={isClickMapPin}
      detailStoreInfo={detailStoreInfo}
      showAllStore={showAllStore}
      setShowAllStore={setShowAllStore}
      isSideMenu={isSideMenu}
      handleSideMenu={handleSideMenu}
      isOpenDetail={isOpenDetail}
      setIsOpenDetail={setIsOpenDetail}
    />
  )
}
