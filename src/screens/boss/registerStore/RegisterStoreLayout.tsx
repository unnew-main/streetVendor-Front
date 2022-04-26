import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

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
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <TouchableOpacity onPress={() => handleBackRouter()}>
        <Text>이전</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity onPress={handleNextRouter}>
        <Text>다음</Text>
      </TouchableOpacity>
      <View>{children}</View>
    </View>
  )
}
