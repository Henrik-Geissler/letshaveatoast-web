import {} from '@chakra-ui/core'
import { Box, Button, Flex, SlideFade, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BackV from '../Back/BackV'
import SecondaryButtonV from '../SecondaryButton/SecondaryButtonV'

interface ToastEditVProps {
  category: string
  amount: string
  name: string
  message: string
  editName: any
  editMessage: any
  editCategory: any
  editAmount: any
  setToastEditMode
}

const ToastEditV: React.FC<ToastEditVProps> = ({
  category,
  amount,
  name,
  message,
  editName,
  editMessage,
  editCategory,
  editAmount,
  setToastEditMode,
}) => {
  const options = [
    ['Your name', name, editName],
    ['', amount, editAmount],
    ['', category, editCategory],
    ['Your Message', message, editMessage],
  ]
  return (
    <SlideFade in={true} offsetY='-20px'>
      <Flex
        direction='column'
        justifyContent='space-evenly'
        minHeight='180px'
        height='100%'
        color='#fff'
      >
        <Flex justifyContent='space-between'>
          <Text>Your Name:</Text>
          <Text>{name}</Text>
          <SecondaryButtonV onClick={editName} />
        </Flex>
        <Flex justifyContent='space-around'>
          <Flex>
            <Text>AMO</Text>
            <SecondaryButtonV onClick={editAmount} />
          </Flex>
          <Flex>
            <Text>CAT</Text>
            <SecondaryButtonV onClick={editCategory} />
          </Flex>
        </Flex>
        <Flex justifyContent='space-between'>
          <Text>Your Message:</Text>
          <Text>{message}</Text>
          <SecondaryButtonV onClick={editMessage} />
        </Flex>
        <Flex>
          <Box ml={3} mr='auto' mt={'-40px'} color='#000'>
            <BackV
              onClose={() => {
                setToastEditMode(false)
              }}
            />
          </Box>

          <Button
            bg='#fff700'
            mr={3}
            onClick={() => {
              setToastEditMode(false)
            }}
            _hover={{ bg: '#ffba00' }}
            borderRadius='20px'
            size='lg'
            fontWeight='bolder'
            boxShadow='0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.8), 0 4px 20px 20px rgba(255,255,255,0.5)'
            rightIcon={<FaArrowRight />}
            py={3}
            color='#000'
            px={5}
          >
            {' '}
            SAVE{' '}
          </Button>
        </Flex>
      </Flex>
    </SlideFade>
  )
}

export default ToastEditV
