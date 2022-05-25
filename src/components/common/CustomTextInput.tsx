import React from 'react'
import styled from 'styled-components/native'

type Props = {
  value: string
  onChangeText: (data: string) => void
  placeholder: string
  // eslint-disable-next-line react/require-default-props
  keyboardType?: 'number-pad' | 'default'
}
export const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}: Props) => {
  return (
    <TextInputStyled
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  )
}

const TextInputStyled = styled.TextInput`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`
