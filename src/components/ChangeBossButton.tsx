import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ChangeBossButton = () => {
  const navigator = React.useContext(NavigationContext)

  const handlePressBoss = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'BossStack' }] })
  }, [navigator])

  return (
    <TouchableOpacity onPress={handlePressBoss}>
      <Text>사장님 계정으로 전환</Text>
    </TouchableOpacity>
  )
}
