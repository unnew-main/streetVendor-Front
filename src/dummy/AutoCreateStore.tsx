import { storeApi } from '@/apis/storeApi'
import { goAlert } from '@/utils/goAlert'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'
import { dummyRegisterStore1, dummyRegisterStore2 } from './registerStore'

// !! 테스트용

export const AutoCreateStore = () => {
  const navigator = React.useContext(NavigationContext)

  const handleClick = useCallback(async () => {
    try {
      await storeApi.createStore(dummyRegisterStore1)
      await storeApi.createStore(dummyRegisterStore2)
      navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
    } catch (e) {
      goAlert('자동 가게 생성 실패!', String(e))
    }
  }, [navigator])

  return (
    <ButtonWrapper onPress={handleClick}>
      <ButtonContent>자동 가게 생성하기</ButtonContent>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid orange;
`
const ButtonContent = styled.Text`
  color: orange;
`
