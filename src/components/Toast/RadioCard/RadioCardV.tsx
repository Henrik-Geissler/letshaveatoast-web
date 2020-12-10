import { Box, Flex, Text, Image } from '@chakra-ui/core'
import { Spacer, Square, useRadio } from '@chakra-ui/react'
import React, { HTMLProps } from 'react'

interface RadioCardVProps {
  color: string
  name: string
  input: any
  checkbox: Pick<HTMLProps<any>, any>
  setCategory: any
}

const RadioCardV: React.FC<RadioCardVProps> = ({
  color,
  name,
  input,
  checkbox,
  setCategory,
}) => {
  return (
    <Square bg={color} height='160px' width='160px' m={1}>
      <Box as='label'>
        <input
          {...input}
          className='radioBox'
          type='submit'
          onClick={() => setCategory(name)}
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
          height='160px'
          width='160px'
          border='none'
          style={{ borderRadius: '0px' }}
        >
          <Flex direction='column' height='100%' width='100%'>
            <Flex width='100%'>
              <Spacer />
              <Image
                alt={name}
                src={`img/category/${name}.png`}
                width='60px'
                height='60px'
              />
            </Flex>
          </Flex>
          <Flex direction='column' height='100%' mt={'-136px'}>
            <Spacer />
            <Text fontSize='22px'>{name}</Text>
          </Flex>
        </Box>
      </Box>
    </Square>
  )
}

export default RadioCardV
