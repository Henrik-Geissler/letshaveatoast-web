import { useRadio } from '@chakra-ui/react'
import React, { ReactText } from 'react'
import ToastTable from '../ToastTable/ToastTable'
import RadioToastV from './RadioToastV'

interface RadioToastCProps {
  radio: any
  setAmount: any
  setButtonLoaded: any
  setFreeToast: any

  freeToast: any
  onClose: any
}

const RadioToastC: React.FC<RadioToastCProps> = ({
  radio,
  setAmount,
  setFreeToast,
  setButtonLoaded,
  freeToast,
  onClose,
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio)
  const { name, amount, tcolor: color, tcolor2: color2 } = ToastTable[
    Number.parseInt(radio.value)
  ]

  return (
    <RadioToastV
      input={getInputProps()}
      checkbox={getCheckboxProps()}
      color={color}
      color2={color2}
      name={name}
      amount={amount}
      setAmount={setAmount}
      setButtonLoaded={setButtonLoaded}
      setFreeToast={setFreeToast}
      freeToast={freeToast}
      onClose={onClose}
    />
  )
}

export default RadioToastC
