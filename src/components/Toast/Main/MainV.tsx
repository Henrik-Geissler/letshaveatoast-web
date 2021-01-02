import { Box, Flex, Text } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import { FaBox } from 'react-icons/fa'
import ImageV from '../../General/Image/ImageV'
import DataScreenV from '../DataScreenV/DataScreenV'
import HeadingV from '../Heading/HeadingV'
import SentenceV from '../Sentence/SentenceV'
import ToastView from '../ToastView/ToastView'

interface MainVProps {
  category: string
  onOpen: any
  onOpen2: any
  onOpen3: any

  onOpen7: any
  amount: string
  name: string
  message: string
  reRoll: boolean
  setReRoll: any

  color: string
  color2: string
  colorCard: string
  payState: any
  dataStats: any
  dataMode: boolean
  setDataMode: any

  toastMode: boolean
  linkedToast: any
  toastId: number
  toastEditMode: boolean
  setToastEditMode: any
  isDone: boolean
  pending: boolean
  demo: boolean
}

const MainV: React.FC<MainVProps> = ({
  category,
  onOpen,
  onOpen2,
  onOpen3,

  onOpen7,
  amount,
  name,
  message,
  reRoll,
  setReRoll,
  dataStats,
  dataMode,
  setDataMode,
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
  demo,
}) => {
  if (dataMode) {
    return <DataScreenV setDataMode={setDataMode} dataStats={dataStats} />
  }
  const edit = category !== ''
  const demoText =
    demo || toastMode ? (
      <></>
    ) : (
      <Center
        className='t50'
        h='0px'
        pos='absolute'
        w='100vw'
        p={4}
        m={0}
        left={0}
      >
        <Flex direction='column' maxWidth='600px' mt='60px'>
          <HeadingV>{'Wow, thank you for over 10.000 toasts!'}</HeadingV>
          <Text mb={'20px'} mt={'20px'}>
            {
              'We toast to all of you, the great initiatives and to a happy and prosperous year.'
            }
          </Text>
          <Text mb={'20px'}>{"We'll come back soon :)"}</Text>
          <Text>{'Cheers, Prost and Salute,'}</Text>
          <Text>{'Yanik, Henrik and Nils'}</Text>
        </Flex>
      </Center>
    )
  return (
    <>
      <SentenceV
        visible={edit && amount !== ''}
        onOpen={onOpen}
        onOpen2={onOpen2}
        onOpen3={onOpen3}
        onOpen7={onOpen7}
        amount={amount}
        category={category}
        name={name}
        message={message}
        reRoll={reRoll}
        setReRoll={setReRoll}
        color={color}
        color2={color2}
        colorCard={colorCard}
        payState={payState}
        toastMode={toastMode}
        linkedToast={linkedToast}
        toastId={toastId}
        toastEditMode={toastEditMode}
        setToastEditMode={setToastEditMode}
        isDone={isDone}
        pending={pending}
      />
      <Center
        className={edit || toastMode || !demo ? 't20' : 't40'}
        h='0px'
        pos='absolute'
        w='100vw'
        p={0}
        m={0}
        left={0}
      >
        <Box maxW='100vw'>
          <Box my={0} p={5} maxW='400px' w='90%' mx='auto'>
            <ImageV src='logo' />
          </Box>
        </Box>
      </Center>
      {demoText}
    </>
  )
}

export default MainV
