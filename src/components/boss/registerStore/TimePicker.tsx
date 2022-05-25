import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import styled from 'styled-components/native'

type Props = {
  id: number
  buttonName: string
  handleUpdateTime: (
    id: number,
    newDay?: any,
    startTime?: string,
    endTime?: string,
  ) => void
  type: 'start' | 'end'
}
export const TimePicker = ({
  id,
  buttonName,
  handleUpdateTime,
  type,
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = useCallback(() => {
    setDatePickerVisibility(true)
  }, [])

  const hideDatePicker = useCallback(() => {
    setDatePickerVisibility(false)
  }, [])

  const handleConfirm = useCallback(
    (date: Date) => {
      if (type === 'start') {
        handleUpdateTime(
          id,
          null,
          `${String(date.getHours()).padStart(2, '0')}:${String(
            date.getMinutes(),
          ).padStart(2, '0')}`,
        )
      } else if (type === 'end') {
        handleUpdateTime(
          id,
          null,
          undefined,
          `${String(date.getHours()).padStart(2, '0')}:${String(
            date.getMinutes(),
          ).padStart(2, '0')}`,
        )
      }
      hideDatePicker()
    },
    [handleUpdateTime, hideDatePicker, id, type],
  )

  return (
    <View>
      <ButtonWrapper onPress={showDatePicker}>
        <Text style={{ color: 'blue' }}>{buttonName}</Text>
      </ButtonWrapper>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  padding: 10px;
  border: 1px solid black;
  background-color: white;
`
