import { Box, Flex } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React, { ReactNode, useEffect, useState } from 'react'
import GifV from '../../General/Gif/GifV'

interface ToastVProps {
  amount: string
  color: string
  color2: string
  hidden: boolean
  children: ReactNode
}

const ToastV: React.FC<ToastVProps> = ({
  amount,
  color,
  color2,
  hidden,
  children,
}) => {
  const [intro, setIntro] = useState(0)
  useEffect(() => {
    const interval = setTimeout(() => {
      setIntro(intro + 1)
    }, 3000)

    return () => clearTimeout(interval)
  }, [intro])

  const runAnim = intro % 2 !== 0
  return (
    <Box
      mb={'-10px'}
      color='white'
      p={0}
      bg={`${color}`}
      borderRadius='18px'
      style={{
        visibility: hidden ? 'hidden' : 'visible',
        pointerEvents: 'none',
        transition: `background-position ${
          runAnim ? '2.0s' : '0s'
        }, visibility 0s`,
        backgroundSize: '400% auto',
        backgroundPosition: runAnim ? 'left center' : 'right center',
        backgroundImage: `linear-gradient(to left, ${color} 0%, ${color} 25%, ${color2} 50%, ${color} 75%, ${color} 100%)`,
      }}
    >
      <Box
        color='white'
        py={'10px'}
        pr={30}
        m={0}
        borderRadius='18px'
        style={{ pointerEvents: 'none' }}
      >
        <Flex style={{ pointerEvents: 'none' }}>
          <Center
            my={0}
            ml={'2%'}
            mr={'4%'}
            p={0}
            style={{ pointerEvents: 'none' }}
          >
            <Box maxH='80px' maxW='80px' h='80px' w='80px'>
              <GifV src={amount} />
            </Box>
          </Center>
          {children}
        </Flex>
      </Box>
    </Box>
  )
}

export default ToastV
