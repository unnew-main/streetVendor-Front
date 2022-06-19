import React, { useCallback, useState } from 'react'

import { StorePinType } from '@/types/store.type'
import styled from 'styled-components/native'
import SideMenu from 'react-native-side-menu-updated'
import { View } from 'react-native'
import {
  NMap,
  PreviewDetailStore,
  StateStoreToogle,
  SideMenuSection,
} from '@/components/user'
import { SideMoreButton } from '@/components/common'

export const UserMain = () => {
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
  return (
    <SideMenu
      isOpen={isSideMenu}
      onChange={handleSideMenu}
      menu={<SideMenuSection handleClosed={handleSideMenu} />}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <NaverMapWrapper>
          <NMap
            showAllStore={showAllStore}
            handleClickMapPin={handleClickMapPin}
          />
        </NaverMapWrapper>
        {isClickMapPin && detailStoreInfo && (
          <PreviewDetailStore
            isOpenDetail={isOpenDetail}
            setIsOpenDetail={setIsOpenDetail}
            storeInfo={detailStoreInfo}
          />
        )}
        {!isOpenDetail && (
          <>
            <SideMoreButtonWrapper>
              <SideMoreButton handleClick={handleSideMenu} />
            </SideMoreButtonWrapper>

            <StateStoreToogleWrapper>
              <StateStoreToogle
                isEnabled={showAllStore}
                toggleSwitch={setShowAllStore}
              />
            </StateStoreToogleWrapper>
          </>
        )}
      </View>
    </SideMenu>
  )
}

const NaverMapWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`

const StateStoreToogleWrapper = styled.View`
  position: absolute;
  top: 10%;
  right: 10%;
`

const SideMoreButtonWrapper = styled.View`
  position: absolute;
  top: 10%;
  left: 10%;
`
