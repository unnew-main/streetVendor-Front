import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  isOpen: 'CLOSED' | 'OPEN'
}

export const RemoveStoreButton = ({ storeId, isOpen }: Props) => {
  const { onLoading, offLoading } = useLoading()
  const navigator = React.useContext(NavigationContext)

  const handleOpen = useCallback(async () => {
    if (isOpen === 'OPEN') {
      goAlert('먼저 가게 운영을 종료해주세요!')
      return
    }
    try {
      //!! 예 아니오 모달버튼 필요
      // goAlert('가게를 삭제하시겠습니까?')
      onLoading()
      await storeApi.removeStore(storeId)
      console.log('가게 삭제 완료')
      goAlert('가게가 삭제되었습니다.')
      offLoading()
      navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
    } catch (e: unknown) {
      offLoading()
      console.log('Open Store Error:', e)
    }
  }, [isOpen, navigator, offLoading, onLoading, storeId])

  return (
    <ButtonContainer onPress={handleOpen}>
      <ButtonContent>가게 삭제하기</ButtonContent>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border: 1px solid black;
  background-color: red;
  border-radius: 10px;
`

const ButtonContent = styled.Text`
  color: white;

  font-weight: bold;
`
