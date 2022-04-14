import { GoogleLogoutbutton, SignoutButton } from '@/components'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type SelectJobScreenType = {
  handlePressUser: () => void
  handlePressBoss: () => void
}
export const SelectJobScreen = ({
  handlePressUser,
  handlePressBoss,
}: SelectJobScreenType) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Image
        source={require('@/Assets/Images/TOM.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>직업선택</Text>
      <TouchableOpacity onPress={handlePressUser}>
        <Text>손님으로 입장</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressBoss}>
        <Text>사장님으로 입장</Text>
      </TouchableOpacity>
      <GoogleLogoutbutton />
      <SignoutButton />
    </View>
  )
}
