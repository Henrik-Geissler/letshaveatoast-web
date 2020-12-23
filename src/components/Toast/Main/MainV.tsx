import { Box } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import { FaBox } from 'react-icons/fa'
import ImageV from '../../General/Image/ImageV'
import DataScreenV from '../DataScreenV/DataScreenV'
import SentenceV from '../Sentence/SentenceV'
import ToastView from '../ToastView/ToastView'

interface MainVProps {
  category: string
  onOpen: any
  onOpen2: any
  onOpen3: any
  amount: string
  name: string
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
}

const MainV: React.FC<MainVProps> = ({
  category,
  onOpen,
  onOpen2,
  onOpen3,
  amount,
  name,
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
}) => {
  if (dataMode) {
    return <DataScreenV setDataMode={setDataMode} dataStats={dataStats} />
  }
  const edit = category !== ''
  return (
    <>
      <Center
        className={edit || toastMode ? 't20' : 't40'}
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
      <SentenceV
        visible={edit && amount !== ''}
        onOpen={onOpen}
        onOpen2={onOpen2}
        onOpen3={onOpen3}
        amount={amount}
        category={category}
        name={name}
        reRoll={reRoll}
        setReRoll={setReRoll}
        color={color}
        color2={color2}
        colorCard={colorCard}
        payState={payState}
        toastMode={toastMode}
        linkedToast={linkedToast}
        toastId={toastId}
      />
    </>
  )
}

export default MainV
