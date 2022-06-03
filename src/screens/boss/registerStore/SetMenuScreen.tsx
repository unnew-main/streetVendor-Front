import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import { ListType } from '@/apps/boss/registerStore/SetMenuApp'
import styled from 'styled-components/native'
import { CustomTextInput } from '@/components/common'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {
  handleNextRouter: () => void
  list: ListType[]
  onAddList: () => void
  onRemoveList: (id: number) => void
  handleUpdateList: (
    id: number,
    name?: string,
    menuCount?: number,
    price?: string,
    pictureUrl?: string,
  ) => void
  beforeBackSave: () => void
  handleOpenImage: (
    id: number,
    name?: string,
    menuCount?: number,
    price?: string,
  ) => void
}

export const SetMenuScreen = ({
  handleNextRouter,
  list,
  onAddList,
  onRemoveList,
  handleUpdateList,
  beforeBackSave,
  handleOpenImage,
}: Props) => {
  console.log(list)
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
