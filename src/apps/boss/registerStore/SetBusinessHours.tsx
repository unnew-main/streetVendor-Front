import { TimePicker } from '@/components/boss/registerStore'
import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'
import { CustomPicker } from '@/components/common'
import { days } from '@/constants/menuCategory'
import { StackRegisterStoreList } from '@/types/route.type'
import { BusinessHoursType } from '@/types/store.type'

import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetBusinessHours'>
  handleBusinessHours: (data: BusinessHoursType[]) => void
  busniessHours: BusinessHoursType[]
}

export type ListType = {
  id: number
  listData: BusinessHoursType
}

export const SetBusinessHours = ({
  navigation: { navigate },
  handleBusinessHours,
  busniessHours,
}: Props) => {
  const [list, setList] = useState<ListType[]>([])

  const listId = useRef(0)
  const navigator = React.useContext(NavigationContext)

  useEffect(() => {
    busniessHours.forEach(data => {
      listId.current += 1
      setList(prev =>
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
  const onAddList = useCallback(() => {
    listId.current += 1
    setList(prev =>
      prev.concat({
        id: listId.current,
        listData: {
          days: '',
          endTime: '12:00',
          startTime: '12:00',
        },
      }),
    )
  }, [])

  const onRemoveList = useCallback((id: number) => {
    setList(prev => prev.filter(data => data.id !== id))
  }, [])

  const handleUpdateList = useCallback(
    (id: number, newDay?: any, startTime?: string, endTime?: string) => {
      setList(prevList =>
        prevList.map(prevItem => {
          if (prevItem.id === id) {
            return {
              id,
              listData: {
                days: newDay ? newDay : prevItem.listData.days,
                startTime: startTime ? startTime : prevItem.listData.startTime,
                endTime: endTime ? endTime : prevItem.listData.endTime,
              },
            }
          }
          return prevItem
        }),
      )
    },
    [],
  )

  const beforeBackSave = useCallback(() => {
    list.map(data => {
      if (data.listData.days === '') {
        throw String('날짜를 선택해주세요')
      }
    })
    handleBusinessHours(list.map(data => data.listData))
  }, [handleBusinessHours, list])

  const handleNextRouter = useCallback(() => {
    try {
      if (list.length === 0) {
        throw String('운영시간를 선택해주세요')
      }
      list.map(data => {
        if (data.listData.days === '') {
          throw String('날짜를 선택해주세요')
        }
      })
      handleBusinessHours(list.map(data => data.listData))
      navigate('SetMenu')
    } catch (error) {
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      } else {
        goAlert(String(error))
      }
    }
  }, [handleBusinessHours, list, navigate, navigator])

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
          <TouchableOpacity onPress={onAddList}>
            <Text style={{ color: 'blue' }}>추가하기</Text>
          </TouchableOpacity>
          {list.map(props => (
            <View key={props.id}>
              <View>
                <Text>-----------------------</Text>
                <Text>날짜를 선택해주세요</Text>
                <CustomPicker
                  onValueChange={(value: string) =>
                    handleUpdateList(props.id, value)
                  }
                  items={days}
                  value={props.listData.days}
                />
              </View>
              <Text>{props.listData.days}</Text>

              <TimePicker
                id={props.id}
                buttonName="영업 시작시간 설정"
                handleUpdateTime={handleUpdateList}
                type="start"
              />
              <Text>{props.listData.startTime}</Text>

              <TimePicker
                id={props.id}
                buttonName="영업 종료시간 설정"
                handleUpdateTime={handleUpdateList}
                type="end"
              />
              <Text>{props.listData.endTime}</Text>
              <TouchableOpacity onPress={() => onRemoveList(props.id)}>
                <Text style={{ color: 'red' }}>삭제</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </RegisterStoreLayout>
  )
}
