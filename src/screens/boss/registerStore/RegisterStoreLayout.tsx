import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type RegisterStoreLayoutType = React.PropsWithChildren<{
  title: string
  handleNextRouter: () => void
  beforeBackSave?: () => void
}>

export const RegisterStoreLayout = ({
  title,
  handleNextRouter,
  beforeBackSave,
  children,
}: RegisterStoreLayoutType) => {
  const navigator = React.useContext(NavigationContext)
  const handleBackRouter = useCallback(() => {
    try {
      if (beforeBackSave) {
        beforeBackSave()
      }
      navigator?.goBack()
    } catch (error) {
      if (error instanceof Error) {
        ReportError(error.message)
      } else {
        goAlert(String(error))
      }
    }
  }, [beforeBackSave, navigator])
  return (
    <Container>
      <Header>
        <ButtonWrapper onPress={() => handleBackRouter()}>
          <Text>이전</Text>
        </ButtonWrapper>
        <Text style={{ color: 'red' }}>{title}</Text>
        <ButtonWrapper onPress={handleNextRouter}>
          <Text>다음</Text>
        </ButtonWrapper>
      </Header>

      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  )
}

const Container = styled(SafeAreaView)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: space-around;
  align-items: center;
`
const ContentWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid black;
  background-color: white;
  padding: 10px;
`
