import { Button } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface SideButtonVProps {
  children: ReactNode
  left: boolean
  onClick: any
}

const SideButtonV: React.FC<SideButtonVProps> = ({
  children,
  left,
  onClick,
}) => {
  return (
    <Button
      bg='#fff700'
      size='xs'
      _hover={{ bg: '#ffba00' }}
      boxShadow=' 0 2px 3px -1px rgba(0,0,0,0.8)'
      borderRadius='20px'
      onClick={onClick}
      className='sideButton'
    >
      {children}
    </Button>
  )
}

export default SideButtonV
