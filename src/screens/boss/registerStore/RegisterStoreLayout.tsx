import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
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
    } catch (e) {}
  }, [beforeBackSave, navigator])
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => handleBackRouter()}>
          <Text>이전</Text>
        </TouchableOpacity>
        <Text style={{ color: 'red' }}>{title}</Text>
        <TouchableOpacity onPress={handleNextRouter}>
          <Text>다음</Text>
        </TouchableOpacity>
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
