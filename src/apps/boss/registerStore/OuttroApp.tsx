import { OuttroScrreen } from '@/screens/boss/registerStore'
import { NavigationContext } from '@react-navigation/native'
import React from 'react'

export const OuttroApp = () => {
  const navigator = React.useContext(NavigationContext)

  const handleRouter = () => {
    navigator?.reset({ routes: [{ name: 'BossSplash' }] })
  }
  return <OuttroScrreen handleRouter={handleRouter} />
}
