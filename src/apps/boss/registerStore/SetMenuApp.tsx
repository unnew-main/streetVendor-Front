import { SetMenuScreen } from '@/screens/boss/registerStore'
import {
  MenuType,
  StackRegisterStoreList,
} from '@/screens/boss/RegisterStoreScreen.type'
import { goAlert } from '@/util/goAlert'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
  handleMenu: (data: MenuType[]) => void
  menu: MenuType[]
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

export const SetMenuApp = ({
  navigation: { navigate },
  handleMenu,
  menu,
}: Props) => {
  const [list, setList] = useState<ListType[]>([])

  const listId = useRef(0)

  useEffect(() => {
    menu.forEach(data => {
      listId.current += 1
      setList(prev =>
        prev.concat({
          id: listId.current,
          listData: {
            amount: data.amount,
            name: data.name,
            pictureUrl: data.pictureUrl,
            price: data.price,
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
  const beforeBackSave = useCallback(() => {
    list.map(data => {
      if (!data.listData.name) {
        goAlert('메뉴 이름을 선택해주세요')
        throw Error
      } else if (data.listData.amount === 0) {
        goAlert('음식 개수를 정해주세요')
        throw Error
      } else if (data.listData.price === 0) {
        goAlert('가격을 정해주세요')
        throw Error
      }
    })

    handleMenu(list.map(data => data.listData))
    // navigate('SetPicture')
  }, [handleMenu, list])

  const handleNextRouter = useCallback(() => {
    try {
      list.map(data => {
        if (!data.listData.name) {
          goAlert('메뉴 이름을 선택해주세요')
          throw Error
        } else if (data.listData.amount === 0) {
          goAlert('음식 개수를 정해주세요')
          throw Error
        } else if (data.listData.price === 0) {
          goAlert('가격을 정해주세요')
          throw Error
        }
      })

      handleMenu(list.map(data => data.listData))
      navigate('SetPicture')
    } catch (e) {}
  }, [handleMenu, list, navigate])

  return (
    <SetMenuScreen
      handleNextRouter={handleNextRouter}
      list={list}
      onAddList={onAddList}
      onRemoveList={onRemoveList}
      handleUpdateList={handleUpdateList}
      beforeBackSave={beforeBackSave}
    />
  )
}
