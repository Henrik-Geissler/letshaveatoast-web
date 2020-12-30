import { Button, Flex } from '@chakra-ui/core'
import {
  Center,
  IconButton,
  Box,
  Text,
  Spacer,
  Fade,
  SlideFade,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  AiOutlineQuestion,
  AiOutlineReload,
  AiOutlineTrophy,
} from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import ImageV from '../../General/Image/ImageV'
import ButtonV from '../Button/ButtonV'
import HeadingV from '../Heading/HeadingV'
import LearnMoreV from '../LearnMore/LearnMoreV'
import SideButtonV from '../SideButton/SideButtonV'

interface ButtonGroupVProps {
  onOpen: any
  onOpen2: any
  onOpen3: any
  onOpen5: any
  category: any
  amount: any
  setPressed: any
  payMode: any
  name: string
  pressed: boolean
  buttonLoaded: boolean
  onPush: any
  payState: string | null
  reRoll: boolean
  setReRoll: any
  pending: boolean
  setDataMode: any
  dataMode: boolean
  toastMode: boolean
  linkedToast: any
  clearLinkedToast: any
  pushToast: any
  pushAgain: any
  shots: number
  shoot: any
}

const ButtonGroupV: React.FC<ButtonGroupVProps> = ({
  onOpen,
  onOpen2,
  onOpen3,

  onOpen5,
  category,
  amount,
  setPressed,
  payMode,
  name,
  pressed,
  buttonLoaded,
  onPush,
  payState,
  reRoll,
  setReRoll,
  pending,
  setDataMode,
  dataMode,
  toastMode,
  linkedToast,
  clearLinkedToast,
  pushToast,
  pushAgain,
  shots,
  shoot,
}) => {
  const [clicks, setClicks] = useState(0)
  if (dataMode) {
    return <></>
  }
  const rightButton =
    reRoll || pending ? (
      <Box className='antiSide'>
        <></>
      </Box>
    ) : (
      <Box className='antiSide'>
        <SideButtonV left={false} onClick={onOpen}>
          <Text
            lineHeight='1'
            transform='scale(0.6)'
            whiteSpace='nowrap'
            mx={-6}
          >
            <Flex>
              <p>START</p>
              <FaArrowRight />
            </Flex>
          </Text>
        </SideButtonV>
      </Box>
    )
  const button =
    reRoll && shots <= 0 ? (
      <></>
    ) : (
      <Center
        className='t85'
        left='0px'
        w='100vw'
        h='0px'
        pos='absolute'
        pt='0px'
        bg='rgba(0,0,0,0)'
      >
        <Box className='theButton' mx='auto' p={0} bg='rgba(0,0,0,0)'>
          <Center m={0} p={0} h='1px' w='200%'>
            <Box mt='-1vh' mb={0} p={0} ml='-50%' width='100%'>
              <Box mx='auto' height='100px'>
                <ImageV
                  src={
                    'labels/' +
                    (pending
                      ? 'p3'
                      : reRoll
                      ? 'empty'
                      : buttonLoaded
                      ? 'p4'
                      : payState === '0'
                      ? 'p2'
                      : 'p1')
                  }
                />
              </Box>
            </Box>
          </Center>
          <ButtonV
            onOpen={onOpen}
            onOpen2={onOpen2}
            onOpen3={onOpen3}
            onPush={onPush}
            setPressed={setPressed}
            name={name}
            category={category}
            amount={amount}
            pressed={pressed}
            payMode={payMode}
            buttonLoaded={buttonLoaded}
            payState={payState}
            reRoll={reRoll}
            setReRoll={setReRoll}
            pending={pending}
            clearLinkedToast={clearLinkedToast}
            pushToast={(name, message, category, amount) => {
              pushToast(name, message, category, amount)
              setClicks(clicks + 1)
            }}
            pushAgain={pushAgain}
            shots={shots}
            shoot={shoot}
          />
        </Box>
      </Center>
    )
  return (
    <>
      <Box
        className='t85'
        position='absolute'
        left='0px'
        w='100vw'
        pointerEvents={reRoll && shots <= 0 ? 'none' : 'auto'}
      >
        <Flex justifyContent='space-between' w='100vw'>
          <SlideFade in={clicks > 0} offsetX='-20px' offsetY='0'>
            <SideButtonV left={true} onClick={onOpen5}>
              <AiOutlineQuestion />
            </SideButtonV>
          </SlideFade>

          {/**
          <SideButtonV left={true} onClick={() => setDataMode(true)}>
            <AiOutlineTrophy />
          </SideButtonV>
           */}
          <Spacer pointerEvents='none' />
          <SlideFade in={clicks > 0 && name === ''} offsetX='20px' offsetY='0'>
            {rightButton}
          </SlideFade>
        </Flex>
      </Box>
      {button}
    </>
  )
}

export default ButtonGroupV
