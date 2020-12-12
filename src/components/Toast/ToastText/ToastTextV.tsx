import { Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface ToastTextVProps {
  children: ReactNode
}

const ToastTextV: React.FC<ToastTextVProps> = ({ children }) => {
  return (
    <Text
      style={{ pointerEvents: 'none' }}
      fontFamily='Calibri, sans-serif'
      fontWeight={0.1}
      my={0}
      py={0}
      className='text18'
    >
      {children}
    </Text>
  )
}

export default ToastTextV
