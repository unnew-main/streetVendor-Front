import React, { useState } from 'react'
import { SplashScreen } from '@/screens'
import { NavigationContext } from '@react-navigation/native'

export const BossSplashApp = () => {
  const navigator = React.useContext(NavigationContext)

  const [nowState, setNowState] = useState<string>('가게 정보 확인중...')

  return <SplashScreen nowState={nowState} />
}
