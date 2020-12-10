import { Button, ModalFooter } from '@chakra-ui/core'
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
        boxShadow='md'
      >
        {' '}
        OK{' '}
      </Button>
    </ModalFooter>
  )
}

export default OkV
