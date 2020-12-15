import { Box, Flex, Text } from '@chakra-ui/core'
import { Spacer } from '@chakra-ui/react'
import React, { HTMLProps } from 'react'
import GifV from '../../General/Gif/GifV'

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
    <Box bg={color} m={1} style={{ borderRadius: '20px' }}>
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
          height='100%'
          width='100%'
          border='none'
          style={{
            transition: '0.5s',
            backgroundSize: '200% auto',
            backgroundPosition: 'right center',
            borderRadius: '20px',
            backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 51%, rgba(0,0,0,0.7) 100%)`,
          }}
        >
          <Flex>
            <Text
              my='auto'
              style={{
                color: `${color}cc`,
                textShadow: '1px 1px 1px rgba(255,255,255,1)',
                fontWeight: 700,
              }}
              className='textMetal'
            >
              {name}
            </Text>
            <Spacer />
            <Text
              mr={2}
              my='auto'
              style={{
                color: `${color}cc`,
                textShadow: '1px 1px 1px rgba(255,255,255,1)',
                fontWeight: 400,
              }}
              className='textMetal2'
            >
              {amount}€
            </Text>
            <Box my='auto' width='60px' height='60px'>
              <GifV src={name} />
            </Box>
          </Flex>
        </Box>
        <div
          style={{
            position: 'relative',
            margin: '-24px 0 0',
            padding: 0,
            display: 'block',
            background: '#111',
            width: '100%',
            height: '24px',
            opacity: '0.1',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          }}
        ></div>
      </Box>
    </Box>
  )
}

export default RadioToastV
