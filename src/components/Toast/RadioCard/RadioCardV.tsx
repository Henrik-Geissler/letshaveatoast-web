import { Box, Flex, Text, Image } from '@chakra-ui/core'
import { Spacer, Square, useRadio } from '@chakra-ui/react'
import React, { HTMLProps } from 'react'
import ImageV from '../../General/Image/ImageV'

interface RadioCardVProps {
  color: string
  name: string
  input: any
  checkbox: Pick<HTMLProps<any>, any>
  setCategory: any
  num: string
}

const RadioCardV: React.FC<RadioCardVProps> = ({
  color,
  name,
  input,
  checkbox,
  setCategory,
  num,
}) => {
  return (
    <Square bg={color} className='kachel1 kachel2'>
      <Box as='label'>
        <input
          {...input}
          className='radioBox'
          type='submit'
          onClick={() => setCategory(name)}
        />
        <Box
          {...checkbox}
          className='kachel1'
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          px={2}
          py={3}
          border='none'
          style={{ borderRadius: '0px' }}
        >
          <Flex direction='column' height='100%' width='100%'>
            <Flex direction='row' height='100%' width='100%'>
              <Text
                fontSize='36px'
                color='white'
                fontFamily='Caviar Dreams Bold'
                fontWeight='bold'
                lineHeight='1'
                pr={2}
              >
                {num}
              </Text>
              <Text
                fontSize='16px'
                color='white'
                fontFamily='Caviar Dreams Bold'
                lineHeight='1'
                my={'auto'}
              >
                {name}
              </Text>
            </Flex>
            <Box px={8} pt={4} pb={18}>
              <ImageV src={`category/${name}`} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Square>
  )
}

export default RadioCardV
