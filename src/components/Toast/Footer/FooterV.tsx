import { Flex } from '@chakra-ui/core'
import { Center, Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

interface FooterVProps {}

const FooterV: React.FC<FooterVProps> = ({}) => {
  return (
    <Center
      className='t98'
      w='100vw'
      h='0px'
      pos='absolute'
      m={0}
      p={0}
      left={0}
    >
      <Box maxW='100vw' mx='auto'>
        <Flex>
          <Link
            href='/pdf/Terms and Conditions.pdf'
            isExternal
            my={0}
            mx={1}
            p={0}
          >
            <Text as='u' className='text12'>
              Terms And Conditions
            </Text>
          </Link>
          <Link href='/pdf/Data Protection.pdf' isExternal my={0} mx={1} p={0}>
            <Text as='u' className='text12'>
              Data Protection
            </Text>
          </Link>
        </Flex>
      </Box>
    </Center>
  )
}

export default FooterV
