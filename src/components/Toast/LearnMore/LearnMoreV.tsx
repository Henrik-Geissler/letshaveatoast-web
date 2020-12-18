import { Button, Center } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface LearnMoreVProps {
  onOpen: any
  children: ReactNode
}

const LearnMoreV: React.FC<LearnMoreVProps> = ({ onOpen, children }) => {
  return (
    <Center className='kachel1 kachel2'>
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
        className='textButton'
      >
        {children}
      </Button>
    </Center>
  )
}

export default LearnMoreV
