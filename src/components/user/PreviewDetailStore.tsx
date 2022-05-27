import { StorePinType } from '@/types/store.type'
import React, { useRef } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'
import { DetailStore } from './DetailStore'

type Props = {
  isOpenDetail: boolean
  setIsOpenDetail: React.Dispatch<React.SetStateAction<boolean>>
  storeInfo: StorePinType
}
export const PreviewDetailStore = ({
  isOpenDetail,
  setIsOpenDetail,
  storeInfo,
}: Props) => {
  const Y = useRef(new Animated.Value(0)).current

  const handleShowDetail = () => {
    setIsOpenDetail(prev => !prev)
    isOpenDetail
      ? Animated.timing(Y, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start()
      : Animated.timing(Y, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start()
  }

  const DetailContainerHeight = Y.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '80%'],
  })
  return (
    <>
      <TouchWrapper onPress={() => handleShowDetail()}>
        <StoreNameWrapper>
          <TitleText>가게아이디: {storeInfo.storeId}</TitleText>

          <TitleText>가게이름: {storeInfo.storeName}</TitleText>
        </StoreNameWrapper>
      </TouchWrapper>
      <DetailStoreWrapper style={{ height: DetailContainerHeight }}>
        {isOpenDetail && <DetailStore storeId={storeInfo.storeId} />}
      </DetailStoreWrapper>
    </>
  )
}

const TouchWrapper = styled.TouchableOpacity`
  background-color: white;

  width: 100%;
  height: 10%;
`

const StoreNameWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const TitleText = styled.Text``

const DetailStoreWrapper = styled(Animated.View)`
  width: 100%;
  background-color: white;
  border-top-width: 1px;
  border-top-color: gray;
  border-top-style: solid;
`
