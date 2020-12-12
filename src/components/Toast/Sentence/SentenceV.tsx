import {
  Editable,
  EditablePreview,
  Flex,
  FormControl,
  Heading,
} from '@chakra-ui/core'
import { IconButton, Button, Spacer } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'
import { FaChevronDown, FaQuoteLeft } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import SentenceTextV from '../SentenceText/SentenceTextV'
import SentenceUserV from '../SentenceUser/SentenceUserV'

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
    return (
      <Center>
        <Flex direction='column'>
          <SentenceTextV>Share global toast together</SentenceTextV>
        </Flex>
      </Center>
    )
  }
  if (category === '') {
    return (
      <Center>
        <Flex direction='column'>
          <Center>
            <Flex>
              <SentenceTextV>Welcome</SentenceTextV>
              <div style={{ width: '10px' }}></div>
              <SentenceUserV name={name} onOpen={onOpen} />
              <SentenceTextV>to our community!</SentenceTextV>
            </Flex>
          </Center>
          <Center>
            <SentenceTextV>What do you want to toast on?</SentenceTextV>
          </Center>
        </Flex>
      </Center>
    )
  }
  if (amount === '') {
    return (
      <Center>
        <Flex direction='column'>
          <Center>
            <SentenceTextV>You are ready to toast</SentenceTextV>
          </Center>
          <Center>
            <SentenceTextV>Let's go</SentenceTextV>
          </Center>
        </Flex>
      </Center>
    )
  }
  return (
    <Center px={3}>
      <Flex direction='column'>
        <Center>
          <Heading fontFamily='system-ui,sans-serif' fontSize='lg'>
            Your Toast:
          </Heading>
        </Center>
        <div style={{ height: '3vh' }}></div>
        <Flex wrap='wrap'>
          <SentenceTextV>
            <FaQuoteLeft style={{ marginRight: '8px' }} />
          </SentenceTextV>
          <SentenceTextV>{" Let's have a "}</SentenceTextV>
          <Button
            onClick={onOpen3}
            mx={2}
            variant='outline'
            rightIcon={<FaChevronDown color='#bbbbbb' />}
            style={{
              boxShadow: '0 0 1px 1px #bbbbbb',
              borderRadius: '100px',
            }}
            px={3}
            pb={1}
          >
            <SentenceTextV>
              <Field name='amount'>
                {({ field, form }) => (
                  <FormControl id='amount'>
                    <Editable
                      {...field}
                      isPreviewFocusable={false}
                      submitOnBlur={false}
                      value={amount}
                      placeholder='toast'
                      style={{ pointerEvents: 'none' }}
                    >
                      <EditablePreview style={{ pointerEvents: 'none' }} />
                    </Editable>
                  </FormControl>
                )}
              </Field>
            </SentenceTextV>
          </Button>
          <SentenceTextV>{'on'}</SentenceTextV>
          <Button
            onClick={onOpen2}
            mx={2}
            rightIcon={<FaChevronDown color='#bbbbbb' />}
            style={{
              boxShadow: '0 0 1px 1px #bbbbbb',
              borderRadius: '100px',
            }}
            px={3}
            pb={1}
          >
            <SentenceTextV>
              <Field name='category'>
                {({ field, form }) => (
                  <FormControl id='category'>
                    <Editable
                      {...field}
                      isPreviewFocusable={false}
                      submitOnBlur={false}
                      value={category}
                      placeholder=''
                      style={{ pointerEvents: 'none' }}
                    >
                      <EditablePreview style={{ pointerEvents: 'none' }} />
                    </Editable>
                  </FormControl>
                )}
              </Field>
            </SentenceTextV>
            <SentenceTextV>{'!'}</SentenceTextV>
          </Button>
        </Flex>
        <br />
        <Flex>
          <Spacer />
          <SentenceTextV>{'––'}</SentenceTextV>
          <div style={{ width: '10px' }}></div>
          <SentenceUserV name={name} onOpen={onOpen} />
          <div style={{ width: '30px' }}></div>
        </Flex>
      </Flex>
    </Center>
  )
}

export default SentenceV
