import { Button, ModalFooter } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import React from 'react'

interface OkVProps {}

const OkV: React.FC<OkVProps> = ({}) => {
  return (
    <ModalFooter>
      <Button
        bg='#fff700'
        mr={3}
        type='submit'
        _hover={{ bg: '#ffba00' }}
        _focus={{ bg: '#ffba00' }}
        _active={{ bg: '#ffba00' }}
        borderRadius='20px'
        size='lg'
        fontWeight='bolder'
        boxShadow='0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.8), 0 4px 20px 20px rgba(255,255,255,0.5)'
        rightIcon={<FaArrowRight />}
        py={3}
        px={5}
      >
        {' '}
        OK{' '}
      </Button>
    </ModalFooter>
  )
}

export default OkV
