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
  GoogleSigninButton,
} from '@react-native-community/google-signin'
import { setIdTokenStorage, getIdTokenStorage } from '@/storage/token'

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
  const [userInfo, setUserInfo] = useState<userInfoType | null>(null)
  const [token, setToken] = useState<string | null>(null)

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

  useEffect(() => {
    setIdTokenStorage(token)
  }, [token])

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices()
      const data = await GoogleSignin.signIn()
      setUserInfo(data.user)
      setToken(data.idToken)
      setIsLogin(true)
    } catch (error: any) {
      setIsLogin(false)
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
    const tokendata = await getIdTokenStorage()
    console.log('nowIdToen get', tokendata)
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
