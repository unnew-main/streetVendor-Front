import { RegisterStoreLayout } from '@/components/boss/registerStore/RegisterStoreLayout'
import { CustomTextInput } from '@/components/common'
import { StackRegisterStoreList } from '@/types/route.type'
import { RegisterMenuType } from '@/types/store.type'

import { goAlert } from '@/utils/goAlert'
import { openCamera } from '@/utils/openCamera'
import { openImage } from '@/utils/openImage'
import { ReportError } from '@/utils/reportError'
import { NavigationContext } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useEffect } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styled from 'styled-components/native'
import { useMenu } from './SetMenu.hook'

type Props = {
  navigation: StackNavigationProp<StackRegisterStoreList, 'SetMenu'>
  handleMenu: (data: RegisterMenuType[]) => void
  menu: RegisterMenuType[]
}

export const SetMenu = ({
  navigation: { navigate },
  handleMenu,
  menu,
}: Props) => {
  const navigator = React.useContext(NavigationContext)
  const {
    listId,
    setMenuList,
    menuList,
    onAddMenu,
    onRemoveMenu,
    onUpdateMenu,
  } = useMenu()

  useEffect(() => {
    menu.forEach(data => {
      listId.current += 1
      setMenuList(prev =>
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

  const handleOpenImage = useCallback(
    async (id: number, name?: string, menuCount?: number, price?: string) => {
      try {
        const imageUrl = await openImage()
        imageUrl && onUpdateMenu(id, name, menuCount, price, imageUrl)
      } catch (error) {
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigator],
  )

  const handleOpenCamera = useCallback(
    async (id: number, name?: string, menuCount?: number, price?: string) => {
      try {
        const imageUrl = await openCamera()
        imageUrl && onUpdateMenu(id, name, menuCount, price, imageUrl)
      } catch (error) {
        if (error instanceof Error) {
          ReportError(error.message, navigator)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigator],
  )

  const listCheckMap = () => {
    menuList.map(data => {
      if (!data.listData.name) {
        throw String('?????? ????????? ??????????????????')
      } else if (data.listData.menuCount === 0) {
        throw String('?????? ????????? ??????????????????')
      } else if (data.listData.price === '') {
        throw String('????????? ??????????????????')
      } else if (data.listData.pictureUrl === '') {
        throw String('??????????????? ??????????????????')
      }
    })
  }
  const beforeBackSave = useCallback(() => {
    listCheckMap()
    handleMenu(menuList.map(data => data.listData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleMenu, menuList])

  const handleNextRouter = useCallback(() => {
    try {
      if (menuList.length === 0) {
        throw String('????????? ??????????????????')
      }
      listCheckMap()

      handleMenu(menuList.map(data => data.listData))
      navigate('SetPicture')
    } catch (error) {
      if (error instanceof Error) {
        ReportError(error.message, navigator)
      } else {
        goAlert(String(error))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleMenu, menuList, navigate])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <RegisterStoreLayout
        title="??????"
        handleNextRouter={handleNextRouter}
        beforeBackSave={beforeBackSave}
      >
        <ScrollView style={{ width: '100%' }}>
          <View>
            <Text>SetMenuScreen</Text>
          </View>
          <TouchableOpacity onPress={onAddMenu}>
            <Text style={{ color: 'blue' }}>????????????</Text>
          </TouchableOpacity>

          {menuList.map(props => (
            <View key={props.id}>
              <Text>-----------------------</Text>
              <View>
                <Title>{props.id}</Title>
              </View>
              <View>
                <Title>?????? ????????? ???????????????</Title>
              </View>
              <CustomTextInput
                onChangeText={text => onUpdateMenu(props.id, text)}
                value={props.listData.name}
                placeholder="??????????????? ??????????????????."
              />
              <View>
                <Title>??????</Title>
              </View>
              <CustomTextInput
                onChangeText={text =>
                  onUpdateMenu(props.id, props.listData.name, Number(text))
                }
                value={String(props.listData.menuCount)}
                placeholder="?????? ????????? ??????????????????."
                keyboardType="number-pad"
              />
              <View>
                <Title>??????</Title>
              </View>
              <CustomTextInput
                onChangeText={text =>
                  onUpdateMenu(
                    props.id,
                    props.listData.name,
                    props.listData.menuCount,
                    text,
                  )
                }
                value={String(props.listData.price)}
                placeholder="?????? ????????? ??????????????????."
                keyboardType="number-pad"
              />
              <View>
                <Title>?????? ??????</Title>
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
                <Text style={{ color: 'blue' }}>??????????????????</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleOpenCamera(
                    props.id,
                    props.listData.name,
                    props.listData.menuCount,
                    props.listData.price,
                  )
                }
              >
                <Text style={{ color: 'blue' }}>?????? ??????</Text>
              </TouchableOpacity>
              {props.listData.pictureUrl ? (
                <ImageWrapper
                  source={{
                    uri: props.listData.pictureUrl,
                  }}
                />
              ) : (
                <View>
                  <Text>????????????</Text>
                </View>
              )}
              <TouchableOpacity onPress={() => onRemoveMenu(props.id)}>
                <Text style={{ color: 'red' }}>??????</Text>
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
