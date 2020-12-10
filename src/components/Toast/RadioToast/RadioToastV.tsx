import { Box, Flex, Text, Image, Button } from '@chakra-ui/core'
import { Spacer, Square, useRadio } from '@chakra-ui/react'
import React, { HTMLProps } from 'react'

interface RadioToastVProps {
  amount: string
  color: string
  name: string
  input: any
  checkbox: Pick<HTMLProps<any>, any>
  setAmount: any
}

const RadioToastV: React.FC<RadioToastVProps> = ({
  amount,
  color,
  name,
  input,
  checkbox,
  setAmount,
}) => {
  return (
    <Box bg={color} m={1}>
      <Box as='label'>
        <input
          {...input}
          className='radioBox'
          type='submit'
          onClick={() => setAmount(name)}
        />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          px={5}
          py={3}
          bg='rgba(255,255,255,0.9)'
          height='100%'
          width='100%'
          border='none'
          style={{ borderRadius: '0px' }}
        >
          <Flex>
            <Text fontSize='22px' my='auto'>
              {name}
            </Text>
            <Spacer />
            <Text mr={2} fontSize='22px' my='auto'>
              {amount}€
            </Text>
            <Image
              my='auto'
              alt={name}
              src={`img/toast/${name}.png`}
              width='60px'
              height='60px'
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default RadioToastV
