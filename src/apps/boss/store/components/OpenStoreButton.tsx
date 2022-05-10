import { storeApi } from '@/apis'
import { goAlert } from '@/utils/goAlert'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>
}

export const OpenStoreButton = ({ storeId, setIsOpen }: Props) => {
  const handleOpen = useCallback(async () => {
    try {
      await storeApi.changeStateStore(storeId, 'OPEN')
      console.log('가게오픈완료')
      setIsOpen('OPEN')
      goAlert('영업이 시작되었습니다.')
    } catch (e: unknown) {
      goAlert('이미 오픈된 가게가 있습니다!')

      console.log('Open Store Error:', e)
    }
  }, [setIsOpen, storeId])

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
