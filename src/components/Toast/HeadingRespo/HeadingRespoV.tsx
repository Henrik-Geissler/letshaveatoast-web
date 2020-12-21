import { Box, Heading } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface HeadingRespoVProps {
  children: ReactNode
}

const HeadingRespoV: React.FC<HeadingRespoVProps> = ({ children }) => {
  return (
    <Box
      marginTop='10px'
      marginLeft='auto'
      marginRight='auto'
      marginBottom='10px'
    >
      <Heading textAlign='center' className='textHeading'>
        {children}
      </Heading>
    </Box>
  )
}

export default HeadingRespoV
