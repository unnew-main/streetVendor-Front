import { SetBusinessHoursScreen } from '@/screens/boss/registerStore'
import {
  BusinessHoursType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { goAlert } from '@/utils/goAlert'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetBusinessHours'>
  handleBusinessHours: (data: BusinessHoursType[]) => void
  busniessHours: BusinessHoursType[]
}

export type ListType = {
  id: number
  listData: BusinessHoursType
}

export const SetBusinessHoursApp = ({
  navigation: { navigate },
  handleBusinessHours,
  busniessHours,
}: Props) => {
  const [list, setList] = useState<ListType[]>([])

  const listId = useRef(0)

  useEffect(() => {
    busniessHours.forEach(data => {
      listId.current += 1
      setList(prev =>
        prev.concat({
          id: listId.current,
          listData: {
            day: data.day,
            endTime: {
              hour: data.endTime.hour,
              minute: data.endTime.minute,
              nano: 0,
              second: data.endTime.second,
            },
            startTime: {
              hour: data.startTime.hour,
              minute: data.startTime.minute,
              nano: 0,
              second: data.startTime.second,
            },
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

  const beforeBackSave = useCallback(() => {
    list.map(data => {
      if (data.listData.day === '') {
        goAlert('날짜를 선택해주세요')
        throw Error
      }
    })
    handleBusinessHours(list.map(data => data.listData))
  }, [handleBusinessHours, list])

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
      beforeBackSave={beforeBackSave}
    />
  )
}
