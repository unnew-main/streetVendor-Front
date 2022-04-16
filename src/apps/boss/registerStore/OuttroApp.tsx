import { OuttroScrreen } from '@/screens/boss/registerStore'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'

export const OuttroApp = () => {
  const navigator = React.useContext(NavigationContext)

  const handleNextRouter = () => {
    navigator?.reset({ routes: [{ name: 'BossSplash' }] })
  }
  const handlePrevRouter = () => {
    navigator?.goBack()
  }
  return (
    <OuttroScrreen
      handleNextRouter={handleNextRouter}
      handlePrevRouter={handlePrevRouter}
    />
  )
}
