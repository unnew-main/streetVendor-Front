import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'
import { CustomPicker, CustomTextInput } from '@/components/common'
import { StackRegisterStoreList } from '@/types/route.type'
import { StoreCategory } from '@/types/store.type'
import { goAlert } from '@/utils/goAlert'
import CheckBox from '@react-native-community/checkbox'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native'

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

const categoryData: StoreCategory[] = [
  { label: '붕어빵', value: 'BUNG_EO_PPANG' },
  { label: '타코야키', value: 'TAKOYAKI' },
  { label: '떡볶이', value: 'TTEOK_BOKKI' },
  { label: '호떡', value: 'HO_DDEOK' },
  { label: '계란빵', value: 'EGG_BREAD' },
  { label: '순대', value: 'SUNDAE' },
  { label: '기타 음식', value: 'OTHER_MEAL' },
  { label: '기타 디저트', value: 'OTHER_DESSERT' },
]

export const SetBasicInformation = ({
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <RegisterStoreLayout title="카테고리" handleNextRouter={handleNextRouter}>
        <ScrollView style={{ width: '100%' }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>SetCNDScreen</Text>
            <Text>가게 카테고리:</Text>
            <CustomPicker
              onValueChange={handle.handleCategory}
              items={categoryData}
              value={data.category}
            />
            <Text>가게 이름: </Text>
            <CustomTextInput
              onChangeText={handle.handleName}
              value={data.name}
              placeholder="가게이름을 입력해주세요."
            />
            <Text>가게 설명: </Text>
            <CustomTextInput
              onChangeText={handle.handleDescription}
              value={data.storeDescription}
              placeholder="가게설명을 입력해주세요."
            />
            <Text>가게 위치 설명: </Text>
            <CustomTextInput
              onChangeText={handle.handleLocationDescription}
              value={data.locationDescription}
              placeholder="Ex) oo역 1번출구 앞"
            />
            <Text>결제방식: </Text>
            <Text>현금결제 </Text>

            <CheckBox
              disabled={false}
              value={isCheckCASH}
              onValueChange={newValue => handleCheckCASH(newValue)}
            />
            <Text>계좌이체</Text>

            <CheckBox
              disabled={false}
              value={isCheckACCOUNT_TRANSFER}
              onValueChange={newValue => handleCheckACCOUNT_TRANSFER(newValue)}
            />
          </View>
        </ScrollView>
      </RegisterStoreLayout>
    </KeyboardAvoidingView>
  )
}
