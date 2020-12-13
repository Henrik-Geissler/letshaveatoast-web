import { ModalOverlay } from '@chakra-ui/core'
import React from 'react'

interface ModalBackgroundVProps {}

const ModalBackgroundV: React.FC<ModalBackgroundVProps> = ({}) => {
  return (
    <ModalOverlay
      bg='#f8e3db77'
      style={{ backdropFilter: 'blur(10px)', zIndex: 6000 }}
    />
  )
}

export default ModalBackgroundV
