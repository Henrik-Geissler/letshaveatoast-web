import { Heading } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface HeadingRespoVProps {
  children: ReactNode
}

const HeadingRespoV: React.FC<HeadingRespoVProps> = ({ children }) => {
  return (
    <Heading textAlign='center' className='textHeading'>
      {children}
    </Heading>
  )
}

export default HeadingRespoV
