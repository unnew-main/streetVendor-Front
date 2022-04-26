import { LoadingContextProvider } from '@/contexts/LoadingContext'
import { useContext } from 'react'

export const useLoading = () => {
  const { onLoading, offLoading } = useContext(LoadingContextProvider)
  return { onLoading, offLoading }
}
