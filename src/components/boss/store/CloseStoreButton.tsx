import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>
  handleStore: (id: number, isOpen: boolean) => void
}

export const CloseStoreButton = ({
  storeId,
  setIsOpen,
  handleStore,
}: Props) => {
  const { onLoading, offLoading } = useLoading()

  const handleClose = useCallback(async () => {
    try {
      onLoading()
      await storeApi.closeStore(storeId)
      console.log('가게닫기완료')
      setIsOpen('CLOSED')
      handleStore(storeId, false)
      goAlert('영업이 종료되었습니다.')
    } catch (error) {
      console.log('CLOSED Store Error:', error)
      if (error instanceof Error) {
        ReportError(error.message)
      }
    }
    offLoading()
  }, [handleStore, offLoading, onLoading, setIsOpen, storeId])

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
  background-color: gray;
  border-radius: 10px;
`

const ButtonContent = styled.Text`
  color: black;

  font-weight: bold;
`
