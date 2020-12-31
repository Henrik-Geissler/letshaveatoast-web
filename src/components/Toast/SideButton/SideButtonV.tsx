import { Button, IconButton } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface SideButtonVProps {
  children: ReactNode
  left: boolean
  onClick: any
  icon: any
}

const SideButtonV: React.FC<SideButtonVProps> = ({
  children,
  left,
  onClick,
  icon,
}) => {
  return (
    <Button
      bg={left ? '#ffffff' : '#fff700'}
      borderColor={left ? '#fff700' : '#ffffff'}
      size='sm'
      _hover={left ? { borderColor: '#ffba00' } : { bg: '#ffba00' }}
      boxShadow=' 0 2px 3px -1px rgba(0,0,0,0.8)'
      borderRadius='20px'
      onClick={onClick}
      className={'sideButton ' + (left ? 'sideButtonLeft' : 'sideButtonRight')}
      icon={<>{children}</>}
      aria-label='SideButton'
      rightIcon={icon}
      lineHeight='1'
      p={2}
    >
      {children}
    </Button>
  )
}

export default SideButtonV
