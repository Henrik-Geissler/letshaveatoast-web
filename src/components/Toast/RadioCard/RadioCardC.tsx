import { useRadio } from '@chakra-ui/react'
import React, { ReactText } from 'react'
import CardTable from '../CardTable/CardTable'
import RadioCardV from './RadioCardV'

interface RadioCardCProps {
  radio: any
  setCategory: any
  onClose: any
  fake: boolean
}
const RadioCardC: React.FC<RadioCardCProps> = ({
  radio,
  setCategory,
  onClose,
  fake,
}) => {
  const { name, color, value } = CardTable[Number.parseInt(radio.value)]

  return (
    <RadioCardV
      color={color}
      name={name}
      setCategory={setCategory}
      num={(value + 1).toString()}
      onClose={onClose}
      fake={fake}
    />
  )
}

export default RadioCardC
