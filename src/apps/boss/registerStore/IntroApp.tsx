import { IntroScreen } from '@/screens/boss/registerStore'
import { NavigationContext } from '@react-navigation/native'
import React, { useCallback } from 'react'

export const IntroApp = () => {
  const navigator = React.useContext(NavigationContext)

  const handleNextRouter = useCallback(() => {
    navigator?.navigate('SetCND')
  }, [navigator])

  const handlePrevRouter = useCallback(() => {
    navigator?.reset({ routes: [{ name: 'Home' }] })
  }, [navigator])
  return (
    <IntroScreen
      handleNextRouter={handleNextRouter}
      handlePrevRouter={handlePrevRouter}
    />
  )
}
