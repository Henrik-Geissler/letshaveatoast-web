import { Image } from '@chakra-ui/core'
import { Button, Center, Box, Text, Spinner } from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'
import ImageV from '../../General/Image/ImageV'
import HeadingV from '../Heading/HeadingV'

interface ButtonVProps {
  onOpen: any
  onOpen2: any
  onOpen3: any
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
  clearLinkedToast: any
  pushToast: any
  pushAgain: any
  shots: number
  shoot: any
}

const ButtonV: React.FC<ButtonVProps> = ({
  onOpen,
  onOpen2,
  onOpen3,
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
  clearLinkedToast,
  pushToast,
  pushAgain,
  shots,
  shoot,
}) => {
  if (shots <= 0 && reRoll) {
    return <></>
  }
  return (
    <div>
      <Button
        type={payMode === 2 ? 'submit' : 'button'}
        onClick={() => {
          setPressed(true)
          setTimeout(() => {
            clearLinkedToast()
            if (pending) {
            } else if (reRoll) {
              pushAgain()
            } else if (buttonLoaded) {
              onPush()
              setReRoll(true)
            } else if (name === '') {
              pushToast('You', 'I pushed the button!', 8, 7)
            } else if (category === '') {
              onOpen2()
            } else if (amount === '' || amount === 'first toast') {
              onOpen3()
            } else if (payMode !== 2) {
              document.getElementById('paypalRun').click()
            }
          }, 100)
          setTimeout(() => {
            setPressed(false)
          }, 500)
        }}
        bg='rgba(0,0,0,0)'
        _hover={{ bg: 'rgba(0,0,0,0)' }}
        _focus={{ bg: 'rgba(0,0,0,0)' }}
        _active={{ bg: 'rgba(0,0,0,0)' }}
        className={buttonLoaded ? 'pulse-button' : ''}
        borderRadius='100px'
      >
        <Box
          borderRadius='100px'
          boxShadow={
            buttonLoaded
              ? '0'
              : '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.8)'
          }
        >
          <ImageV src={`button2${pressed ? '-pressed' : ''}`} />
        </Box>
        <Image
          src={`img/button2-pressed.png`}
          style={{ visibility: 'hidden', display: 'none' }}
          alt=''
        />

        <Box height='0px' width='0px' overflow='visible' position='absolute'>
          <Spinner
            width='50px'
            height='50px'
            marginTop='-25px'
            marginLeft='-25px'
            thickness='4px'
            size='xl'
            visibility={pending ? 'visible' : 'hidden'}
            pointerEvents='none'
          />
          <Box
            width='50px'
            height='50px'
            marginTop='-50px'
            marginLeft='-25px'
            thickness='4px'
            size='xl'
            visibility={!pending && reRoll ? 'visible' : 'hidden'}
            pointerEvents='none'
          >
            <HeadingV>{shots}</HeadingV>
          </Box>
        </Box>
      </Button>
    </div>
  )
}

export default ButtonV
