import { Image } from '@chakra-ui/core'
import { Button, Center, Box, Text, Spinner } from '@chakra-ui/react'
import React, { ReactNode, useState } from 'react'
import ImageV from '../../General/Image/ImageV'
import PaypalV from '../Paypal/PaypalV'
import SocialButtonsV from '../SocialButtons/SocialButtonsV'

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
}) => {
  if (reRoll) {
    return <></>
  }
  return (
    <div>
      <Button
        type={payMode === 2 ? 'submit' : 'button'}
        onClick={() => {
          setPressed(true)
          setTimeout(() => {
            if (buttonLoaded) {
              onPush()
              setReRoll(true)
            } else if (name === '') {
              onOpen()
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
      >
        <ImageV src={`button2${pressed ? '-pressed' : ''}`} />
        <Image
          src={`button2-pressed`}
          style={{ visibility: 'hidden' }}
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
        </Box>
      </Button>
    </div>
  )
}

export default ButtonV
