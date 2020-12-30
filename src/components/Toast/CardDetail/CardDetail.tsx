import { Box, Flex } from '@chakra-ui/core'
import { Avatar, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardDetailsPartV from '../CardDetailsPart/CardDetailsPartV'
import RadioCardV from '../RadioCard/RadioCardV'

interface Card {
  value: number
  name: string
  color: string
  colorLight: string
  paypal: string
  orga: string
  url: string
  description: string
}
interface CardDetailProps {
  card: Card
  ctx: boolean
}

const CardDetail: React.FC<CardDetailProps> = ({
  card: { value, name, color, colorLight, orga, description, url },
  ctx,
}) => {
  const [w, setW] = useState(false)
  const [w2, setW2] = useState(false)
  const src = `img/category/${orga.replace('#', '')}.png`
  let top = (
    <Box
      height='0'
      overflow='visible'
      marginBottom='85px'
      marginLeft={ctx ? (w2 ? '-14px' : '-25px') : w2 ? '-5px' : '-16px'}
      marginTop='0'
    >
      <RadioCardV
        color={color}
        name={name}
        setCategory={() => {}}
        num={(value + 1).toString()}
        onClose={() => {}}
        fake={true}
      />
    </Box>
  )
  if (!w) {
    top = <></>
  }
  useEffect(() => {
    setW(window.innerWidth <= 472)
    setW2(window.innerWidth <= 405)
    return () => {}
  }, [window.innerWidth])
  return (
    <>
      {top}
      <Box
        background={`#ffffffcc`}
        p={0}
        boxShadow=' 0 1px 4px -2px rgba(0,0,0,0.8)'
        mx={w ? 0 : 4}
        my={0}
      >
        <Box
          background={`radial-gradient(circle, #ffffff22, ${colorLight}22)`}
          borderLeft={`solid 10px ${color}`}
          marginTop={w && ctx ? '-84px' : '0'}
          mx={0}
          mb={0}
          pt={0}
          pb={1}
        >
          <CardDetailsPartV
            name={name}
            value={value}
            orga={orga}
            color={color}
            small={w}
            src={src}
          />
          <Text fontWeight='500' mx={4} mt={2} fontSize='18px'>
            If you want to toast to{' '}
            <Text as='mark' backgroundColor={`${colorLight}00`}>
              {' '}
              {name}
            </Text>
            , we recommend you stand up for{' '}
            <Text as='mark' backgroundColor={`${colorLight}00`}>
              {' '}
              {orga}
            </Text>
          </Text>
          <Text textAlign='justify' mx={4} mt={2}>
            {description}
          </Text>
          <Text mx={4} mb={8} mt={2}>
            See their website for more information:{' '}
            <a href={url} style={{ color: 'blue' }}>
              <u>{url}</u>
            </a>
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default CardDetail
