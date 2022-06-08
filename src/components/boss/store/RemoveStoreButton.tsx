import { storeApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
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

  const handleOpen = useCallback(() => {
    if (isOpen === 'OPEN') {
      goAlert('먼저 가게 운영을 종료해주세요!')
      return
    }

    goAlert(
      '가게가 삭제하시겠습니까?',
      '한번 삭제한 가게는 되돌릴 수 없습니다.',
      true,
      async () => {
        onLoading()
        try {
          await storeApi.removeStore(storeId)
          navigator?.reset({ routes: [{ name: 'BossStoreList' }] })
          goAlert('가게가 삭제되었습니다.')
        } catch (error) {
          console.log('Open Store Error:', error)
          if (error instanceof Error) {
            ReportError(error.message, navigator)
          }
        }
        offLoading()
      },
    )
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
