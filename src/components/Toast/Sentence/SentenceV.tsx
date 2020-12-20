import {
  Box,
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
import HeadingV from '../Heading/HeadingV'
import SentenceTextV from '../SentenceText/SentenceTextV'
import SentenceUserV from '../SentenceUser/SentenceUserV'
import ThankYouV from '../ThankYou/ThankYouV'
import ToastV from '../Toast/ToastV'
import ToastContentV from '../ToastContent/ToastContentV'

interface SentenceVProps {
  onOpen: any
  onOpen2: any
  onOpen3: any
  category: string
  amount: string
  name: string
  visible: boolean
  reRoll: boolean
  setReRoll: any
  color: string
  color2: string
  colorCard: string
  payState: any
}

const SentenceV: React.FC<SentenceVProps> = ({
  onOpen,
  onOpen2,
  onOpen3,
  category,
  amount,
  name,
  visible,
  reRoll,
  setReRoll,
  color,
  color2,
  colorCard,
  payState,
}) => {
  if (!visible) {
    return <></>
  }
  if (payState === '0') {
    return (
      <>
        <Center className='t50' w='100vw' m={0} pos='absolute' left='0px'>
          <Flex direction='column'>
            <HeadingV>Ooops</HeadingV>
            <SentenceTextV>
              Something went wrong with your payment. :-(
            </SentenceTextV>
          </Flex>
        </Center>
      </>
    )
  }
  if (reRoll) {
    return <ThankYouV setReRoll={setReRoll} />
  }
  return (
    <Center className='t45' w='100vw' m={0} pos='absolute' left='0px'>
      <Center mx={2} className='floating' borderRadius='18px'>
        <Flex direction='column'>
          <Box height='0px' overflow='visible'>
            <Box height='0px' mt='-40px' overflow='visible'>
              <HeadingV>Your toast:</HeadingV>
            </Box>
          </Box>
          <ToastV amount={amount} color={color} color2={color2} hidden={false}>
            <ToastContentV
              category={category}
              name={name}
              amount={amount}
              colorCard={colorCard}
            />
          </ToastV>
        </Flex>
      </Center>
    </Center>
  )
  return (
    <Center top='45vh' w='100vw' m={0} pos='absolute' left='0px'>
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
              my={1}
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
              my={1}
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
          <Flex>
            <Spacer />
            <SentenceTextV>{'––'}</SentenceTextV>
            <div style={{ width: '10px' }}></div>
            <SentenceUserV name={name} onOpen={onOpen} />
            <div style={{ width: '5vw' }}></div>
          </Flex>
        </Flex>
      </Center>
    </Center>
  )
}

export default SentenceV
