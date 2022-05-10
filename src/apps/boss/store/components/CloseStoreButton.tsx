import { storeApi } from '@/apis'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>
}

export const CloseStoreButton = ({ storeId, setIsOpen }: Props) => {
  const handleClose = useCallback(async () => {
    try {
      await storeApi.changeStateStore(storeId, 'CLOSED')
      console.log('가게닫기완료')
      setIsOpen('CLOSED')
      goAlert('영업이 종료되었습니다.')
    } catch (e) {
      console.log('CLOSED Store Error:', e)
    }
  }, [setIsOpen, storeId])

  return (
    <ButtonContainer onPress={handleClose}>
      <ButtonContent>가게 마감하기</ButtonContent>
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
