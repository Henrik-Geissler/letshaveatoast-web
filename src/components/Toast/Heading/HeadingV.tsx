import { Heading } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface HeadingVProps {
  children: ReactNode
}

const HeadingV: React.FC<HeadingVProps> = ({ children }) => {
  return <Heading textAlign='center'>{children}</Heading>
}

export default HeadingV
