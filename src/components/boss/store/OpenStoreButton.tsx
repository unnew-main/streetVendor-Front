import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>
  handleOpenStore: (id: number) => void
}

export const OpenStoreButton = ({
  storeId,
  setIsOpen,
  handleOpenStore,
}: Props) => {
  const { onLoading, offLoading } = useLoading()
  const handleOpen = useCallback(async () => {
    try {
      onLoading()
      await storeApi.openStore(storeId)
      console.log('가게오픈완료')
      handleOpenStore(storeId)
      setIsOpen('OPEN')
      goAlert('영업이 시작되었습니다.')
      offLoading()
    } catch (e: unknown) {
      offLoading()
      goAlert('이미 오픈된 가게가 있습니다!')

      console.log('Open Store Error:', e)
    }
  }, [handleOpenStore, offLoading, onLoading, setIsOpen, storeId])

  return (
    <ButtonContainer onPress={handleOpen}>
      <ButtonContent>가게 오픈하기</ButtonContent>
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
  background-color: green;
  border-radius: 10px;
`

const ButtonContent = styled.Text`
  color: white;

  font-weight: bold;
`
