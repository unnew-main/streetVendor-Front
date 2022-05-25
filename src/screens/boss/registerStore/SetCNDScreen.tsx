import React from 'react'

import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import CheckBox from '@react-native-community/checkbox'
import { StoreCategory } from '@/types/store.type'
import { CustomPicker, CustomTextInput } from '@/components/common'
import { ScrollView } from 'react-native-gesture-handler'
type Props = {
  handleNextRouter: () => void
  data: {
    category: string
    name: string
    storeDescription: string
    paymentMethods: string[]
    locationDescription: string
  }
  handle: {
    handleCategory: (data: string) => void
    handleName: (data: string) => void
    handleDescription: (data: string) => void
    handlePaymentMethods: (data: string[]) => void
    handleLocationDescription: (data: string) => void
  }
  isCheck: { isCheckCASH: boolean; isCheckACCOUNT_TRANSFER: boolean }
  isCheckHandle: {
    handleCheckCASH: (data: boolean) => void
    handleCheckACCOUNT_TRANSFER: (data: boolean) => void
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
export const SetCNDScreen = ({
  handleNextRouter,
  data,
  handle,
  isCheck,
  isCheckHandle,
}: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <RegisterStoreLayout title="카테고리" handleNextRouter={handleNextRouter}>
        <ScrollView>
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
              value={isCheck.isCheckCASH}
              onValueChange={newValue =>
                isCheckHandle.handleCheckCASH(newValue)
              }
            />
            <Text>계좌이체</Text>

            <CheckBox
              disabled={false}
              value={isCheck.isCheckACCOUNT_TRANSFER}
              onValueChange={newValue =>
                isCheckHandle.handleCheckACCOUNT_TRANSFER(newValue)
              }
            />
          </View>
        </ScrollView>
      </RegisterStoreLayout>
    </KeyboardAvoidingView>
  )
}
