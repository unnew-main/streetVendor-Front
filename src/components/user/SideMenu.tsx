import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type Props = {
  handleClosed: (e?: boolean) => void
}
export const SideMenu = ({ handleClosed }: Props) => {
  return (
    <SafeAreaView>
      <MenuClosedButton onPress={() => handleClosed(false)}>
        <Text>닫아라</Text>
      </MenuClosedButton>
      <Text>SideMenu</Text>
    </SafeAreaView>
  )
}

const MenuClosedButton = styled.TouchableOpacity`
  border: 1px solid black;
`
