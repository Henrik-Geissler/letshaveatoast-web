import { Box, Flex, Image, Text } from '@chakra-ui/core'
import { Center, ScaleFade, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { GiFireworkRocket } from 'react-icons/gi'
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
  const runAnim = intro % 2 !== 0
  return (
    <Box
      mb={'-10px'}
      color='white'
      p={0}
      bg={`${color}`}
      borderRadius='18px'
      style={{
        pointerEvents: 'none',
        transition: runAnim ? '2.0s' : '0s',
        backgroundSize: '400% auto',
        backgroundPosition: runAnim ? 'left center' : 'right center',
        backgroundImage: `linear-gradient(to left, ${color} 0%, ${color} 25%, ${color2} 50%, ${color} 75%, ${color} 100%)`,
      }}
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
          <Center mt={10} mr={24} style={{ pointerEvents: 'none' }}>
            <Text
              fontSize='30px'
              style={{
                pointerEvents: 'none',
                animation:
                  'float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate',
              }}
            >
              <Image
                style={{
                  transformOrigin: 'top right',
                  transition:
                    'transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                  transitionDelay: '100ms',
                  transform: 'translateX(21%) rotateZ(13deg) skewX(3deg)',
                }}
                src={`img/toast/${amount}.png`}
                alt='Toast'
                maxH='80px'
                maxW='80px'
              />
            </Text>
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
            <ToastTextV>
              <FaQuoteLeft
                style={{
                  marginRight: '4px',
                  marginTop: '0px',
                  marginBottom: '0px',
                }}
              />
            </ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
            <ToastTextV>{`Let's`}</ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
            <ToastTextV>{`have`}</ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
            <ToastTextV>{`a`}</ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
            <ToastTextV>{`${amount}`}</ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
            <ToastTextV>{`on`}</ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
            <ToastTextV>{`${category}!`}</ToastTextV>
            <div
              style={{
                width: '4px',
                height: '4px',
                marginTop: '0px',
                marginBottom: '0px',
              }}
            ></div>
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
