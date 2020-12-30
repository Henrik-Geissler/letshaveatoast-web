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
import React, { useState } from 'react'
import { FaChevronDown, FaQuoteLeft } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import ButtonV from '../Button/ButtonV'
import CardTable from '../CardTable/CardTable'
import HeadingV from '../Heading/HeadingV'
import SentenceTextV from '../SentenceText/SentenceTextV'
import SentenceUserV from '../SentenceUser/SentenceUserV'
import ThankYouV from '../ThankYou/ThankYouV'
import ToastV from '../Toast/ToastV'
import ToastContentV from '../ToastContent/ToastContentV'
import ToastEditV from '../ToastEdit/ToastEditV'
import ToastTable from '../ToastTable/ToastTable'

interface SentenceVProps {
  onOpen: any
  onOpen2: any
  onOpen3: any

  onOpen7: any
  category: string
  amount: string
  name: string
  message: string
  visible: boolean
  reRoll: boolean
  setReRoll: any
  color: string
  color2: string
  colorCard: string
  payState: any

  toastMode: boolean
  linkedToast: any
  toastId: number
  toastEditMode: boolean
  setToastEditMode: any
  isDone: boolean
  pending: boolean
}

const SentenceV: React.FC<SentenceVProps> = ({
  onOpen,
  onOpen2,
  onOpen3,
  onOpen7,
  category,
  amount,
  name,
  message,
  visible,
  reRoll,
  setReRoll,
  color,
  color2,
  colorCard,
  payState,

  toastMode,
  linkedToast,
  toastId,
  toastEditMode,
  setToastEditMode,
  isDone,
  pending,
}) => {
  const [firstPending, setFirstPending] = useState(true)
  if (!visible && !toastMode) {
    return <></>
  }
  if (payState === '0') {
    return (
      <>
        <Center className='t50' w='100vw' m={0} pos='absolute' left='0px'>
          <Flex direction='column'>
            <HeadingV>Ooops</HeadingV>
            <SentenceTextV>
              {'Something went wrong with your payment. :-('}
            </SentenceTextV>
          </Flex>
        </Center>
      </>
    )
  }
  if (reRoll && (!pending || !firstPending)) {
    if (firstPending) setFirstPending(false)
    return (
      <ThankYouV
        setReRoll={setReRoll}
        category={category}
        amount={amount}
        toastId={toastId}
        isDone={isDone && !pending}
      />
    )
  }
  if (toastMode) {
    if (linkedToast === null) return <></>
    const toast = linkedToast.data.getToastById
    if (toast === undefined) return <>no toast</>
    amount = ToastTable[toast.amount].name
    category = CardTable[toast.category].name
    color = ToastTable[toast.amount].tcolor
    color2 = ToastTable[toast.amount].tcolor2
    colorCard = CardTable[toast.category].colorLight
    name = toast.name
    message = toast.message
  }
  const v = toastMode ? (
    <Box transform='scale(0.6)' overflow='visible'>
      <HeadingV>A toast is dedicated to you:</HeadingV>
    </Box>
  ) : true ? (
    <HeadingV>Your toast:</HeadingV>
  ) : (
    <>
      <Box className='marginHeading'>
        <HeadingV>Your toast:</HeadingV>
      </Box>
      <Flex direction='revert' justifyContent='flex-end' mt='-23px'>
        <Button
          color='#fff700'
          borderColor='#fff700'
          bg='rgb(49,49,49)'
          mr={3}
          _hover={{ color: '#ffba00', borderColor: '#ffba00' }}
          borderWidth='1px'
          borderRadius='20px'
          size='lg'
          fontWeight='bolder'
          boxShadow='0 -10px 15px -3px rgba(0,0,0,0.1), 0 -4px 6px -2px rgba(0,0,0,0.8)'
          onClick={() => setToastEditMode(true)}
          leftIcon={<MdEdit />}
          py={1}
          px={3}
        >
          EDIT
        </Button>
      </Flex>
    </>
  )
  const edit = toastEditMode ? (
    <ToastEditV
      name={name}
      category={category}
      message={message}
      amount={amount}
      editName={onOpen}
      editAmount={onOpen3}
      editCategory={onOpen2}
      editMessage={onOpen7}
      setToastEditMode={setToastEditMode}
    />
  ) : (
    <></>
  )
  return (
    <Center
      className='t45'
      w='100vw'
      m={0}
      pos='absolute'
      left='0px'
      zIndex={1}
    >
      <Center
        mx={2}
        className={toastEditMode ? 'toastEdit' : 'floating'}
        borderRadius='18px'
      >
        <Flex direction='column'>
          <Box height='0px' overflow='visible'>
            <Box height='0px' mt='-40px' overflow='visible'>
              {v}
            </Box>
          </Box>
          <ToastV amount={amount} color={color} color2={color2} hidden={false}>
            <ToastContentV
              category={category}
              name={name}
              message={message}
              amount={amount}
              colorCard={colorCard}
            />
          </ToastV>
          {edit}
        </Flex>
      </Center>
    </Center>
  )
}

export default SentenceV
