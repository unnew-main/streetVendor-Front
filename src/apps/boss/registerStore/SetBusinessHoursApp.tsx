import { SetBusinessHoursScreen } from '@/screens/boss/registerStore'
import {
  BusinessHoursType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { goAlert } from '@/util/goAlert'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useRef, useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetBusinessHours'>
  handleBusinessHours: (data: BusinessHoursType[]) => void
}

export type ListType = {
  id: number
  listData: BusinessHoursType
}

export const SetBusinessHoursApp = ({
  navigation: { navigate },
  handleBusinessHours,
}: Props) => {
  const [list, setList] = useState<ListType[]>([])

  const listId = useRef(0)

  const onAddList = useCallback(() => {
    listId.current += 1
    setList(prev =>
      prev.concat({
        id: listId.current,
        listData: {
          day: '',
          endTime: {
            hour: '12',
            minute: '00',
            nano: 0,
            second: '0',
          },
          startTime: {
            hour: '12',
            minute: '00',
            nano: 0,
            second: '0',
          },
        },
      }),
    )
  }, [])

  const onRemoveList = useCallback((id: number) => {
    setList(prev => prev.filter(data => data.id !== id))
  }, [])

  const handleUpdateList = useCallback(
    (
      id: number,
      newDay?: any,
      startTime?: { hour: string; minute: string },
      endTime?: { hour: string; minute: string },
    ) => {
      setList(prevList =>
        prevList.map(prevItem => {
          if (prevItem.id === id) {
            return {
              id,
              listData: {
                day: newDay ? newDay : prevItem.listData.day,
                startTime: {
                  hour: startTime
                    ? startTime.hour
                    : prevItem.listData.startTime.hour,
                  minute: startTime
                    ? startTime.minute
                    : prevItem.listData.startTime.minute,
                  nano: 0,
                  second: '0',
                },
                endTime: {
                  hour: endTime ? endTime.hour : prevItem.listData.endTime.hour,
                  minute: endTime
                    ? endTime.minute
                    : prevItem.listData.endTime.minute,
                  nano: 0,
                  second: '0',
                },
              },
            }
          }
          return prevItem
        }),
      )
    },
    [],
  )

  const handleNextRouter = useCallback(() => {
    try {
      list.map(data => {
        if (data.listData.day === '') {
          goAlert('날짜를 선택해주세요')
          throw Error
        }
      })

      handleBusinessHours(list.map(data => data.listData))
      navigate('SetMenu')
    } catch (e) {}
  }, [handleBusinessHours, list, navigate])

  return (
    <SetBusinessHoursScreen
      handleNextRouter={handleNextRouter}
      list={list}
      onAddList={onAddList}
      onRemoveList={onRemoveList}
      handleUpdateList={handleUpdateList}
    />
  )
}
