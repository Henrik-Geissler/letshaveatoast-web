import { Button, ModalFooter } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import React from 'react'
import BackV from '../Back/BackV'
import { Box } from '@chakra-ui/core'

interface OkVProps {
  onBack: any
  hasBack: boolean
  hasOk: boolean
}

const OkV: React.FC<OkVProps> = ({ onBack, hasBack, hasOk }) => {
  const back = hasBack ? (
    <Box ml={1} mr='auto' mt='-32px'>
      <BackV onClose={onBack} />
    </Box>
  ) : (
    <></>
  )
  const ok = hasOk ? (
    <Button
      bg='#fff700'
      mr={3}
      type='submit'
      _hover={{ bg: '#ffba00' }}
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
  ) : (
    <></>
  )
  return (
    <ModalFooter>
      {back}
      {ok}
    </ModalFooter>
  )
}

export default OkV
