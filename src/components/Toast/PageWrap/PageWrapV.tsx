import { Box } from '@chakra-ui/core'
import React from 'react'

interface PageWrapVProps {}

const PageWrapV: React.FC<PageWrapVProps> = props => {
  return (
    <Box
      className='test'
      w='100vw'
      h='100vh'
      m={0}
      p={0}
      border='none'
      overflow='hidden'
      position='absolute'
      top='0px'
      left='0px'
    >
      {props.children}
    </Box>
  )
}

export default PageWrapV
