import { IntroScreen } from '@/screens/boss/registerStore'
import React from 'react'

export const IntroApp = ({ navigation: { navigate } }) => {
  const handleRouter = () => {
    navigate('SetStoreName')
  }
  return <IntroScreen handleRouter={handleRouter} />
}
