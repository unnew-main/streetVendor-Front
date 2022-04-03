import React from 'react'
import {
  GoogleLoginbutton,
  GoogleLogoutbutton,
  CurrentUserButton,
} from '@/apps'
import { View } from 'react-native'

export default function LoginPage() {
  return (
    <View>
      <GoogleLoginbutton />
      <GoogleLogoutbutton />
      <CurrentUserButton />
    </View>
  )
}
