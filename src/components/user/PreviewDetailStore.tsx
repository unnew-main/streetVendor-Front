import { StoreDetailType } from '@/types/storeType'
import React, { Suspense, useRef, useState } from 'react'
import { Animated, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { DetailStore } from './DetailStore'

type Props = {
  storeInfo: StoreDetailType
}
export const PreviewDetailStore = ({ storeInfo }: Props) => {
  console.log(storeInfo.name)
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)

  const Y = useRef(new Animated.Value(100)).current
  console.log('Y ', Y)

  const handleShowDetail = () => {
    setIsOpenDetail(prev => !prev)
    isOpenDetail
      ? Animated.timing(Y, {
          toValue: 100,
          // easing: Easing.back(),
          duration: 500,
          useNativeDriver: false,
        }).start()
      : Animated.timing(Y, {
          toValue: 400,
          // easing: Easing.back(),
          duration: 500,
          useNativeDriver: false,
        }).start()
  }
  return (
    <Container isOpenDetail={isOpenDetail} style={{ height: Y }}>
      <TouchWrapper onPress={() => handleShowDetail()}>
        <StoreNameWrapper>
          <TitleText>{storeInfo.name}</TitleText>
        </StoreNameWrapper>
      </TouchWrapper>
      {isOpenDetail && (
        <Suspense fallback={null}>
          <DetailStore storeId={storeInfo.storeId} />
        </Suspense>
      )}
    </Container>
  )
}

const Container = styled(Animated.View)<{
  isOpenDetail: boolean
}>`
  top: 0%;
  left: 0%;
  position: absolute;
  width: 100%;
  background-color: white;
`

const TouchWrapper = styled.TouchableOpacity`
  height: 100px;
`

const StoreNameWrapper = styled.View``

const TitleText = styled.Text``

const DetailContainer = styled.View``
