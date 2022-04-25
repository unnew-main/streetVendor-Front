import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import { ListType } from '@/apps/boss/registerStore/SetMenuApp'
import styled from 'styled-components/native'

type Props = {
  handleNextRouter: () => void
  list: ListType[]
  onAddList: () => void
  onRemoveList: (id: number) => void
  handleUpdateList: (
    id: number,
    name?: string,
    amount?: number,
    price?: number,
    pictureUrl?: string,
  ) => void
}

export const SetMenuScreen = ({
  handleNextRouter,
  list,
  onAddList,
  onRemoveList,
  handleUpdateList,
}: Props) => {
  console.log(list)
  return (
    <RegisterStoreLayout title="메뉴" handleNextRouter={handleNextRouter}>
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
          <TextInput
            onChangeText={text => handleUpdateList(props.id, text)}
            value={props.listData.name}
            placeholder="메뉴이름을 입력해주세요."
          />
          <View>
            <Title>개수</Title>
          </View>
          <TextInput
            onChangeText={text =>
              handleUpdateList(props.id, props.listData.name, Number(text))
            }
            value={String(props.listData.amount)}
            placeholder="음식 개수를 입력해주세요."
            keyboardType="number-pad"
          />
          <TouchableOpacity onPress={() => onRemoveList(props.id)}>
            <Text style={{ color: 'red' }}>삭제</Text>
          </TouchableOpacity>
        </View>
      ))}
    </RegisterStoreLayout>
  )
}

const Title = styled.Text`
  color: #586784;
`
