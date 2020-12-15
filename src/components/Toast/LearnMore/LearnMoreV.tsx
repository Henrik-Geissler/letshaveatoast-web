import { Button, Center } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface LearnMoreVProps {
  onOpen: any
}

const LearnMoreV: React.FC<LearnMoreVProps> = ({ onOpen }) => {
  return (
    <Center height='160px' width='160px' m={4}>
      <Button
        bg='#fff700'
        m='auto'
        onClick={onOpen}
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
        LEARN MORE{' '}
      </Button>
    </Center>
  )
}

export default LearnMoreV
