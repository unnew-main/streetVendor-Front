import { SetBusinessHoursScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/types/route.type'
import { BusinessHoursType } from '@/types/store.type'

import { goAlert } from '@/utils/goAlert'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
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
