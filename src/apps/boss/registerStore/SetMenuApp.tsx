import { SetMenuScreen } from '@/screens/boss/registerStore'
import { StackRegisterStoreList } from '@/types/route.type'
import { RegisterMenuType } from '@/types/store.type'

import { goAlert } from '@/utils/goAlert'
import { openImage } from '@/utils/openImage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
  handleMenu: (data: RegisterMenuType[]) => void
  menu: RegisterMenuType[]
}

export type ListType = {
  id: number
  listData: RegisterMenuType
}

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
            menuCount: data.menuCount,
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
          menuCount: 0,
          price: '',
          pictureUrl: '',
        },
      }),
    )
  }, [])

  const onRemoveList = useCallback((id: number) => {
    setList(prev => prev.filter(data => data.id !== id))
  }, [])

  const handleOpenImage = useCallback(
    async (id: number, name?: string, menuCount?: number, price?: string) => {
      try {
        const imageUrl = await openImage()
        imageUrl && handleUpdateList(id, name, menuCount, price, imageUrl)
      } catch (e) {
        console.log('Error Open Image', e)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const handleUpdateList = useCallback(
    (
      id: number,
      name?: string,
      menuCount?: number,
      price?: string,
      pictureUrl?: string,
    ) => {
      setList(prevList =>
        prevList.map(prevItem => {
          if (prevItem.id === id) {
            return {
              id,
              listData: {
                menuCount: menuCount
                  ? menuCount
                  : menuCount === 0
                  ? 0
                  : prevItem.listData.menuCount,
                name: name ? name : name === '' ? '' : prevItem.listData.name,
                pictureUrl: pictureUrl
                  ? pictureUrl
                  : pictureUrl === ''
                  ? ''
                  : prevItem.listData.pictureUrl,
                price: price
                  ? price
                  : price === ''
                  ? ''
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
        goAlert('메뉴 이름을 입력해주세요')
        throw Error
      } else if (data.listData.menuCount === 0) {
        goAlert('음식 개수를 입력해주세요')
        throw Error
      } else if (data.listData.price === '') {
        goAlert('가격을 입력해주세요')
        throw Error
      } else if (data.listData.pictureUrl === '') {
        goAlert('음식사진을 등록해주세요')
        throw Error
      }
    })

    handleMenu(list.map(data => data.listData))
    // navigate('SetPicture')
  }, [handleMenu, list])

  const handleNextRouter = useCallback(() => {
    try {
      if (list.length === 0) {
        goAlert('메뉴를 추가해주세요')
        throw Error
      }
      list.map(data => {
        if (!data.listData.name) {
          goAlert('메뉴 이름을 선택해주세요')
          throw Error
        } else if (data.listData.menuCount === 0) {
          goAlert('음식 개수를 정해주세요')
          throw Error
        } else if (data.listData.price === '') {
          goAlert('가격을 정해주세요')
          throw Error
        } else if (data.listData.pictureUrl === '') {
          goAlert('음식사진을 등록해주세요')
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
      handleOpenImage={handleOpenImage}
    />
  )
}
