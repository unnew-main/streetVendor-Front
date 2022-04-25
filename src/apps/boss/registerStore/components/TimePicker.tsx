import React, { useCallback, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

type TimePicker = {
  id: number
  buttonName: string
  handleUpdateTime: (
    id: number,
    newDay?: any,
    startTime?: { hour: string; minute: string },
    endTime?: { hour: string; minute: string },
  ) => void
  type: 'start' | 'end'
}
export const TimePicker = ({
  id,
  buttonName,
  handleUpdateTime,
  type,
}: TimePicker) => {
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
        handleUpdateTime(id, null, {
          hour: String(date.getHours()),
          minute: String(date.getMinutes()),
        })
      } else if (type === 'end') {
        handleUpdateTime(id, null, undefined, {
          hour: String(date.getHours()),
          minute: String(date.getMinutes()),
        })
      }
      hideDatePicker()
    },
    [handleUpdateTime, hideDatePicker, id, type],
  )

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={{ color: 'blue' }}>{buttonName}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}
