import { useRadio } from '@chakra-ui/react'
import React, { ReactText } from 'react'
import ToastTable from '../ToastTable/ToastTable'
import RadioToastV from './RadioToastV'

interface RadioToastCProps {
  radio: any
  setAmount: any
}

const RadioToastC: React.FC<RadioToastCProps> = ({ radio, setAmount }) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio)
  const { name, amount, color } = ToastTable[Number.parseInt(radio.value)]

  return (
    <RadioToastV
      input={getInputProps()}
      checkbox={getCheckboxProps()}
      color={color}
      name={name}
      amount={amount}
      setAmount={setAmount}
    />
  )
}

export default RadioToastC
