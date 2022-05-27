import {
  NMap,
  PreviewDetailStore,
  StateStoreToogle,
  SideMenu as Menu,
} from '@/components/user'
import { StorePinType } from '@/types/store.type'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import SideMenu from 'react-native-side-menu-updated'
import { SideMoreButton } from '@/components/common'
type Props = {
  handleClickMapPin: (item?: StorePinType) => void
  isClickMapPin: boolean
  detailStoreInfo: StorePinType | null
  showAllStore: boolean
  setShowAllStore: React.Dispatch<React.SetStateAction<boolean>>
  isSideMenu: boolean
  handleSideMenu: (e?: boolean) => void
  isOpenDetail: boolean
  setIsOpenDetail: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserMainScreen = ({
  handleClickMapPin,
  isClickMapPin,
  detailStoreInfo,
  showAllStore,
  setShowAllStore,
  isSideMenu,
  handleSideMenu,
  isOpenDetail,
  setIsOpenDetail,
}: Props) => {
  return (
    <SideMenu
      isOpen={isSideMenu}
      onChange={handleSideMenu}
      menu={<Menu handleClosed={handleSideMenu} />}
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
