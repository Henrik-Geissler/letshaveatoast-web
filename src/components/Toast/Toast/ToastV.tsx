import { Box, Flex, Image, Text } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import { GiFireworkRocket } from 'react-icons/gi'

interface ToastVProps {
  name: string
  amount: string
  category: string
  variant: number
}

const ToastV: React.FC<ToastVProps> = ({ name, amount, category, variant }) => {
  return (
    <Box
      color='white'
      p={2}
      bg='rgba(0,0,0,0.5)'
      borderRadius='18px'
      style={{ pointerEvents: 'none' }}
    >
      <Flex style={{ pointerEvents: 'none' }}>
        <Center mr={14} style={{ pointerEvents: 'none' }}>
          <Text fontSize='30px' style={{ pointerEvents: 'none' }}>
            <Image
              src={`img/toast/${amount}.png`}
              alt='Toast'
              w='80px'
              h='80px'
            />
          </Text>
        </Center>
        <Flex direction='column' style={{ pointerEvents: 'none' }}>
          <Text
            style={{ pointerEvents: 'none' }}
            fontFamily='Calibri, sans-serif'
            fontWeight='thin'
          >{`${name}:`}</Text>
          <Text
            style={{ pointerEvents: 'none' }}
            fontFamily='Calibri, sans-serif'
            fontWeight={0.1}
          >{`Let's have a ${amount} on ${category}`}</Text>
          {/** 
                  {data.getToast.id}
                  {'-'}
                  {data.getToast.createdAt}
                  */}
        </Flex>
      </Flex>
    </Box>
  )
}

export default ToastV
