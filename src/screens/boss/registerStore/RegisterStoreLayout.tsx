import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type RegisterStoreLayoutType = React.PropsWithChildren<{
  title: string
  handleRouter: () => void
}>

export const RegisterStoreLayout = ({
  title,
  handleRouter,
  children,
}: RegisterStoreLayoutType) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Text>{title}</Text>
      <TouchableOpacity onPress={handleRouter}>
        <Text>다음</Text>
      </TouchableOpacity>
      <View>{children}</View>
    </View>
  )
}
