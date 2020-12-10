import { useRadio } from '@chakra-ui/react'
import React, { ReactText } from 'react'
import CardTable from '../CardTable/CardTable'
import RadioCardV from './RadioCardV'

interface RadioCardCProps {
  radio: any
  setCategory: any
}
const RadioCardC: React.FC<RadioCardCProps> = ({ radio, setCategory }) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio)
  const { name, color } = CardTable[Number.parseInt(radio.value)]

  return (
    <RadioCardV
      input={getInputProps()}
      checkbox={getCheckboxProps()}
      color={color}
      name={name}
      setCategory={setCategory}
    />
  )
}

export default RadioCardC
