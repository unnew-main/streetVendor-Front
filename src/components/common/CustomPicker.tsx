import React from 'react'
import styled from 'styled-components/native'
import RNPickerSelect from 'react-native-picker-select'

type Props = {
  items: { label: string; value: string }[]
  onValueChange: (data: any) => void
  value: string
}
export const CustomPicker = ({ items, onValueChange, value }: Props) => {
  return (
    <PickerWrapper>
      <RNPickerSelect
        onValueChange={data => onValueChange(data)}
        items={items}
        value={value}
      />
    </PickerWrapper>
  )
}

const PickerWrapper = styled.View`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`
