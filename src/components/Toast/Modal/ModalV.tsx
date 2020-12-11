import { Modal, ModalBody, ModalContent, ModalHeader } from '@chakra-ui/core'
import React from 'react'
import ModalBackgroundV from '../ModalBackground/ModalBackgroundV'

interface ModalVProps {
  isOpen: boolean
  onClose: any
  title: string
}

const ModalV: React.FC<ModalVProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
      size='sm'
      scrollBehavior='inside'
    >
      <ModalBackgroundV />
      <ModalContent
        style={{
          zIndex: 10000,
          maxWidth: '588px',
          overflowY: 'scroll',
          overflowX: 'visible',
        }}
        w='95vw'
        h='100vh'
        mx='auto'
        my='auto'
      >
        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <ModalHeader pt={10} fontSize='18px'>
            {title}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default ModalV
