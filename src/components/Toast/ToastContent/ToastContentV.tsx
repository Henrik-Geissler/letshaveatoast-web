import { Box, Flex } from '@chakra-ui/core'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import ImageV from '../../General/Image/ImageV'
import SpaceV from '../../General/Space/SpaceV'
import ToastTextV from '../ToastText/ToastTextV'

interface ToastContentVProps {
  amount: string
  category: string
  colorCard: string
  name: string
}

const ToastContentV: React.FC<ToastContentVProps> = ({
  amount,
  category,
  colorCard,
  name,
}) => {
  const snippets = [
    <FaQuoteLeft
      style={{
        marginRight: '4px',
        marginTop: '0px',
        marginBottom: '0px',
      }}
    />,
    "Let's",
    'have',
    'a',
    ...amount.split(' '),
    'on',
    <Box className='img20' bg={`${colorCard}77`}>
      <ImageV src={`category/${category}`}></ImageV>
    </Box>,
    ...category.split(' ').map(item => {
      return <Box color={colorCard}>{item}</Box>
    }),
    '!',
  ]
  return (
    <Flex
      wrap='wrap'
      direction='row'
      style={{
        alignItems: 'center !important',
        pointerEvents: 'none',
        justifyContent: 'start',
      }}
      my='auto'
    >
      {snippets.map(item => {
        return (
          <>
            <ToastTextV>{item}</ToastTextV>
            <SpaceV x={4} y={4} />
          </>
        )
      })}
      <div style={{ marginLeft: 'auto' }}>
        <ToastTextV>{`– ${name}`}</ToastTextV>
      </div>
      {/** 
                  {data.getToast.id}
                  {'-'}
                  {data.getToast.createdAt}
                  */}
    </Flex>
  )
}

export default ToastContentV
