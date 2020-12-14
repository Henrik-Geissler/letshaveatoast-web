import { withApollo } from '../utils/withApollo'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/core'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useRadioGroup,
  Spacer,
} from '@chakra-ui/react'
import { Center, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { Wrapper } from '../components/Wrapper'
import OkV from '../components/Toast/Ok/OkV'
import RadioCardC from '../components/Toast/RadioCard/RadioCardC'
import RadioToastC from '../components/Toast/RadioToast/RadioToastC'
import SentenceV from '../components/Toast/Sentence/SentenceV'
import CardTable from '../components/Toast/CardTable/CardTable'
import ToastTable from '../components/Toast/ToastTable/ToastTable'
import PageWrapV from '../components/Toast/PageWrap/PageWrapV'
import ModalBackgroundV from '../components/Toast/ModalBackground/ModalBackgroundV'
import ToastV from '../components/Toast/Toast/ToastV'
import ImageV from '../components/General/Image/ImageV'
import SentenceTextV from '../components/Toast/SentenceText/SentenceTextV'
import PaypalV from '../components/Toast/Paypal/PaypalV'
import AboutV from '../components/Toast/About/AboutV'
import LearnMoreV from '../components/Toast/LearnMore/LearnMoreV'
import ButtonV from '../components/Toast/Button/ButtonV'
import BackV from '../components/Toast/Back/BackV'

const FRESH_TOAST = gql`
  query getToast {
    getToast {
      #SWITCH
      firstname
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
        #SWITCH
        lastname
        firstname
        id
        amount
        category
      }
    }
  }
`

interface StyleVProps {}

const product = {
  price: 777.77,
  name: 'comfy chair',
  description: 'fancy chair, like new',
}
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
  return 0
}
const valueFromToast = cat => {
  for (let each of ToastTable) {
    if (each.name === cat) {
      return each.value
    }
  }
  return 0
}
const Todos: React.FC<StyleVProps> = () => {
  const [payMode, setPayMode] = useState(0)
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('sounds/notification.mp3'))
  }, [])
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
  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure()
  const { loading, error, data } = useQuery(FRESH_TOAST, {
    pollInterval: 500,
  })
  const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  const toastOptions = ['0', '1', '2', '3', '4']

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
  const initialRef4 = useRef()
  const finalRef4 = useRef()
  //console.log(data)
  const toast = useToast()
  if (res.loading) return <>Loading up ...</>
  if (data !== undefined)
    if (data.getToast !== undefined)
      if (data.getToast.id !== pushedToast) {
        if (pushedToast !== null) {
          const variant = Number.parseInt(data.getToast.amount)
          toast({
            duration: 2000 * (variant + 1) ** 1.5,
            isClosable: false,
            position: 'top-right',
            render: () => (
              <ToastV
                variant={variant}
                //SWITCH
                name={data.getToast.firstname}
                amount={ToastTable[data.getToast.amount].name}
                category={CardTable[data.getToast.category].name}
                color={ToastTable[data.getToast.amount].tcolor}
                color2={ToastTable[data.getToast.amount].tcolor2}
              />
            ),
          })
          if (audio !== null) audio.play()
        }
        setPushedToast(data.getToast.id)
      }

  if (name !== '' && !isOpen && !isOpen2 && !isOpen3 && !isOpen4) {
    if (category === '') {
      setTimeout(() => {
        onOpen2()
      }, 500)
    } else if (amount === '') {
      setTimeout(() => {
        onOpen3()
      }, 500)
    }
  }
  return (
    <>
      <link rel='stylesheet' href='css/cheat.css' />
      <PageWrapV>
        <Wrapper>
          <Center
            top='40vh'
            h='0px'
            pos='absolute'
            w='100vw'
            p={0}
            m={0}
            left={0}
          >
            <Box maxW='100vw'>
              <Box m={0} p={5} maxW='400px' w={category === '' ? '100%' : '0%'}>
                <ImageV src='logo' />
              </Box>
            </Box>
          </Center>
          <Box top='90vh' h='0px' pos='absolute' p={0} m={0} left={0}>
            <Formik
              initialValues={{ payMode: payMode }}
              onSubmit={(values: any, actions) => {
                setTimeout(() => {
                  console.log('hi')
                  //setPayMode(values.payMode)
                }, 100)
              }}
            >
              {props => (
                <Form>
                  {payMode == 0
                    ? ''
                    : payMode == 1
                    ? 'Sandbox Mode (Dev Only)'
                    : 'Free Mode (Dev Only)'}
                  <Field name='payMode'>
                    {({ field, form }) => (
                      <FormControl id='payMode'>
                        <Select
                          size='sm'
                          {...field}
                          style={{ type: 'submit' }}
                          onChange={e => {
                            setPayMode(Number.parseInt(e.currentTarget.value))
                          }}
                        >
                          <option disabled value='0'>
                            DevMode:
                          </option>
                          <option disabled value='1'>
                            Sandbox
                          </option>
                          <option value='2'>Free</option>
                        </Select>
                      </FormControl>
                    )}
                  </Field>
                </Form>
              )}
            </Formik>
          </Box>
          <Formik
            initialValues={{}}
            onSubmit={(values: any, actions) => {
              console.log('PUSH: ' + name + ' ' + amount + ' ' + category)
              pushToast({
                variables: {
                  options: {
                    //SWITCH
                    lastname: 'ok',
                    firstname: name,
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
                <Center top='45vh' w='100vw' m={0} pos='absolute' left='0px'>
                  <SentenceV
                    onOpen={onOpen}
                    onOpen2={onOpen2}
                    onOpen3={onOpen3}
                    amount={amount}
                    category={category}
                    name={name}
                  />
                </Center>
                <Center
                  top='85vh'
                  left='0px'
                  w='100vw'
                  h='0px'
                  pos='absolute'
                  pt='0px'
                  bg='rgba(0,0,0,0)'
                >
                  <Box
                    className='theButton'
                    mx='auto'
                    p='auto'
                    bg='rgba(0,0,0,0)'
                  >
                    <Center m={0} p={0} h='0px'>
                      <Box mt='-5vh' mb={0} mx='auto' p={0}>
                        <Text fontFamily='Caviar Dreams' className='text20'>
                          Push the button!
                        </Text>
                      </Box>
                    </Center>
                    <ButtonV
                      onOpen={onOpen}
                      onOpen2={onOpen2}
                      onOpen3={onOpen3}
                      setPressed={setPressed}
                      name={name}
                      category={category}
                      amount={amount}
                      pressed={props.isSubmitting || pressed}
                      payMode={payMode}
                    />
                  </Box>
                </Center>
              </Form>
            )}
          </Formik>
          <Center
            top='98vh'
            w='100vw'
            h='0px'
            pos='absolute'
            m={0}
            p={0}
            left={0}
          >
            <Box maxW='100vw' mx='auto'>
              <Link
                href='/pdf/terms_and_conditions.pdf'
                isExternal
                my={0}
                p={0}
              >
                <Text as='u' className='text12'>
                  Terms and Conditions
                </Text>
              </Link>
            </Box>
          </Center>

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
            <ModalBackgroundV />
            <ModalContent
              style={{ zIndex: 10000 }}
              w='300px'
              mx='auto'
              my='auto'
            >
              <ModalHeader pt={10} fontSize='18px'>
                <ImageV src='labels/u1'></ImageV>
              </ModalHeader>
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
                    <ModalBody pb={6} pt={6}>
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
            closeOnOverlayClick={true}
            isCentered
            size='sm'
            scrollBehavior='inside'
          >
            <ModalBackgroundV />
            <ModalContent
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
              h='100vh'
              mx='auto'
              my='auto'
            >
              <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <ModalHeader pt={10} fontSize='18px'>
                  <ImageV src='labels/u2'></ImageV>
                </ModalHeader>
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
                      <ModalBody>
                        <Field name='category2'>
                          {({ field, form }) => (
                            <FormControl id='category2'>
                              <RadioGroup name='category2' {...field}>
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
                                <Flex
                                  wrap='wrap'
                                  alignContent='space-evenly'
                                  justifyContent='center'
                                >
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
                                  <LearnMoreV
                                    onOpen={() => {
                                      onClose2()
                                      onOpen4()
                                    }}
                                  />
                                </Flex>
                              </RadioGroup>
                            </FormControl>
                          )}
                        </Field>
                      </ModalBody>
                    </Form>
                  )}
                </Formik>
              </div>
            </ModalContent>
          </Modal>
          <Modal
            initialFocusRef={initialRef3}
            finalFocusRef={finalRef3}
            isOpen={isOpen3}
            onClose={onClose3}
            closeOnOverlayClick={true}
            isCentered
            size='sm'
            scrollBehavior='inside'
          >
            <ModalBackgroundV />
            <ModalContent
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
              h='100vh'
              mx='auto'
              my='auto'
            >
              <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <ModalHeader pt={10} fontSize='18px'>
                  <ImageV src='labels/u3'></ImageV>
                </ModalHeader>
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
                      <ModalBody>
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
                                <Box pb={10}>
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
                              </RadioGroup>
                            </FormControl>
                          )}
                        </Field>
                      </ModalBody>
                    </Form>
                  )}
                </Formik>
              </div>
            </ModalContent>
          </Modal>
          <Modal
            initialFocusRef={initialRef4}
            finalFocusRef={finalRef4}
            isOpen={isOpen4}
            onClose={onClose4}
            closeOnOverlayClick={true}
            isCentered
            size='sm'
            scrollBehavior='inside'
          >
            <ModalBackgroundV />
            <ModalContent
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
              h='100vh'
              mx='auto'
              my='auto'
            >
              <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <BackV onClose={onClose4} />
                <ModalHeader pt={10} fontSize='18px'>
                  <ImageV src='labels/u4'></ImageV>
                </ModalHeader>
                <ModalBody>
                  <AboutV />
                </ModalBody>
              </div>
            </ModalContent>
          </Modal>
        </Wrapper>
      </PageWrapV>
      <PaypalV
        target={CardTable[valueFromCategory(category)].paypal}
        pass={`${valueFromCategory(category)}-${valueFromToast(
          amount
        )}-${name}`}
        amount={Number.parseInt(ToastTable[valueFromToast(amount)].amount)}
        purpose={`Let's have a toast on ${category}`}
        sandbox={payMode === 1}
        buy={payMode === 1}
        image='lets'
      />
    </>
  )
}

export default withApollo({ ssr: true })(Todos)
