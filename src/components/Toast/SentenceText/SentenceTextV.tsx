import { Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface SentenceTextVProps {
  children: ReactNode
}

const SentenceTextV: React.FC<SentenceTextVProps> = ({ children }) => {
  return (
    <Text fontSize='20px' pt={1}>
      {children}
    </Text>
  )
}

export default SentenceTextV
