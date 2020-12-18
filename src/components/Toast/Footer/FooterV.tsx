import { Flex } from '@chakra-ui/core'
import { Center, Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

interface FooterVProps {}

const FooterV: React.FC<FooterVProps> = ({}) => {
  return (
    <Center top='98vh' w='100vw' h='0px' pos='absolute' m={0} p={0} left={0}>
      <Box maxW='100vw' mx='auto'>
        <Flex alignContent='center'>
          <Link
            href='/pdf/terms_and_conditions.pdf'
            isExternal
            my={0}
            mx={1}
            p={0}
          >
            <Text as='u' className='text12'>
              AGBs
            </Text>
          </Link>
          <Link
            href='/pdf/terms_and_conditions.pdf'
            isExternal
            my={0}
            mx={1}
            p={0}
          >
            <Text as='u' className='text12'>
              Datenschutzrichtlinien
            </Text>
          </Link>
          <Link href='/impressum' isExternal my={0} mx={1} p={0}>
            <Text as='u' className='text12'>
              Impressum
            </Text>
          </Link>
        </Flex>
      </Box>
    </Center>
  )
}

export default FooterV
