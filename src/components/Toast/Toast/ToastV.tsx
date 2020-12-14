import { Box, Flex, Image, Text } from '@chakra-ui/core'
import { Center, ScaleFade, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { GiFireworkRocket } from 'react-icons/gi'
import GifV from '../../General/Gif/GifV'
import ToastTextV from '../ToastText/ToastTextV'

interface ToastVProps {
  name: string
  amount: string
  category: string
  variant: number
  color: string
  color2: string
}

const ToastV: React.FC<ToastVProps> = ({
  name,
  amount,
  category,
  variant,
  color,
  color2,
}) => {
  const [intro, setIntro] = useState(0)
  useEffect(() => {
    const interval = setTimeout(() => {
      setIntro(intro + 1)
      console.log('intro' + intro)
    }, 3000)

    return () => clearTimeout(interval)
  }, [intro])

  const snippets = [
    <FaQuoteLeft
      style={{
        marginRight: '4px',
        marginTop: '0px',
        marginBottom: '0px',
      }}
    />,
    "Let's",
    'have',
    'a',
    ...amount.split(' '),
    'on',
    ...category.split(' '),
    '!',
  ]
  const runAnim = intro % 2 !== 0
  return (
    <Box
      mb={'-10px'}
      color='white'
      p={0}
      bg={`${color}`}
      borderRadius='18px'
      style={{
        visibility: 'hidden',
        pointerEvents: 'none',
        transition: `background-position ${
          runAnim ? '2.0s' : '0s'
        }, visibility 0s`,
        backgroundSize: '400% auto',
        backgroundPosition: runAnim ? 'left center' : 'right center',
        backgroundImage: `linear-gradient(to left, ${color} 0%, ${color} 25%, ${color2} 50%, ${color} 75%, ${color} 100%)`,
      }}
      className='hi'
    >
      <Box
        color='white'
        py={10}
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
          <Flex
            wrap='wrap'
            direction='row'
            style={{
              alignItems: 'center !important',
              pointerEvents: 'none',
              justifyContent: 'start',
            }}
            my='auto'
          >
            {snippets.map(item => {
              return (
                <>
                  <ToastTextV>{item}</ToastTextV>
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      marginTop: '0px',
                      marginBottom: '0px',
                    }}
                  ></div>
                </>
              )
            })}
            <div style={{ marginLeft: 'auto' }}>
              <ToastTextV>{`– ${name}`}</ToastTextV>
            </div>
            {/** 
                  {data.getToast.id}
                  {'-'}
                  {data.getToast.createdAt}
                  */}
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default ToastV
