import React, { useEffect, useState } from 'react'
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
  GoogleSigninButton,
} from '@react-native-community/google-signin'

type userInfoType = {
  email: string | null
  familyName: string | null
  givenName: string | null
  id: string | null
  name: string | null
  photo: string | null
}
export const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<userInfoType | null>()
  const [token, setToken] = useState<string | null>()

  useEffect(() => {
    //clientId 숨겨야함!!!
    GoogleSignin.configure({
      webClientId:
        '328856282923-prkof1vnb5haq7psquq9inkq4opb8iah.apps.googleusercontent.com',
      androidClientId:
        '328856282923-r382lh7ngu84o47gmqc6rcref7gfj5m8.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: false,
      accountName: '',
      iosClientId:
        '328856282923-0pbrrjup6i9bm3lqbc87fe2up53hpdba.apps.googleusercontent.com',
    })
  }, [])

  useEffect(() => {
    userInfo !== null ? setIsLogin(true) : setIsLogin(false)
  }, [userInfo])

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices()
      const data = await GoogleSignin.signIn()
      console.log('datais', data)
      console.log('success', data.user)
      const userString = JSON.stringify(data.user)
      setUserInfo(JSON.parse(userString))
      setToken(data.idToken)
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
      setIsLogin(false)

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
  const signOut = async () => {
    try {
      await GoogleSignin.signOut()
      setToken(null)
      setUserInfo(null) // Remember to remove the user from your app's state as well
      setIsLogin(false)
    } catch (error) {
      console.error(error)
    }
  }
  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser()
    console.log(currentUser)
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
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={getCurrentUser}
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Now User</Text>
        </TouchableOpacity>
        {isLogin && (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={signOut}
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Login Out</Text>
            </TouchableOpacity>
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
