import { TimePicker } from '@/components/boss/registerStore'
import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'
import { CustomPicker } from '@/components/common'
import { days } from '@/constants/list'
import { StackRegisterStoreList } from '@/types/route.type'
import { BusinessHoursType } from '@/types/store.type'

import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDates } from './SetBusinessHours.hook'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetBusinessHours'>
  handleBusinessHours: (data: BusinessHoursType[]) => void
  busniessHours: BusinessHoursType[]
}

export const SetBusinessHours = ({
  navigation: { navigate },
  handleBusinessHours,
  busniessHours,
}: Props) => {
  const navigator = React.useContext(NavigationContext)
  const {
    listId,
    dateList,
    setDateList,
    onAddDate,
    onRemoveDate,
    onUpdateDate,
  } = useDates()

  useEffect(() => {
    busniessHours.forEach(data => {
      listId.current += 1
      setDateList(prev =>
        prev.concat({
          id: listId.current,
          listData: {
            days: data.days,
            endTime: data.endTime,
            startTime: data.startTime,
          },
        }),
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const beforeBackSave = useCallback(() => {
    dateList.map(data => {
      if (data.listData.days === '') {
        throw String('날짜를 선택해주세요')
      }
    })
    handleBusinessHours(dateList.map(data => data.listData))
  }, [dateList, handleBusinessHours])

  const handleNextRouter = useCallback(() => {
    try {
      if (dateList.length === 0) {
        throw String('운영시간를 선택해주세요')
      }
      dateList.map(data => {
        if (data.listData.days === '') {
          throw String('날짜를 선택해주세요')
        }
      })
      handleBusinessHours(dateList.map(data => data.listData))
      navigate('SetMenu')
    } catch (error) {
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      } else {
        goAlert(String(error))
      }
    }
  }, [dateList, handleBusinessHours, navigate, navigator])

  return (
    <RegisterStoreLayout
      title="오픈일"
      handleNextRouter={handleNextRouter}
      beforeBackSave={beforeBackSave}
    >
      <ScrollView style={{ width: '100%' }}>
        <View>
          <Text>SetBusinessHoursScreen</Text>
        </View>
        <View>
          <TouchableOpacity onPress={onAddDate}>
            <Text style={{ color: 'blue' }}>추가하기</Text>
          </TouchableOpacity>
          {dateList.map(props => (
            <View key={props.id}>
              <View>
                <Text>-----------------------</Text>
                <Text>날짜를 선택해주세요</Text>
                <CustomPicker
                  onValueChange={(value: string) =>
                    onUpdateDate(props.id, value)
                  }
                  items={days}
                  value={props.listData.days}
                />
              </View>
              <Text>{props.listData.days}</Text>

              <TimePicker
                id={props.id}
                buttonName="영업 시작시간 설정"
                handleUpdateTime={onUpdateDate}
                type="start"
              />
              <Text>{props.listData.startTime}</Text>

              <TimePicker
                id={props.id}
                buttonName="영업 종료시간 설정"
                handleUpdateTime={onUpdateDate}
                type="end"
              />
              <Text>{props.listData.endTime}</Text>
              <TouchableOpacity onPress={() => onRemoveDate(props.id)}>
                <Text style={{ color: 'red' }}>삭제</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </RegisterStoreLayout>
  )
}
