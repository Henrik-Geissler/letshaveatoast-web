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
  RadioGroup,
  Select,
  SimpleGrid,
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
  useRadioGroup,
} from '@chakra-ui/react'
import { Center, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { Wrapper } from '../components/Wrapper'
import OkV from '../components/Toast/Ok/OkV'
import RadioCardC from '../components/Toast/RadioCard/RadioCardC'
import RadioToastC from '../components/Toast/RadioToast/RadioToastC'
import { Container } from 'next/app'
import SentenceV from '../components/Toast/Sentence/SentenceV'
import CardTable from '../components/Toast/CardTable/CardTable'
import ToastTable from '../components/Toast/ToastTable/ToastTable'
//backdrop-filter: blur(5px);
const FRESH_TOAST = gql`
  query getToast {
    getToast {
      name
      id
      amount
      category
      createdAt
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
const valueFromCategory = cat => {
  for (let each of CardTable) {
    if (each.name === cat) {
      return each.value
    }
  }
  return 'SORRY'
}
const valueFromToast = cat => {
  for (let each of ToastTable) {
    if (each.name === cat) {
      return each.value
    }
  }
  return 'SORRY'
}
const Todos: React.FC<StyleVProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure()
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure()
  const { loading, error, data } = useQuery(FRESH_TOAST, {
    pollInterval: 500,
  })

  const options = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
  ]
  const toastOptions = ['0', '1', '2', '3', '4', '5']

  const { getRadioProps } = useRadioGroup({
    name: 'category2',
    defaultValue: 'react',
    onChange: console.log,
  })
  const { getRadioProps: getRadioProps2 } = useRadioGroup({
    name: 'amount2',
    defaultValue: 'react',
    onChange: console.log,
  })
  const [pushToast, res] = useLazyQuery(PUSH_TOAST, { fetchPolicy: 'no-cache' })
  const [pressed, setPressed] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [pushedToast, setPushedToast] = useState(0)

  const initialRef = useRef()
  const finalRef = useRef()
  const initialRef2 = useRef()
  const finalRef2 = useRef()
  const initialRef3 = useRef()
  const finalRef3 = useRef()
  console.log(data)
  const toast = useToast()
  if (res.loading) return <>Loading up ...</>
  if (data !== undefined)
    if (data.getToast !== undefined)
      if (data.getToast.id !== pushedToast) {
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
              <Flex style={{ pointerEvents: 'none' }}>
                <Center mr={14} style={{ pointerEvents: 'none' }}>
                  <Text fontSize='30px' style={{ pointerEvents: 'none' }}>
                    <GiFireworkRocket
                      height='2em'
                      style={{ pointerEvents: 'none' }}
                    />
                  </Text>
                </Center>
                <Flex direction='column' style={{ pointerEvents: 'none' }}>
                  <Text
                    style={{ pointerEvents: 'none' }}
                    fontFamily='Calibri, sans-serif'
                    fontWeight='thin'
                  >{`${data.getToast.name}:`}</Text>
                  <Text
                    style={{ pointerEvents: 'none' }}
                    fontFamily='Calibri, sans-serif'
                    fontWeight={0.1}
                  >{`Let's have a ${ToastTable[data.getToast.amount].name} on ${
                    CardTable[data.getToast.category].name
                  }`}</Text>
                  {/** 
                  {data.getToast.id}
                  {'-'}
                  {data.getToast.createdAt}
                  */}
                </Flex>
              </Flex>
            </Box>
          ),
        })
        setPushedToast(data.getToast.id)
      }

  return (
    <>
      <style>
        {
          '.chakra-modal__content-container {z-index:10000;} .radioBox:hover + div, .radioBox:active + div, .radioBox:checked + div{background-color:rgba(255,255,255,0.3) !important;} .radioBox:checked + div{box-shadow: 0 0px 0px 4px rgba(0,0,0,1), 0 2px 4px -1px rgba(0,0,0,0.06) !important;} .chakra-toast,.chakra-toast__inner {pointer-events: none ! important}'
        }
      </style>
      <Wrapper>
        <Flex direction='column'>
          <Center mt={200}>
            <Image src='/img/logo.png' alt="Let's have a toast" w='360px' />
          </Center>
          <Formik
            initialValues={{}}
            onSubmit={(values: any, actions) => {
              console.log('PUSH: ' + name + ' ' + amount + ' ' + category)
              pushToast({
                variables: {
                  options: {
                    name: name,
                    amount: valueFromToast(amount),
                    category: valueFromCategory(category),
                  }!,
                },
              })
              setTimeout(() => {
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {props => (
              <Form>
                <SentenceV
                  onOpen={onOpen}
                  onOpen2={onOpen2}
                  onOpen3={onOpen3}
                  amount={amount}
                  category={category}
                  name={name}
                />
                <Center mt={'300px'}>
                  <Box w='200px' h='200px'>
                    <Button
                      type='submit'
                      onClick={() => {
                        setPressed(true)
                        setTimeout(() => {
                          if (name === '') {
                            onOpen()
                          } else if (category === '') {
                            onOpen2()
                          } else if (amount === '') {
                            onOpen3()
                          }
                        }, 100)
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
          {/** 
          <Center w='200px' h='200px'>
            <form
              action='https://www.paypal.com/donate'
              method='post'
              target='_top'
            >
              <input
                type='hidden'
                name='hosted_button_id'
                value='VRZX59ABT28UJ'
              />
              <input
                width='200px'
                height='200px'
                type='image'
                src='img/button.png'
                border='0'
                name='submit'
                title='PayPal - The safer, easier way to pay online!'
                alt='Donate with PayPal button'
              />
              <img
                alt=''
                border='0'
                src='https://www.paypal.com/en_DE/i/scr/pixel.gif'
                width='1'
                height='1'
              />
            </form>
          </Center>
          */}
        </Flex>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          closeOnOverlayClick={false}
          isCentered
          size='sm'
          scrollBehavior='inside'
        >
          <ModalOverlay
            bg='rgba(255,255,255,0.4)'
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
                  <OkV />
                </Form>
              )}
            </Formik>
          </ModalContent>
        </Modal>
        <Modal
          initialFocusRef={initialRef2}
          finalFocusRef={finalRef2}
          isOpen={isOpen2}
          onClose={onClose2}
          closeOnOverlayClick={false}
          isCentered
          size='sm'
          width='800px'
          scrollBehavior='inside'
        >
          <ModalOverlay
            bg='rgba(255,255,255,0.4)'
            style={{ backdropFilter: 'blur(5px)', zIndex: 6000 }}
          />
          <ModalContent
            style={{ zIndex: 10000, maxWidth: '588px' }}
            w='100%'
            mx='auto'
            my='auto'
          >
            <ModalHeader>Who are you toasting to?</ModalHeader>
            <Formik
              initialValues={{
                category2: valueFromCategory(category),
              }}
              onSubmit={(values: any, actions) => {
                setTimeout(() => {
                  actions.setSubmitting(false)
                  onClose2()
                }, 100)
              }}
            >
              {props => (
                <Form>
                  <ModalBody pb={6} pt={4}>
                    <Field name='category2'>
                      {({ field, form }) => (
                        <FormControl id='category2'>
                          <RadioGroup name='category2' {...field}>
                            <div
                              style={{
                                maxHeight: '500px',
                                overflowY: 'scroll',
                                overflowX: 'visible',
                              }}
                            >
                              <input
                                type='radio'
                                value={0}
                                width='0px'
                                height='0px'
                                style={{
                                  visibility: 'hidden',
                                  margin: '0px',
                                  padding: '0px',
                                }}
                              />
                              <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                                {options.map(value => {
                                  const radio = getRadioProps({ value })
                                  return (
                                    <RadioCardC
                                      key={value}
                                      radio={radio}
                                      setCategory={setCategory}
                                    />
                                  )
                                })}
                              </SimpleGrid>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      )}
                    </Field>
                  </ModalBody>
                </Form>
              )}
            </Formik>
          </ModalContent>
        </Modal>
        <Modal
          initialFocusRef={initialRef3}
          finalFocusRef={finalRef3}
          isOpen={isOpen3}
          onClose={onClose3}
          closeOnOverlayClick={false}
          isCentered
          size='sm'
          width='800px'
          scrollBehavior='inside'
        >
          <ModalOverlay
            bg='rgba(255,255,255,0.4)'
            style={{ backdropFilter: 'blur(5px)', zIndex: 6000 }}
          />
          <ModalContent
            style={{ zIndex: 10000, maxWidth: '588px' }}
            w='100%'
            mx='auto'
            my='auto'
          >
            <ModalHeader>Choose your Toast</ModalHeader>
            <Formik
              initialValues={{
                amount2: valueFromToast(amount),
              }}
              onSubmit={(values: any, actions) => {
                setTimeout(() => {
                  actions.setSubmitting(false)
                  onClose3()
                }, 100)
              }}
            >
              {props => (
                <Form>
                  <ModalBody pb={6} pt={4}>
                    <Field name='amount2'>
                      {({ field, form }) => (
                        <FormControl id='amount2'>
                          <RadioGroup name='amount2' {...field}>
                            <input
                              type='radio'
                              value={0}
                              width='0px'
                              height='0px'
                              style={{
                                visibility: 'hidden',
                                margin: '0px',
                                padding: '0px',
                              }}
                            />
                            <div
                              style={{
                                maxHeight: '500px',
                                overflowY: 'scroll',
                                overflowX: 'visible',
                              }}
                            >
                              <Box>
                                {toastOptions.map(value => {
                                  const radio = getRadioProps({ value })
                                  return (
                                    <RadioToastC
                                      key={value}
                                      radio={radio}
                                      setAmount={setAmount}
                                    />
                                  )
                                })}
                              </Box>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      )}
                    </Field>
                  </ModalBody>
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
