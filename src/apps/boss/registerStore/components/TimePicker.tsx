import React, { useState } from 'react'
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
  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: Date) => {
    if (type === 'start') {
      handleUpdateTime(id, null, {
        hour: JSON.stringify(date.getHours()),
        minute: JSON.stringify(date.getMinutes()),
      })
    } else if (type === 'end') {
      handleUpdateTime(id, null, undefined, {
        hour: JSON.stringify(date.getHours()),
        minute: JSON.stringify(date.getMinutes()),
      })
    }
    hideDatePicker()
  }
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
