import { Box, Flex, Text } from '@chakra-ui/core'
import { Spacer } from '@chakra-ui/react'
import React, { HTMLProps } from 'react'
import GifV from '../../General/Gif/GifV'
import ToastV from '../Toast/ToastV'

interface RadioToastVProps {
  amount: string
  color: string
  color2: string
  name: string
  input: any
  checkbox: Pick<HTMLProps<any>, any>
  setAmount: any
  setButtonLoaded: any
  freeToast: any
  setFreeToast: any
  onClose: any
}

const RadioToastV: React.FC<RadioToastVProps> = ({
  amount,
  color,
  color2,
  name,
  input,
  checkbox,
  setAmount,
  setButtonLoaded,
  freeToast,
  setFreeToast,
  onClose,
}) => {
  const disabled = freeToast < 1 && amount === '0'
  return (
    <Box my={1} mx={5} borderRadius='10px' id={disabled ? 'firstToast' : ''}>
      <Box as='label'>
        <input
          {...input}
          className='radioBox'
          type='submit'
          onClick={() => {
            setAmount(name)
            if (amount === '0') {
              if (disabled) {
                document.getElementById('firstToast').className += ' shaking'
                setTimeout(function () {
                  const str = document.getElementById('firstToast').className
                  document.getElementById(
                    'firstToast'
                  ).className = str.replaceAll(' shaking', '')
                }, 600)
              } else {
                setButtonLoaded(true)
                setFreeToast(freeToast - 1)
                onClose()
              }
            } else {
              setTimeout(() => {
                document.getElementById('paypalRun').click()
              }, 500)
            }
          }}
        />

        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          boxShadow='md'
          borderRadius='20px'
          py={3}
          height='100%'
          width='100%'
          border='none'
        >
          <ToastV amount={name} color={color} color2={color2} hidden={false}>
            <Flex w='100%'>
              <Flex direction='column'>
                <Text
                  ml={2}
                  my='auto'
                  style={{
                    color: `${disabled ? '#777' : '#fff'}`,
                    fontWeight: 700,
                  }}
                  className='textMetal'
                >
                  {name}
                </Text>
                <Text
                  ml={2}
                  my='auto'
                  className='text18'
                  style={{
                    color: '#fff',
                  }}
                >
                  {disabled
                    ? '(You already had your free toast)'
                    : amount === '0'
                    ? `(${freeToast} remaining)`
                    : ''}
                </Text>
              </Flex>
              <Spacer />
              <Text
                my='auto'
                ml='4vw'
                style={{
                  fontWeight: 400,
                  color: `${disabled ? '#777' : '#fff'}`,
                }}
                className='textMetal2'
              >
                {Number.parseInt(amount) > 0 ? amount + '€' : 'FREE'}
              </Text>
            </Flex>
          </ToastV>
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
