import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin'

GoogleSignin.configure({
  webClientId:
    '328856282923-r382lh7ngu84o47gmqc6rcref7gfj5m8.apps.googleusercontent.com',
  offlineAccess: true,
  // forceCodeForRefreshToken: false,
  iosClientId:
    '328856282923-0pbrrjup6i9bm3lqbc87fe2up53hpdba.apps.googleusercontent.com',
})

// type Props = {
//   login: (token: string) => any
//   toRegister: (social: SocialParameters) => any
// }
type userInfoType = {
  email: string | null
  familyName: string | null
  givenName: string | null
  id: string | null
  name: string | null
  photo: string | null
}
export const Login2 = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<userInfoType>()
  const [token, setToken] = useState<string | null>()
  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices()
      const { idToken, user } = await GoogleSignin.signIn()
      console.log('success', user)
      const userString = JSON.stringify(user)
      setUserInfo(JSON.parse(userString))
      setToken(idToken)
      console.log('dataSave')
      setIsLogin(true)
      // axios
      //   .post<AxiosDataResponse, AxiosDataResponse<SNSLoginResponse>>(
      //     'member/auth/sns/signin',
      //     {
      //       id: user.id,
      //       email: user.email,
      //       sns_type: 'google',
      //       device_type: Platform.OS,
      //     },
      //   )
      //   .then(data => {
      //     if (data.token) {
      //       return this.props.login(data.token)
      //     }

      //     this.props.toRegister({
      //       id: user.id,
      //       name: user.familyName || '' + user.name,
      //       email: user.email,
      //       sns_type: 'google',
      //     })
      //   })
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated')
      } else {
        console.log(error.message)
      }
    }
  }

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ScrollView style={{ marginBottom: 100 }}>
        <TouchableOpacity
          onPress={signIn}
          style={{
            backgroundColor: 'yellow',
            width: 100,
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Google Login</Text>
        </TouchableOpacity>
        {isLogin && (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={TextStyle.txt}>idToken</Text>

            <Text>{token}</Text>

            <Text style={TextStyle.txt}>User Data</Text>
            <Text style={TextStyle.txt}>email</Text>
            <Text>{userInfo?.email}</Text>
            <Text style={TextStyle.txt}>familyName</Text>
            <Text>{userInfo?.familyName}</Text>
            <Text style={TextStyle.txt}>givenName</Text>
            <Text>{userInfo?.givenName}</Text>
            <Text style={TextStyle.txt}>id</Text>
            <Text>{userInfo?.id}</Text>
            <Text style={TextStyle.txt}>name</Text>
            <Text>{userInfo?.name}</Text>
            <Text style={TextStyle.txt}>Image</Text>
            <Image
              style={{ width: 66, height: 58 }}
              source={{ uri: userInfo?.photo }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const TextStyle = StyleSheet.create({
  txt: {
    color: 'blue',
    fontSize: 15,
  },
})
