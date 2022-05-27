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
  const Y = useRef(new Animated.Value(150)).current

  const handleShowDetail = () => {
    setIsOpenDetail(prev => !prev)
    isOpenDetail
      ? Animated.timing(Y, {
          toValue: 150,
          duration: 300,
          useNativeDriver: false,
        }).start()
      : Animated.timing(Y, {
          toValue: 700,
          duration: 300,
          useNativeDriver: false,
        }).start()
  }
  return (
    <Container isOpenDetail={isOpenDetail} style={{ height: Y }}>
      <TouchWrapper onPress={() => handleShowDetail()}>
        <StoreNameWrapper>
          <TitleText>가게아이디: {storeInfo.storeId}</TitleText>

          <TitleText>가게이름: {storeInfo.storeName}</TitleText>
        </StoreNameWrapper>
      </TouchWrapper>
      <DetailStoreWrapper>
        {isOpenDetail && <DetailStore storeId={storeInfo.storeId} />}
      </DetailStoreWrapper>
    </Container>
  )
}

const Container = styled(Animated.View)<{
  isOpenDetail: boolean
}>`
  bottom: 0%;
  left: 0%;
  position: absolute;
  width: 100%;
  background-color: white;
`

const TouchWrapper = styled.TouchableOpacity`
  height: 150px;
`

const StoreNameWrapper = styled.View``

const TitleText = styled.Text``

const DetailStoreWrapper = styled.View`
  height: 550px;
  position: relative;
  border-top-width: 1px;
  border-top-color: gray;
  border-top-style: solid;
`
