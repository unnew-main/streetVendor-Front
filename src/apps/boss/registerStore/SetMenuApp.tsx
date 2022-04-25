import { SetMenuScreen } from '@/screens/boss/registerStore'
import {
  MenuType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useRef, useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
  handleMenu: (data: MenuType[]) => void
}

export type ListType = {
  id: number
  listData: MenuType
}

//     {
//       "amount": 0,
//       "name": "string",
//       "pictureUrl": "string",
//       "price": 0
//     }

export const SetMenuApp = ({ navigation: { navigate } }: Props) => {
  const [list, setList] = useState<ListType[]>([])

  const listId = useRef(0)

  const onAddList = useCallback(() => {
    listId.current += 1
    setList(prev =>
      prev.concat({
        id: listId.current,
        listData: {
          name: '',
          amount: 0,
          price: 0,
          pictureUrl: '',
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
      name?: string,
      amount?: number,
      price?: number,
      pictureUrl?: string,
    ) => {
      setList(prevList =>
        prevList.map(prevItem => {
          if (prevItem.id === id) {
            return {
              id,
              listData: {
                amount: amount
                  ? amount
                  : amount === 0
                  ? 0
                  : prevItem.listData.amount,
                name: name ? name : name === '' ? '' : prevItem.listData.name,
                pictureUrl: pictureUrl
                  ? pictureUrl
                  : pictureUrl === ''
                  ? ''
                  : prevItem.listData.pictureUrl,
                price: price
                  ? price
                  : price === 0
                  ? 0
                  : prevItem.listData.price,
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
    navigate('SetPicture')
  }, [navigate])

  return (
    <SetMenuScreen
      handleNextRouter={handleNextRouter}
      list={list}
      onAddList={onAddList}
      onRemoveList={onRemoveList}
      handleUpdateList={handleUpdateList}
    />
  )
}
