import { IntroScreen } from '@/screens/boss/registerStore'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'

export const IntroApp = () => {
  const navigator = React.useContext(NavigationContext)

  const handleNextRouter = () => {
    navigator?.navigate('SetCND')
  }

  const handlePrevRouter = () => {
    navigator?.reset({ routes: [{ name: 'Home' }] })
  }
  return (
    <IntroScreen
      handleNextRouter={handleNextRouter}
      handlePrevRouter={handlePrevRouter}
    />
  )
}
