import { withApollo } from '../utils/withApollo'
import {
  gql,
  selectHttpOptionsAndBody,
  useLazyQuery,
  useQuery,
} from '@apollo/client'
import { useState, useEffect, useRef } from 'react'
import { FaUser } from 'react-icons/fa'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  Link,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/core'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  useRadioGroup,
  InputLeftElement,
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
import ButtonGroupV from '../components/Toast/ButtonGroup/ButtonGroupV'
import BackV from '../components/Toast/Back/BackV'
import FooterV from '../components/Toast/Footer/FooterV'
import MainV from '../components/Toast/Main/MainV'
import BotTable from '../components/Toast/BotTable/BotTable'
import Head from 'next/head'
import AboutTheOthersV from '../components/Toast/AboutTheOthers/AboutTheOthersV'
import ToastContentV from '../components/Toast/ToastContent/ToastContentV'
import CardDetail from '../components/Toast/CardDetail/CardDetail'
import SpaceV from '../components/General/Space/SpaceV'
import HeadV from '../components/Toast/Head/HeadV'

const LOCAL = false //TODO: false for production
const PAY_MODE = 0 //TODO: 0 for production
const IDLE_DELAY = 12000 //TODO: 10 for production
const TIMES_TOAST_STAY = 1000 //TODO: 1 for production
const POLL_INTERVAL = 500 //TODO: 500 for production
const POLL_STATS_INTERVAL = 20000 //TODO: 20000 for production

