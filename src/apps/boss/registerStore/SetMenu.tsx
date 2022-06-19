import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'
import { CustomTextInput } from '@/components/common'
import { StackRegisterStoreList } from '@/types/route.type'
import { RegisterMenuType } from '@/types/store.type'

import { goAlert } from '@/utils/goAlert'
import { openImage } from '@/utils/openImage'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styled from 'styled-components/native'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
  handleMenu: (data: RegisterMenuType[]) => void
  menu: RegisterMenuType[]
}

export type ListType = {
  id: number
  listData: RegisterMenuType
}

export const SetMenu = ({
  navigation: { navigate },
  handleMenu,
  menu,
}: Props) => {
  const [list, setList] = useState<ListType[]>([])

  const listId = useRef(0)
  const navigator = React.useContext(NavigationContext)

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
      } catch (error) {
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
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
  const listCheckMap = () => {
    list.map(data => {
      if (!data.listData.name) {
        throw String('메뉴 이름을 입력해주세요')
      } else if (data.listData.menuCount === 0) {
        throw String('음식 개수를 입력해주세요')
      } else if (data.listData.price === '') {
        throw String('가격을 입력해주세요')
      } else if (data.listData.pictureUrl === '') {
        throw String('음식사진을 등록해주세요')
      }
    })
  }
  const beforeBackSave = useCallback(() => {
    listCheckMap()
    handleMenu(list.map(data => data.listData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleMenu, list])

  const handleNextRouter = useCallback(() => {
    try {
      if (list.length === 0) {
        throw String('메뉴를 추가해주세요')
      }
      listCheckMap()

      handleMenu(list.map(data => data.listData))
      navigate('SetPicture')
    } catch (error) {
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      } else {
        goAlert(String(error))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleMenu, list, navigate])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <RegisterStoreLayout
        title="메뉴"
        handleNextRouter={handleNextRouter}
        beforeBackSave={beforeBackSave}
      >
        <ScrollView style={{ width: '100%' }}>
          <View>
            <Text>SetMenuScreen</Text>
          </View>
          <TouchableOpacity onPress={onAddList}>
            <Text style={{ color: 'blue' }}>추가하기</Text>
          </TouchableOpacity>

          {list.map(props => (
            <View key={props.id}>
              <Text>-----------------------</Text>
              <View>
                <Title>메뉴 이름을 적어주세요</Title>
              </View>
              <CustomTextInput
                onChangeText={text => handleUpdateList(props.id, text)}
                value={props.listData.name}
                placeholder="메뉴이름을 입력해주세요."
              />
              <View>
                <Title>개수를 </Title>
              </View>
              <CustomTextInput
                onChangeText={text =>
                  handleUpdateList(props.id, props.listData.name, Number(text))
                }
                value={String(props.listData.menuCount)}
                placeholder="음식 개수를 입력해주세요."
                keyboardType="number-pad"
              />
              <View>
                <Title>가격</Title>
              </View>
              <CustomTextInput
                onChangeText={text =>
                  handleUpdateList(
                    props.id,
                    props.listData.name,
                    props.listData.menuCount,
                    text,
                  )
                }
                value={String(props.listData.price)}
                placeholder="음식 가격을 입력해주세요."
                keyboardType="number-pad"
              />
              <View>
                <Title>음식 사진</Title>
              </View>
              <TouchableOpacity
                onPress={() =>
                  handleOpenImage(
                    props.id,
                    props.listData.name,
                    props.listData.menuCount,
                    props.listData.price,
                  )
                }
              >
                <Text style={{ color: 'blue' }}>사진가져오기</Text>
              </TouchableOpacity>
              {props.listData.pictureUrl ? (
                <ImageWrapper
                  source={{
                    uri: props.listData.pictureUrl,
                  }}
                />
              ) : (
                <View>
                  <Text>비어있음</Text>
                </View>
              )}
              <TouchableOpacity onPress={() => onRemoveList(props.id)}>
                <Text style={{ color: 'red' }}>삭제</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </RegisterStoreLayout>
    </KeyboardAvoidingView>
  )
}

const Title = styled.Text`
  color: #586784;
`

const ImageWrapper = styled.Image`
  width: 100px;
  height: 100px;
`
