import {
  Box,
  Button,
  Editable,
  EditablePreview,
  Flex,
  FormControl,
  Text,
} from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

interface SentenceVProps {
  onOpen: any
  onOpen2: any
  onOpen3: any
  category: string
  amount: string
  name: string
}

const SentenceV: React.FC<SentenceVProps> = ({
  onOpen,
  onOpen2,
  onOpen3,
  category,
  amount,
  name,
}) => {
  if (name === '') {
    return <></>
  }
  return (
    <Box height='0px'>
      <Center pt={20}>
        <Flex>
          <Button onClick={onOpen} mx={2}>
            <Field name='name'>
              {({ field, form }) => (
                <FormControl id='name' isInvalid={false}>
                  <Editable
                    {...field}
                    isPreviewFocusable={false}
                    submitOnBlur={false}
                    value={name}
                    placeholder=''
                  >
                    <EditablePreview />
                  </Editable>
                </FormControl>
              )}
            </Field>
            {' :'}
          </Button>
          <Text fontSize='20px' pt={1}>
            {" Let's have a "}
          </Text>
          <Button onClick={onOpen3} mx={2}>
            <Field name='amount'>
              {({ field, form }) => (
                <FormControl id='amount'>
                  <Editable
                    {...field}
                    isPreviewFocusable={false}
                    submitOnBlur={false}
                    value={amount}
                    placeholder='toast'
                  >
                    <EditablePreview />
                  </Editable>
                </FormControl>
              )}
            </Field>
          </Button>
          <Text fontSize='20px' pt={1}>
            {'on'}
          </Text>
          <Button onClick={onOpen2} mx={2}>
            <Field name='category'>
              {({ field, form }) => (
                <FormControl id='category'>
                  <Editable
                    {...field}
                    isPreviewFocusable={false}
                    submitOnBlur={false}
                    value={category}
                    placeholder=''
                  >
                    <EditablePreview />
                  </Editable>
                </FormControl>
              )}
            </Field>
          </Button>
        </Flex>
      </Center>
    </Box>
  )
}

export default SentenceV
