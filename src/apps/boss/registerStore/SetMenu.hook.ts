import { ListType } from '@/types/registerStore.type'
import { RegisterMenuType } from '@/types/store.type'
import { useCallback, useRef, useState } from 'react'

export const useMenu = () => {
  const [menuList, setMenuList] = useState<ListType<RegisterMenuType>[]>([])
  const listId = useRef(0)

  const onAddMenu = useCallback(() => {
    listId.current += 1
    setMenuList(prev =>
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

  const onRemoveMenu = useCallback((id: number) => {
    setMenuList(prev => prev.filter(data => data.id !== id))
  }, [])

  const onUpdateMenu = useCallback(
    (
      id: number,
      name?: string,
      menuCount?: number,
      price?: string,
      pictureUrl?: string,
    ) => {
      setMenuList(prevList =>
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

  return {
    listId,
    menuList,
    setMenuList,
    onAddMenu,
    onRemoveMenu,
    onUpdateMenu,
  }
}
