import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NavigationContext } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-community/google-signin'
import { sessionHelper } from '@/utils/sessionHelper'
import { memberApi } from '@/apis'
import { useLoading } from '@/hooks/useLoading.hook'
import { goAlert } from '@/utils/goAlert'

export const SignoutButton = () => {
  const navigator = React.useContext(NavigationContext)
  const { onLoading, offLoading } = useLoading()
  const handleSignout = useCallback(async () => {
    onLoading()
    goAlert(
      '회원을 탈퇴하시겠습니까?',
      '유저정보, 사장정보, 가게정보가 모두 삭제됩니다.',
      async () => {
        try {
          await memberApi.signOut()
          await sessionHelper.setSession(null)
          await GoogleSignin.signOut()

          navigator?.reset({ routes: [{ name: 'Splash' }] })
          goAlert('회원탈퇴되었습니다.')
        } catch (e) {
          console.log('signOutError', e)
        }
      },
    )
    offLoading()
  }, [navigator, offLoading, onLoading])
  return (
    <TouchableOpacity
      onPress={handleSignout}
      style={{
        width: 192,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>회원탈퇴</Text>
    </TouchableOpacity>
  )
}
