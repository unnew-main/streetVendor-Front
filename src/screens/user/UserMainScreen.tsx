import {
  NMap,
  PreviewDetailStore,
  StateStoreToogle,
  SideMenu as Menu,
} from '@/components/user'
import { StoreDetailType } from '@/types/store.type'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import SideMenu from 'react-native-side-menu-updated'
import { SideMoreButton } from '@/components/common'
type Props = {
  handleClickMapPin: (item?: StoreDetailType) => void
  isClickMapPin: boolean
  detailStoreInfo: StoreDetailType | null
  showAllStore: boolean
  setShowAllStore: React.Dispatch<React.SetStateAction<boolean>>
  isSideMenu: boolean
  handleSideMenu: (e?: boolean) => void
}

export const UserMainScreen = ({
  handleClickMapPin,
  isClickMapPin,
  detailStoreInfo,
  showAllStore,
  setShowAllStore,
  isSideMenu,
  handleSideMenu,
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
          justifyContent: 'center',
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
          <PreviewDetailStore storeInfo={detailStoreInfo} />
        )}
        <SideMoreButtonWrapper>
          <SideMoreButton handleClick={handleSideMenu} />
        </SideMoreButtonWrapper>

        <StateStoreToogleWrapper>
          <StateStoreToogle
            isEnabled={showAllStore}
            toggleSwitch={setShowAllStore}
          />
        </StateStoreToogleWrapper>
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
