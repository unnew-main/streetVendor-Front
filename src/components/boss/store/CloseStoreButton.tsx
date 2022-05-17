import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>
  handleClosedStore: (id: number) => void
}

export const CloseStoreButton = ({
  storeId,
  setIsOpen,
  handleClosedStore,
}: Props) => {
  const { onLoading, offLoading } = useLoading()

  const handleClose = useCallback(async () => {
    try {
      onLoading()
      await storeApi.closeStore(storeId)
      console.log('가게닫기완료')
      setIsOpen('CLOSED')
      handleClosedStore(storeId)
      offLoading()
      goAlert('영업이 종료되었습니다.')
    } catch (e) {
      offLoading()
      console.log('CLOSED Store Error:', e)
    }
  }, [handleClosedStore, offLoading, onLoading, setIsOpen, storeId])

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
