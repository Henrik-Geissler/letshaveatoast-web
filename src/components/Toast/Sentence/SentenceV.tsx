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
import CardTable from '../CardTable/CardTable'
import HeadingV from '../Heading/HeadingV'
import SentenceTextV from '../SentenceText/SentenceTextV'
import SentenceUserV from '../SentenceUser/SentenceUserV'
import ThankYouV from '../ThankYou/ThankYouV'
import ToastV from '../Toast/ToastV'
import ToastContentV from '../ToastContent/ToastContentV'
import ToastTable from '../ToastTable/ToastTable'

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

  toastMode: boolean
  linkedToast: any
  toastId: number
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

  toastMode,
  linkedToast,
  toastId,
}) => {
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
              Something went wrong with your payment. :-(
            </SentenceTextV>
          </Flex>
        </Center>
      </>
    )
  }
  if (reRoll) {
    return (
      <ThankYouV
        setReRoll={setReRoll}
        category={category}
        amount={amount}
        toastId={toastId}
      />
    )
  }
  if (toastMode) {
    if (linkedToast === null) return <>loading...</>
    const toast = linkedToast.data.getToastById
    if (toast === undefined) return <>no toast</>
    amount = ToastTable[toast.amount].name
    category = CardTable[toast.category].name
    color = ToastTable[toast.amount].tcolor
    color2 = ToastTable[toast.amount].tcolor2
    colorCard = CardTable[toast.category].colorLight
    name = toast.name
  }
  const v = toastMode ? (
    <Box transform='scale(0.6)' overflow='visible'>
      <HeadingV>A toast is dedicated to you:</HeadingV>
    </Box>
  ) : (
    <HeadingV>Your toast:</HeadingV>
  )
  return (
    <Center className='t45' w='100vw' m={0} pos='absolute' left='0px'>
      <Center mx={2} className='floating' borderRadius='18px'>
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
              amount={amount}
              colorCard={colorCard}
            />
          </ToastV>
        </Flex>
      </Center>
    </Center>
  )
}

export default SentenceV
