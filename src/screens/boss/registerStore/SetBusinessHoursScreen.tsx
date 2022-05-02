import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RegisterStoreLayout } from './RegisterStoreLayout'
import RNPickerSelect from 'react-native-picker-select'
import { ListType } from '@/apps/boss/registerStore/SetBusinessHoursApp'
import { TimePicker } from '@/apps/boss/registerStore/components/TimePicker'

type Props = {
  handleNextRouter: () => void
  onAddList: () => void
  onRemoveList: (id: number) => void
  list: ListType[]
  handleUpdateList: (id: number, newDay?: string) => void
  beforeBackSave: () => void
}

const days = [
  { label: '월', value: 'MON' },
  { label: '화', value: 'FRI' },
  { label: '수', value: 'TUE' },
  { label: '목', value: 'THU' },
  { label: '금', value: 'FRI' },
  { label: '토', value: 'SAT' },
  { label: '일', value: 'SUN' },
]

export const SetBusinessHoursScreen = ({
  handleNextRouter,
  list,
  onAddList,
  onRemoveList,
  handleUpdateList,
  beforeBackSave,
}: Props) => {
  return (
    <RegisterStoreLayout
      title="오픈일"
      handleNextRouter={handleNextRouter}
      beforeBackSave={beforeBackSave}
    >
      <View>
        <Text>SetBusinessHoursScreen</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onAddList}>
          <Text style={{ color: 'blue' }}>추가하기</Text>
        </TouchableOpacity>
        {list.map(props => (
          <View key={props.id}>
            <View>
              <Text>-----------------------</Text>
              <Text>날짜를 선택해주세요</Text>
              <RNPickerSelect
                onValueChange={(value: string) =>
                  handleUpdateList(props.id, value)
                }
                items={days}
                value={props.listData.days}
              />
            </View>
            <Text>{props.listData.days}</Text>

            <TimePicker
              id={props.id}
              buttonName="영업 시작시간 설정"
              handleUpdateTime={handleUpdateList}
              type="start"
            />
            <Text>{props.listData.startTime}</Text>

            <TimePicker
              id={props.id}
              buttonName="영업 종료시간 설정"
              handleUpdateTime={handleUpdateList}
              type="end"
            />
            <Text>{props.listData.endTime}</Text>
            <TouchableOpacity onPress={() => onRemoveList(props.id)}>
              <Text style={{ color: 'red' }}>삭제</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </RegisterStoreLayout>
  )
}
