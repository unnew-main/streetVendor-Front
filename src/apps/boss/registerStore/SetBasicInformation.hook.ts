import { useCallback, useState } from 'react'

export const useInformation = (paymentMethods: string[]) => {
  const [isCheckCASH, setIsCheckCASH] = useState<boolean>(
    paymentMethods.indexOf('CASH') === -1 ? false : true,
  )
  const [
    isCheckACCOUNT_TRANSFER,
    setIsCheckACCOUNT_TRANSFER,
  ] = useState<boolean>(
    paymentMethods.indexOf('ACCOUNT_TRANSFER') === -1 ? false : true,
  )

  const handleCheckCASH = useCallback(
    (props: boolean) => setIsCheckCASH(props),
    [],
  )
  const handleCheckACCOUNT_TRANSFER = useCallback(
    (props: boolean) => setIsCheckACCOUNT_TRANSFER(props),
    [],
  )

  return {
    isCheckCASH,
    isCheckACCOUNT_TRANSFER,
    handleCheckCASH,
    handleCheckACCOUNT_TRANSFER,
  }
}
