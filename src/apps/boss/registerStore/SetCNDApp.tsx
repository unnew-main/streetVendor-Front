import { SetCNDScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/types/route.type'
import { StoreCategory } from '@/types/store.type'
import { goAlert } from '@/utils/goAlert'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetCND'>
  data: {
    category: StoreCategory['value']
    name: string
    storeDescription: string
    paymentMethods: string[]
    locationDescription: string
  }
  handle: {
    handleCategory: (data: StoreCategory['value']) => void
    handleName: (data: string) => void
    handleDescription: (data: string) => void
    handlePaymentMethods: (data: string[]) => void
    handleLocationDescription: (data: string) => void
  }
}

export const SetCNDApp = ({
  navigation: { navigate },
  data,
  handle,
}: Props) => {
  const [isCheckCASH, setIsCheckCASH] = useState<boolean>(
    data.paymentMethods.indexOf('CASH') === -1 ? false : true,
  )
  const [
    isCheckACCOUNT_TRANSFER,
    setIsCheckACCOUNT_TRANSFER,
  ] = useState<boolean>(
    data.paymentMethods.indexOf('ACCOUNT_TRANSFER') === -1 ? false : true,
  )

  const handleCheckCASH = useCallback(
    (props: boolean) => setIsCheckCASH(props),
    [],
  )
  const handleCheckACCOUNT_TRANSFER = useCallback(
    (props: boolean) => setIsCheckACCOUNT_TRANSFER(props),
    [],
  )

  const handleNextRouter = useCallback(() => {
    if (isCheckCASH && isCheckACCOUNT_TRANSFER) {
      handle.handlePaymentMethods(['CASH', 'ACCOUNT_TRANSFER'])
    } else if (isCheckCASH || isCheckACCOUNT_TRANSFER) {
      isCheckCASH && handle.handlePaymentMethods(['CASH'])
      isCheckACCOUNT_TRANSFER &&
        handle.handlePaymentMethods(['ACCOUNT_TRANSFER'])
    }
    if (data.category === null) {
      goAlert('카테고리를 선택해주세요')
    } else if (data.name === '') {
      goAlert('가게 이름을 입력해주세요')
    } else if (data.storeDescription === '') {
      goAlert('가게 설명을 입력해주세요')
    } else if (data.locationDescription === '') {
      goAlert('가게 위치 설명을 입력해주세요')
    } else if (!(isCheckCASH || isCheckACCOUNT_TRANSFER)) {
      goAlert('결제 방식을 선택해주세요')
    } else {
      navigate('SetLocation')
    }
  }, [
    data.category,
    data.storeDescription,
    data.locationDescription,
    data.name,
    handle,
    isCheckACCOUNT_TRANSFER,
    isCheckCASH,
    navigate,
  ])

  return (
    <SetCNDScreen
      handleNextRouter={handleNextRouter}
      data={data}
      handle={handle}
      isCheck={{ isCheckCASH, isCheckACCOUNT_TRANSFER }}
      isCheckHandle={{ handleCheckCASH, handleCheckACCOUNT_TRANSFER }}
    />
  )
}
