import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type RegisterStoreLayoutType = React.PropsWithChildren<{
  title: string
  handleNextRouter: () => void
}>

export const RegisterStoreLayout = ({
  title,
  handleNextRouter,
  children,
}: RegisterStoreLayoutType) => {
  const navigator = React.useContext(NavigationContext)

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <TouchableOpacity onPress={() => navigator?.goBack()}>
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
