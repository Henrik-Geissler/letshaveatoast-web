import { ModalOverlay } from '@chakra-ui/core'
import React from 'react'

interface ModalBackgroundVProps {}

const ModalBackgroundV: React.FC<ModalBackgroundVProps> = ({}) => {
  return (
    <ModalOverlay bg='#ffffff77' className='modalBg' style={{ zIndex: 6000 }} />
  )
}

export default ModalBackgroundV
