import { Button, Center } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import ImageV from '../../General/Image/ImageV'
import PaypalV from '../Paypal/PaypalV'

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
}) => {
  console.log('a' + payMode)
  return (
    <Button
      type={payMode === 2 ? 'submit' : 'button'}
      onClick={() => {
        setPressed(true)
        setTimeout(() => {
          if (name === '') {
            onOpen()
          } else if (category === '') {
            onOpen2()
          } else if (amount === '') {
            onOpen3()
          } else if (payMode !== 2) {
            console.log('hiii')
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
    >
      <ImageV src={`button${pressed ? '-pressed' : ''}`} />
    </Button>
  )
}

export default ButtonV
