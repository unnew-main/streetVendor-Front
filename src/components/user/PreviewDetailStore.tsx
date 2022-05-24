import { StoreDetailType } from '@/types/store.type'
import React, { useRef, useState } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'
import { DetailStore } from './DetailStore'

type Props = {
  storeInfo: StoreDetailType
}
export const PreviewDetailStore = ({ storeInfo }: Props) => {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)

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

          <TitleText>가게이름: {storeInfo.name}</TitleText>
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
  height: 100%;
  border-top-width: 1px;
  border-top-color: gray;
  border-top-style: solid;
`
