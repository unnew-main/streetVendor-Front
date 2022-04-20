import React, { createContext, useCallback, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

export const LoadingContextProvider = createContext({
  onLoading: () => {},
  offLoading: () => {},
})

type LoadingContextProps = React.PropsWithChildren<{}>

export const LoadingContext = ({ children }: LoadingContextProps) => {
  const [isLoading, setIsLoading] = useState(false)
  console.log(isLoading)
  const onLoading = useCallback(() => {
    console.log('loading strat')
    setIsLoading(true)
    // setTimeout(() => setIsLoading(false), 3000)
  }, [])

  const offLoading = useCallback(() => {
    console.log('loading end')

    setIsLoading(false)
  }, [])

  return (
    <LoadingContextProvider.Provider value={{ onLoading, offLoading }}>
      {children}

      <View
        pointerEvents={isLoading ? 'auto' : 'none'}
        style={{
          opacity: isLoading ? 1 : 0,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,1)',
            opacity: 0.4,
          }}
        />
        <ActivityIndicator size="large" color="#090808" />
      </View>
    </LoadingContextProvider.Provider>
  )
}
