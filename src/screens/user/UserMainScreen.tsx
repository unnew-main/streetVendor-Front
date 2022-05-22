import { ChangeBossButton } from '@/components'
import { PreviewDetailStore } from '@/components/user'
import { NMap } from '@/components/user/NMap'
import { StateStoreToogle } from '@/components/user/StateStoreToogle'
import { StoreDetailType } from '@/types/store.type'
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  handleClickMapPin: (item?: StoreDetailType) => void
  isClickMapPin: boolean
  detailStoreInfo: StoreDetailType | null
  showAllStore: boolean
  setShowAllStore: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserMainScreen = ({
  handleClickMapPin,
  isClickMapPin,
  detailStoreInfo,
  showAllStore,
  setShowAllStore,
}: Props) => {
  return (
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
      <ChangeUserButtonWrapper>
        <ChangeBossButton />
      </ChangeUserButtonWrapper>
      <StateStoreToogleWrapper>
        <StateStoreToogle
          isEnabled={showAllStore}
          toggleSwitch={setShowAllStore}
        />
      </StateStoreToogleWrapper>
    </View>
  )
}

const NaverMapWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`

const ChangeUserButtonWrapper = styled.View`
  position: absolute;
  top: 10%;
  left: 10%;
`

const StateStoreToogleWrapper = styled.View`
  position: absolute;
  top: 10%;
  right: 10%;
`
