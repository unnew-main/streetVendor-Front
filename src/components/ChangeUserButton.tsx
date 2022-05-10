import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ChangeUserButton = () => {
  const navigator = React.useContext(NavigationContext)

  const handlePressUser = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'UserMain' }] })
  }, [navigator])

  return (
    <TouchableOpacity onPress={handlePressUser}>
      <Text>손님 계정으로 전환</Text>
    </TouchableOpacity>
  )
}
