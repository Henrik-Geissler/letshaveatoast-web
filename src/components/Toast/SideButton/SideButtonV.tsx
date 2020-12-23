import { Button, IconButton } from '@chakra-ui/react'
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
    <IconButton
      bg='#fff700'
      size='lg'
      _hover={{ bg: '#ffba00' }}
      boxShadow=' 0 2px 3px -1px rgba(0,0,0,0.8)'
      borderRadius='20px'
      onClick={onClick}
      className={'sideButton ' + (left ? 'sideButtonLeft' : 'sideButtonRight')}
      icon={children}
    />
  )
}

export default SideButtonV
