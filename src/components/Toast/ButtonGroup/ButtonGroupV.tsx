import { Center, Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageV from '../../General/Image/ImageV'
import ButtonV from '../Button/ButtonV'
import HeadingV from '../Heading/HeadingV'

interface ButtonGroupVProps {
  onOpen: any
  onOpen2: any
  onOpen3: any
  category: any
  amount: any
  setPressed: any
  payMode: any
  name: string
  pressed: boolean
  buttonLoaded: boolean
  onPush: any
  payState: string | null
  reRoll: boolean
  setReRoll: any
  pending: boolean
}

const ButtonGroupV: React.FC<ButtonGroupVProps> = ({
  onOpen,
  onOpen2,
  onOpen3,
  category,
  amount,
  setPressed,
  payMode,
  name,
  pressed,
  buttonLoaded,
  onPush,
  payState,
  reRoll,
  setReRoll,
  pending,
}) => {
  if (reRoll) {
    return <></>
  }
  return (
    <Center
      className='t85'
      left='0px'
      w='100vw'
      h='0px'
      pos='absolute'
      pt='0px'
      bg='rgba(0,0,0,0)'
    >
      <Box className='theButton' mx='auto' p={0} bg='rgba(0,0,0,0)'>
        <Center m={0} p={0} h='1px' w='200%'>
          <Box mt='-1vh' mb={0} p={0} ml='-50%' width='100%'>
            <Box mx='auto' height='100px'>
              <ImageV
                src={
                  'labels/' +
                  (buttonLoaded
                    ? 'p4'
                    : reRoll
                    ? 'empty'
                    : payState === '0'
                    ? 'p2'
                    : pending
                    ? 'p3'
                    : 'p1')
                }
              />
            </Box>
          </Box>
        </Center>

        <ButtonV
          onOpen={onOpen}
          onOpen2={onOpen2}
          onOpen3={onOpen3}
          onPush={onPush}
          setPressed={setPressed}
          name={name}
          category={category}
          amount={amount}
          pressed={pressed}
          payMode={payMode}
          buttonLoaded={buttonLoaded}
          payState={payState}
          reRoll={reRoll}
          setReRoll={setReRoll}
          pending={pending}
        />
      </Box>
    </Center>
  )
}

export default ButtonGroupV