const FRESH_TOAST = gql`
  query getToast {
    getToast {
      name
      message
      id
      amount
      category
      #createdAt
    }
  }
`
const GET_TOAST = gql`
  query getToastById($id: Float!) {
    getToastById(id: $id) {
      #id
      #createdAt
      name
      message
      category
      amount
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
        #name
        id
        #amount
        #category
        #message
      }
    }
  }
`
const FRESH_STATS = gql`
  query getStats {
    getStats {
      id
      createdAt
      name1
      nameSum1
      name2
      nameSum2
      name3
      nameSum3
      name4
      nameSum4
      name5
      nameSum5
      name6
      nameSum6
      name7
      nameSum7
      name8
      nameSum8
      name9
      nameSum9
      name10
      nameSum10
      category1
      categorySum1
      category2
      categorySum2
      category3
      categorySum3
      category4
      categorySum4
      category5
      categorySum5
      category6
      categorySum6
      category7
      categorySum7
      category8
      categorySum8
      category9
      categorySum9
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
  } else if (value.length > 16) {
    error = 'Name is to long'
  } else if (
    value.includes('?') ||
    value.includes('%') ||
    value.includes('=') ||
    value.includes('/') ||
    value.includes('\\') ||
    value.includes('&') ||
    value.includes('.') ||
    value.includes(':') ||
    value.includes('(') ||
    value.includes(')') ||
    value.includes('{') ||
    value.includes('}')
  ) {
    error = 'Only letters and numbers are allowed'
  }
  return error
}
function validateMessage(value) {
  let error
  if (!value) {
    return
  } else if (value.length > 60) {
    error = 'Message is to long'
  } else if (
    value.includes('?') ||
    value.includes('%') ||
    value.includes('=') ||
    value.includes('/') ||
    value.includes('\\') ||
    value.includes('&') ||
    value.includes('.') ||
    value.includes(':') ||
    value.includes('(') ||
    value.includes(')') ||
    value.includes('{') ||
    value.includes('}')
  ) {
    error = 'Only letters and numbers are allowed'
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
const updateUrl = (name, message, category, amount) => {
  const a = valueFromToast(amount)
  const c = valueFromCategory(category)
  window.history.replaceState(
    {},
    document.title,
    `${name !== '' ? '?n=' : ''}${name}${
      message !== 'notset' ? `&m=${message}` : ''
    }${category !== '' ? `&c=${c}` : ''}${amount !== '' ? `&a=${a}` : ''}`
  )
}
const packToast = (toast, name, message, category, amount, audio, fake) => {
  if (audio !== null) {
    const promise = audio.play()

    if (promise !== undefined) {
      promise.then(() => {}).catch(error => console.error)
    }
  }
  return toast({
    duration:
      (fake ? 2000 : 10000) + 2000 * (amount + 1) ** 1.7 * TIMES_TOAST_STAY,
    isClosable: false,
    position: 'top-right',
    render: () => (
      <ToastV
        amount={ToastTable[amount].name}
        color={ToastTable[amount].tcolor}
        color2={ToastTable[amount].tcolor2}
        hidden={true}
      >
        <ToastContentV
          category={CardTable[category].name}
          name={name}
          message={message}
          amount={ToastTable[amount].name}
          colorCard={CardTable[category].colorLight}
        />
      </ToastV>
    ),
  })
}
const idleToast = (newToast, setNewToast, toast, audio, first) => {
  if (newToast) return
  setNewToast(false)
  const seconds = Date.now() / 1000
  const period =
    (seconds - (seconds % IDLE_DELAY)) / IDLE_DELAY - (first ? 3 : 0)
  const name = BotTable[period % BotTable.length]
  const rndNumber = name.length + period
  const amount = rndNumber % 3
  const category = rndNumber % CardTable.length
  const delay = first ? 2000 : 1000 * (rndNumber % (IDLE_DELAY + 2))
  if ((rndNumber * (rndNumber / 10) * (rndNumber / 3)) % 2 == 0) {
    return setTimeout(() => {
      packToast(toast, name, '', category, amount, audio, true)
    }, delay)
  }
}

function unlockAudio() {
  const sound = new Audio('sounds/notification.mp3')

  sound.play()
  sound.pause()
  sound.currentTime = 0

  document.body.removeEventListener('click', unlockAudio)
  document.body.removeEventListener('touchstart', unlockAudio)
}
const Todos: React.FC<StyleVProps> = () => {
  const [buttonLoaded, setButtonLoaded] = useState(false)
  const [payMode, setPayMode] = useState(PAY_MODE)
  const [payState, setPayState] = useState(null)
  const [audioToast, setAudioToast] = useState(null)
  const [newToast, setNewToast] = useState(false)
  const [pending, setPending] = useState(-2)
  const [dataMode, setDataMode] = useState(false)
  const [dataStats, setDataStats] = useState()
  const [lastStats, setLastStats] = useState(0)
  const [toastMode, setToastMode] = useState(0)
  const [linkedToast, setLinkedToast] = useState(null)

  const { refetch } = useQuery(PUSH_TOAST, { skip: true })
  const { refetch: getToast } = useQuery(GET_TOAST, { skip: true })
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
    console.log(window.location.search)
    if (window.location.search.includes('=')) {
      window.location.search
        .substr(1)
        .split('&')
        .forEach(item => {
          const tmp = item.split('=')
          if (tmp[0] === 'n') setName(decodeURIComponent(tmp[1]))
          else if (tmp[0] === 'm') setMessage(decodeURIComponent(tmp[1]))
          else if (tmp[0] === 'c')
            setCategory(CardTable[decodeURIComponent(tmp[1])].name)
          else if (tmp[0] === 'a')
            setAmount(ToastTable[decodeURIComponent(tmp[1])].name)
          else if (tmp[0] === 's') setPayState(decodeURIComponent(tmp[1]))
        })
    } else if (window.location.search.includes('?')) {
      const toastId = Number.parseInt(window.location.search.slice(1))
      setToastMode(toastId)
      getToast({
        id: toastId!,
      }).then(value => {
        setLinkedToast(value)
      })
    }
    updateUrl(name, message, category, amount)

    document.body.addEventListener('click', unlockAudio)
    document.body.addEventListener('touchstart', unlockAudio)
    if (audioToast === null) {
      setAudioToast(new Audio('sounds/notification.mp3'))
    }
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      idleToast(
        newToast || pending !== -2,
        setNewToast,
        toast,
        audioToast,
        false
      )
    }, 1000 * IDLE_DELAY)
    const timeout = idleToast(
      newToast || pending !== -2 || toastMode !== 0,
      setNewToast,
      toast,
      audioToast,
      true
    )
    const timeout2 = idleToast(
      newToast || pending !== -2,
      setNewToast,
      toast,
      audioToast,
      false
    )
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      clearTimeout(timeout2)
    }
  }, [newToast, pending, toastMode])
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
  const {
    isOpen: isOpen5,
    onOpen: onOpen5,
    onClose: onClose5,
  } = useDisclosure()
  const {
    isOpen: isOpen6,
    onOpen: onOpen6,
    onClose: onClose6,
  } = useDisclosure()
  const {
    isOpen: isOpen7,
    onOpen: onOpen7,
    onClose: onClose7,
  } = useDisclosure()
  const { data } = useQuery(FRESH_TOAST, {
    pollInterval: POLL_INTERVAL,
  })
  const { data: dataStatsFresh } = useQuery(FRESH_STATS, {
    pollInterval: POLL_STATS_INTERVAL,
  })
  const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  const toastOptions = ['0', '1', '2', '3', '4', '5', '6']

  const { getRadioProps } = useRadioGroup({
    name: 'category2',
    defaultValue: 'react',
    onChange: console.log,
  })
  const [pressed, setPressed] = useState(false)
  const [freeToast, setFreeToast] = useState(1)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('notset')
  const [category, setCategory] = useState('')
  const [categoryPreset, setCategoryPreset] = useState('')
  const [amount, setAmount] = useState('')
  const [pushedToast, setPushedToast] = useState(null)

  const [reRoll, setReRoll] = useState(false)

  const initialRef = useRef()
  const finalRef = useRef()
  const initialRef2 = useRef()
  const finalRef2 = useRef()
  const initialRef3 = useRef()
  const finalRef3 = useRef()
  const initialRef4 = useRef()
  const finalRef4 = useRef()
  const initialRef5 = useRef()
  const finalRef5 = useRef()
  const initialRef6 = useRef()
  const finalRef6 = useRef()
  const initialRef7 = useRef()
  const finalRef7 = useRef()

  const toast = useToast()
  if (payState === '1') {
    setPayState(null)
    setButtonLoaded(true)
  }
  if (dataStatsFresh !== undefined) {
    if (dataStatsFresh.getStats !== undefined) {
      if (dataStatsFresh.getStats.id !== lastStats) {
        setDataStats(dataStatsFresh.getStats)
        setLastStats(dataStatsFresh.getStats.id)
      }
    }
  }
  if (data !== undefined)
    if (data.getToast !== undefined)
      if (data.getToast.id !== pushedToast) {
        if (pushedToast !== null) {
          setNewToast(true)
          if (pending === data.getToast.id) {
            setPending(-2)
          }
          packToast(
            toast,
            data.getToast.name,
            data.getToast.message,
            Number.parseInt(data.getToast.category),
            Number.parseInt(data.getToast.amount),
            audioToast,
            false
          )
        }
        setPushedToast(data.getToast.id)
      }

  if (name !== '' && !isOpen && !isOpen2 && !isOpen3 && !isOpen4 && !isOpen5) {
    updateUrl(name, message, category, amount)
    if (categoryPreset === '' && category === '') {
      setTimeout(() => {
        onOpen2()
      }, 500)
    } else if (category === '') {
      setTimeout(() => {
        onOpen6()
      }, 500)
    } else if (message === 'notset') {
      setTimeout(() => {
        onOpen7()
      }, 500)
    } else if (amount === '') {
      setTimeout(() => {
        onOpen3()
      }, 500)
    }
  }
  if (typeof window !== 'undefined') {
    if (document) {
      useEffect(() => {
        const doScroll = document.querySelector('.modal2')
        if (doScroll !== null) {
          setTimeout(() => {
            doScroll.scrollTo(0, 0)
          }, 0)
        }
      }, [isOpen2])
      useEffect(() => {
        const doScroll = document.querySelector('.modal6')
        if (doScroll !== null) {
          setTimeout(() => {
            doScroll.scrollTo(0, 0)
          }, 0)
        }
      }, [isOpen6])
    }
  }
  const timestamp = Date.now()
  return (
    <>
      <HeadV />
      <PageWrapV>
        <Wrapper>
          <Formik
            initialValues={{}}
            onSubmit={(values: any, actions) => {
              setTimeout(() => {
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {props => (
              <Form>
                <MainV
                  category={category}
                  onOpen={onOpen}
                  onOpen2={onOpen2}
                  onOpen3={onOpen3}
                  amount={amount}
                  name={name}
                  message={message}
                  reRoll={reRoll && pending === -2}
                  setReRoll={() => {
                    setReRoll(false)
                    setAmount('')
                    setCategory('')
                    setCategoryPreset('')
                    setName('')
                    updateUrl('', 'notset', '', '')
                  }}
                  color={ToastTable[valueFromToast(amount)].tcolor}
                  color2={ToastTable[valueFromToast(amount)].tcolor2}
                  colorCard={CardTable[valueFromCategory(category)].colorLight}
                  payState={payState}
                  dataStats={dataStats}
                  dataMode={dataMode}
                  setDataMode={setDataMode}
                  toastMode={toastMode !== 0}
                  linkedToast={linkedToast}
                  toastId={pushedToast ? pushedToast : 0}
                />
                <ButtonGroupV
                  onOpen={onOpen}
                  onOpen2={onOpen2}
                  onOpen3={onOpen3}
                  onOpen5={onOpen4}
                  onPush={() => {
                    refetch({
                      options: {
                        name: name,
                        message: message,
                        amount: valueFromToast(amount),
                        category: valueFromCategory(category),
                      }!,
                    }).then(value => {
                      setPending(value.data.newToast.toast.id)
                    })
                    setPending(-1)
                    setButtonLoaded(false)
                  }}
                  setPressed={setPressed}
                  name={name}
                  category={category}
                  amount={amount}
                  pressed={props.isSubmitting || pressed}
                  payMode={payMode}
                  buttonLoaded={buttonLoaded}
                  payState={payState}
                  reRoll={reRoll && pending === -2}
                  setReRoll={setReRoll}
                  pending={pending !== -2}
                  dataMode={dataMode}
                  setDataMode={setDataMode}
                  toastMode={toastMode !== 0}
                  linkedToast={linkedToast}
                  clearLinkedToast={() => {
                    setToastMode(0)
                    setLinkedToast(null)
                  }}
                />
              </Form>
            )}
          </Formik>
          <FooterV />
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
                    setName(values['name' + timestamp])
                    actions.setSubmitting(false)
                    onClose()
                  }, 100)
                }}
              >
                {props => (
                  <Form>
                    <ModalBody pb={6} pt={6}>
                      <Field name={'name' + timestamp} validate={validateName}>
                        {({ field, form }) => (
                          <FormControl
                            id='name2'
                            isInvalid={form.errors['name' + timestamp]}
                          >
                            {/**
                            <InputGroup>
                              <InputLeftElement
                                pointerEvents='none'
                                children={<FaUser color='gray.300' />}
                              />
                            </InputGroup>
                               */}
                            <Input
                              {...field}
                              ref={initialRef}
                              placeholder='Enter your name'
                            />
                            <FormErrorMessage>
                              {form.errors['name' + timestamp]}
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
              className='h100 modal2'
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
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
                                  pb='100px'
                                >
                                  {options.map(value => {
                                    const radio = getRadioProps({ value })
                                    return (
                                      <RadioCardC
                                        key={value}
                                        radio={radio}
                                        setCategory={setCategoryPreset}
                                        onClose={() => {
                                          onClose2()
                                          onOpen6()
                                        }}
                                        fake={false}
                                      />
                                    )
                                  })}
                                  <LearnMoreV
                                    onOpen={() => {
                                      onClose2()
                                      onOpen4()
                                    }}
                                  >
                                    {' '}
                                    LEARN
                                    <br />
                                    MORE{' '}
                                  </LearnMoreV>
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
              className='h100'
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
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
                                <Box pb='100px'>
                                  {toastOptions.map(value => {
                                    const radio = getRadioProps({ value })
                                    return (
                                      <RadioToastC
                                        key={value}
                                        radio={radio}
                                        setAmount={setAmount}
                                        setButtonLoaded={setButtonLoaded}
                                        setFreeToast={setFreeToast}
                                        freeToast={freeToast}
                                        onClose={onClose3}
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
              className='h100'
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
              mx='auto'
              my='auto'
              backgroundColor='rgba(255,255,255,0.4)'
              boxShadow='0 0 5px 5px rgba(255,255,255,0.4)'
            >
              <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <BackV onClose={onClose4} />
                <ModalHeader pt={10} fontSize='18px'>
                  <ImageV src='labels/u4'></ImageV>
                </ModalHeader>
                <ModalBody>
                  <AboutV
                    onMore={() => {
                      onClose4()
                      onOpen5()
                    }}
                  />
                  <BackV onClose={onClose4} />
                  <SpaceV x={20} y={100} />
                </ModalBody>
              </div>
            </ModalContent>
          </Modal>
          <Modal
            initialFocusRef={initialRef5}
            finalFocusRef={finalRef5}
            isOpen={isOpen5}
            onClose={onClose5}
            closeOnOverlayClick={true}
            isCentered
            size='sm'
            scrollBehavior='inside'
          >
            <ModalBackgroundV />
            <ModalContent
              className='h100'
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
              mx='auto'
              my='auto'
              backgroundColor='rgba(255,255,255,0.4)'
              boxShadow='0 0 5px 5px rgba(255,255,255,0.4)'
            >
              <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <BackV onClose={onClose5} />
                <ModalHeader pt={10} fontSize='18px'>
                  <ImageV src='labels/u5'></ImageV>
                </ModalHeader>
                <ModalBody>
                  <AboutTheOthersV
                    onMore={() => {
                      onClose5()
                      onOpen4()
                    }}
                    orgas={CardTable}
                  />
                  <BackV onClose={onClose5} />
                  <SpaceV x={20} y={100} />
                </ModalBody>
              </div>
            </ModalContent>
          </Modal>
          <Modal
            initialFocusRef={initialRef6}
            finalFocusRef={finalRef6}
            isOpen={isOpen6}
            onClose={() => {
              setCategoryPreset('')
              onClose6()
            }}
            closeOnOverlayClick={true}
            isCentered
            size='sm'
            scrollBehavior='inside'
          >
            <ModalBackgroundV />
            <ModalContent
              className='h100 modal6'
              style={{
                zIndex: 10000,
                maxWidth: '588px',
                overflowY: 'scroll',
                overflowX: 'visible',
              }}
              w='95vw'
              mx='auto'
              my='auto'
              backgroundColor='rgba(255,255,255,0.4)'
              boxShadow='0 0 5px 5px rgba(255,255,255,0.4)'
            >
              <ModalHeader pt={10} fontSize='18px'>
                <ImageV src='labels/u2'></ImageV>
              </ModalHeader>
              <Formik
                initialValues={{ category3: categoryPreset }}
                onSubmit={(values: any, actions) => {
                  setTimeout(() => {
                    setCategory(values['category3'])
                    actions.setSubmitting(false)
                    onClose6()
                  }, 100)
                }}
              >
                {props => (
                  <Form>
                    <ModalBody pb={6} pt={6}>
                      <Field name='category3'>
                        {({ field, form }) => (
                          <FormControl id='category3'>
                            <Input {...field} ref={initialRef6} type='hidden' />
                            <CardDetail
                              card={
                                CardTable[valueFromCategory(categoryPreset)]
                              }
                              ctx={false}
                            />
                          </FormControl>
                        )}
                      </Field>
                    </ModalBody>
                    <Flex justifyContent='space-between'>
                      <Box marginTop='-2.5rem'>
                        <BackV
                          onClose={() => {
                            setCategoryPreset('')
                            onClose6()
                          }}
                        />
                      </Box>
                      <OkV />
                    </Flex>
                    <SpaceV x={20} y={100} />
                  </Form>
                )}
              </Formik>
            </ModalContent>
          </Modal>
          <Modal
            initialFocusRef={initialRef7}
            finalFocusRef={finalRef7}
            isOpen={isOpen7}
            onClose={onClose7}
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
                <ImageV src='labels/u6'></ImageV>
              </ModalHeader>
              <Formik
                initialValues={{ message2: message }}
                onSubmit={(values: any, actions) => {
                  setTimeout(() => {
                    setMessage(
                      values['message' + timestamp]
                        ? values['message' + timestamp].replaceAll('\n', ' ')
                        : ''
                    )
                    actions.setSubmitting(false)
                    onClose7()
                  }, 100)
                }}
              >
                {props => (
                  <Form>
                    <ModalBody pb={6} pt={6}>
                      <Field
                        name={'message' + timestamp}
                        validate={validateMessage}
                      >
                        {({ field, form }) => (
                          <FormControl
                            id='message2'
                            isInvalid={form.errors['message' + timestamp]}
                          >
                            <Textarea
                              {...field}
                              ref={initialRef7}
                              placeholder='Enter a message, or leave empty'
                            />
                            <FormErrorMessage>
                              {form.errors['message' + timestamp]}
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
        </Wrapper>
      </PageWrapV>
      <PaypalV
        target={CardTable[valueFromCategory(category)].paypal}
        name={name}
        amount={Number.parseInt(ToastTable[valueFromToast(amount)].amount)}
        amountT={valueFromToast(amount)}
        category={valueFromCategory(category)}
        purpose={`Let's have a toast on ${category}`}
        sandbox={payMode === 1}
        buy={payMode === 1}
        image={CardTable[valueFromCategory(category)].orga.replace('#', '')}
        local={LOCAL}
      />
    </>
  )
}

export default withApollo({ ssr: true })(Todos)
