import { withApollo } from '../utils/withApollo'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useState, useEffect, useRef } from 'react'
import { GiFireworkRocket } from 'react-icons/gi'
import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
  Select,
  Text,
} from '@chakra-ui/core'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { Center, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { Wrapper } from '../components/Wrapper'
//backdrop-filter: blur(5px);
const FRESH_TOAST = gql`
  query getToast {
    getToast {
      name
      id
      amount
      category
    }
  }
`

const PUSH_TOAST = gql`
  query newToast($options: ToastInput!) {
    newToast(options: $options) {
      errors {
        field
        message
      }
      toast {
        name
        id
        amount
        category
      }
    }
  }
`

interface StyleVProps {}

function validateName(value) {
  let error
  if (!value) {
    error = 'Name is required'
  }
  return error
}

//const format = val => `$` + val
//const parse = val => val.replace(/^\$/, '')

const format = val => val
const parse = val => val

const Todos: React.FC<StyleVProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading, error, data } = useQuery(FRESH_TOAST, {
    pollInterval: 500,
  })
  const [pushToast, res] = useLazyQuery(PUSH_TOAST)
  const [pressed, setPressed] = useState(false)
  const [name, setName] = useState('')
  //const [value, setValue] = useState('1.00')

  const initialRef = useRef()
  const finalRef = useRef()
  console.log(data)
  const toast = useToast()
  if (data === undefined) return <>Loading down...</>
  if (res.loading) return <>Loading up ...</>
  toast({
    duration: 50000,
    isClosable: false,
    position: 'top-right',
    render: () => (
      <Box
        color='white'
        p={2}
        bg='rgba(0,0,0,0.5)'
        borderRadius='18px'
        style={{ pointerEvents: 'none' }}
      >
        <Flex>
          <Center mr={14}>
            <Text fontSize='30px'>
              <GiFireworkRocket height='2em' />
            </Text>
          </Center>
          <Flex direction='column'>
            <Text>{`${data.getToast.name}:`}</Text>
            <Text>{`Let's have a $${data.getToast.amount} toast on ${data.getToast.category}`}</Text>
          </Flex>
        </Flex>
      </Box>
    ),
  })
  return (
    <>
      <style>{'.chakra-modal__content-container {  z-index: 10000 }'}</style>
      <Wrapper>
        <Flex direction='column'>
          <Center mt={200}>
            <Image src='/img/logo.png' alt="Let's have a toast" w='360px' />
          </Center>
          <Formik
            initialValues={{}}
            onSubmit={(values: any, actions) => {
              setTimeout(() => {
                pushToast({
                  variables: {
                    options: {
                      name: values.name,
                      amount: Number.parseInt(values.amount),
                      category: Number.parseInt(values.category),
                    }!,
                  },
                })
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {props => (
              <Form>
                <Box height='0px'>
                  <Field name='name'>
                    {({ field, form }) => (
                      <FormControl>
                        <Editable
                          {...field}
                          id='name'
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
                  <Field name='category'>
                    {({ field, form }) => (
                      <FormControl id='category'>
                        <FormLabel htmlFor='category'>Category</FormLabel>
                        <Select {...field} placeholder='Select category'>
                          <option value='0'>Option 0</option>
                          <option value='1'>Option 1</option>
                          <option value='2'>Option 2</option>
                          <option value='3'>Option 3</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='amount'>
                    {({ field, form }) => (
                      <FormControl id='amount'>
                        <FormLabel htmlFor='amount'>Amount</FormLabel>
                        <Select {...field} placeholder='Select amount'>
                          <option value='1'>$1</option>
                          <option value='5'>$5</option>
                          <option value='10'>$10</option>
                          <option value='50'>$50</option>
                          <option value='100'>$100</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Center mt={'300px'}>
                  <Box w='200px' h='200px'>
                    <Button
                      type='submit'
                      onClick={() => {
                        setPressed(true)
                        if (name === '') {
                          setTimeout(() => {
                            onOpen()
                          }, 100)
                        }
                        setTimeout(() => {
                          setPressed(false)
                        }, 500)
                      }}
                      bg='white'
                      _hover={{ bg: 'white' }}
                      _focus={{ bg: 'white' }}
                      _active={{ bg: 'white' }}
                    >
                      <Image
                        id='theButton'
                        src={`/img/button${
                          props.isSubmitting || pressed ? '-pressed' : ''
                        }.png`}
                        alt='Push'
                      />
                    </Button>
                  </Box>
                </Center>
              </Form>
            )}
          </Formik>
        </Flex>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          closeOnOverlayClick={false}
          isCentered
          size='sm'
        >
          <ModalOverlay
            bg='rgba(0,0,0,0)'
            style={{ backdropFilter: 'blur(5px)', zIndex: 6000 }}
          />
          <ModalContent style={{ zIndex: 10000 }} w='300px' mx='auto' my='auto'>
            <ModalHeader>What's your name?</ModalHeader>
            <Formik
              initialValues={{ name2: name }}
              onSubmit={(values: any, actions) => {
                setTimeout(() => {
                  setName(values.name2)
                  actions.setSubmitting(false)
                  onClose()
                }, 100)
              }}
            >
              {props => (
                <Form>
                  <ModalBody pb={6}>
                    <Field name='name2' validate={validateName}>
                      {({ field, form }) => (
                        <FormControl
                          id='name2'
                          isInvalid={form.errors.name2 && form.touched.name2}
                        >
                          <Input
                            {...field}
                            ref={initialRef}
                            placeholder='Full name'
                          />
                          <FormErrorMessage>
                            {form.errors.name2}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      bg='#fff700'
                      mr={3}
                      type='submit'
                      _hover={{ bg: '#ffba00' }}
                      _focus={{ bg: '#ffba00' }}
                      _active={{ bg: '#ffba00' }}
                      borderRadius='20px'
                      size='lg'
                      fontWeight='bolder'
                    >
                      {' '}
                      OK{' '}
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalContent>
        </Modal>
      </Wrapper>
    </>
  )
}

export default withApollo({ ssr: true })(Todos)
