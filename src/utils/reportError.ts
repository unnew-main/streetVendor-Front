import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { goAlert } from './goAlert'

export const ReportError = (errorString: string) => {
  const navigator = React.useContext(NavigationContext)

  console.log('ReportError string: ', errorString)
  if (errorString.lastIndexOf('401') !== -1) {
    console.log('401 ERROR')
    goAlert('세션이 만료되었습니다.', '다시 로그인해주세요.', () =>
      navigator?.reset({ routes: [{ name: 'Login' }] }),
    )
  } else if (errorString.lastIndexOf('500') !== -1) {
    console.log('500 ERROR')
    goAlert('서버에 문제가 발생했습니다.', '', () =>
      navigator?.reset({ routes: [{ name: 'Splash' }] }),
    )
  } else {
    goAlert(errorString)
  }
}
