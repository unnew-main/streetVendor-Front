import { ListType } from '@/types/registerStore.type'
import { BusinessHoursType } from '@/types/store.type'
import { useCallback, useRef, useState } from 'react'

export const useDates = () => {
  const [dateList, setDateList] = useState<ListType<BusinessHoursType>[]>([])
  const listId = useRef(0)

  const onAddDate = useCallback(() => {
    listId.current += 1
    setDateList(prev =>
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

  const onRemoveDate = useCallback((id: number) => {
    setDateList(prev => prev.filter(data => data.id !== id))
  }, [])

  const onUpdateDate = useCallback(
    (id: number, newDay?: any, startTime?: string, endTime?: string) => {
      setDateList(prevList =>
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

  return {
    listId,
    dateList,
    setDateList,
    onAddDate,
    onRemoveDate,
    onUpdateDate,
  }
}
