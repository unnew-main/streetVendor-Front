import React from 'react'
// import { SocialParameters } from '../../../types/instances';
import { Image, Platform, Text, TouchableOpacity } from 'react-native'
// import { classes, vw } from '../../../functions';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin'
// import config from '../../../config';
// import axios from '../../../plugins/axios';
// import { AxiosDataResponse, SNSLoginResponse } from '../../../types/responses';

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

export class Login2 extends React.Component {
  async signIn() {
    try {
      await GoogleSignin.hasPlayServices()
      const user = await GoogleSignin.signIn()
      console.log('success', user)
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

  render() {
    return (
      <TouchableOpacity
        onPress={this.signIn.bind(this)}
        // style={classes('mx-15 w-80 h-80 rounded-40 flex-center bg-google')}
      >
        <Text>login2Button</Text>
      </TouchableOpacity>
    )
  }
}
