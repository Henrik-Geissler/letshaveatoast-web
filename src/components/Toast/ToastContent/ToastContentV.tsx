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
  message: string
}

const ToastContentV: React.FC<ToastContentVProps> = ({
  amount,
  category,
  colorCard,
  name,
  message,
}) => {
  const brokenMessage = message.split(' ')
  let brokenM = []
  brokenMessage.forEach(item => {
    if (item.length < 20) {
      brokenM.push(item)
    } else if (item.length < 38) {
      brokenM.push(item.slice(0, 18) + '-')
      brokenM.push(item.slice(18))
    } else {
      brokenM.push(item.slice(0, 18) + '-')
      brokenM.push(item.slice(18, 36) + '-')
      brokenM.push(item.slice(36))
    }
  })
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
    <Box className='img20' bg={`${colorCard}00`}>
      <ImageV src={`category/${category} copy`}></ImageV>
    </Box>,
    ...category.split(' ').map(item => {
      return <Box color={colorCard}>{item}</Box>
    }),
    '!',
    ' ',
    ...brokenM,
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
