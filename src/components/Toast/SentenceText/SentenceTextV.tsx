import { Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface SentenceTextVProps {
  children: ReactNode
}

const SentenceTextV: React.FC<SentenceTextVProps> = ({ children }) => {
  return (
    <Text pt={1} className='text20'>
      {children}
    </Text>
  )
}

export default SentenceTextV
