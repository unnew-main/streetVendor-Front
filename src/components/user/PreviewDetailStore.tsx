import { StoreDetailType } from '@/types/storeType'
import React from 'react'
import styled from 'styled-components/native'

type Props = {
  storeInfo: StoreDetailType
}
export const PreviewDetailStore = ({ storeInfo }: Props) => {
  console.log(storeInfo.name)
  return (
    <Container>
      <StoreNameWrapper>
        <TitleText>{storeInfo.name}</TitleText>
      </StoreNameWrapper>
    </Container>
  )
}

const Container = styled.View`
  bottom: 0%;
  left: 0%;
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: white;
`

const StoreNameWrapper = styled.View``

const TitleText = styled.Text``
