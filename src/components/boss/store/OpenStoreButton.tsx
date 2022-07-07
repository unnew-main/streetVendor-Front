import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import styled from 'styled-components/native'

type Props = {
  storeId: number
  setIsOpen: React.Dispatch<React.SetStateAction<'CLOSED' | 'OPEN'>>
}

export const OpenStoreButton = ({ storeId, setIsOpen }: Props) => {
  const { onLoading, offLoading } = useLoading()
  const navigator = React.useContext(NavigationContext)

  const handleOpen = useCallback(async () => {
    try {
      onLoading()
      await storeApi.openStore(storeId)
      setIsOpen('OPEN')
      goAlert('영업이 시작되었습니다.')
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.lastIndexOf('409') !== -1) {
          goAlert('이미 오픈된 가게가 있습니다!')
        } else {
          ReportError(error.message, navigator)
        }
      }
    }
    offLoading()
  }, [navigator, offLoading, onLoading, setIsOpen, storeId])

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
