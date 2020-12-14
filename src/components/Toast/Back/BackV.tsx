import { Button } from '@chakra-ui/react'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

interface BackVProps {
  onClose: any
}

const BackV: React.FC<BackVProps> = ({ onClose }) => {
  return (
    <Button
      bg='#fff70000'
      mt={10}
      onClick={onClose}
      _hover={{ bg: '#f8e3db' }}
      borderRadius='20px'
      size='lg'
      fontFamily='Caviar Dreams'
      className='text20'
      leftIcon={<FiArrowLeft />}
      py={3}
      px={5}
    >
      {' '}
      Back{' '}
    </Button>
  )
}

export default BackV
