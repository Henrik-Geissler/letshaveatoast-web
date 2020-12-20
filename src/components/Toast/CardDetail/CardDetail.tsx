import { Box, Flex } from '@chakra-ui/core'
import { Avatar, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HeadingRespoV from '../HeadingRespo/HeadingRespoV'
import RadioCardV from '../RadioCard/RadioCardV'

interface Card {
  value: number
  name: string
  color: string
  colorLight: string
  paypal: string
  orga: string
  description: string
}
interface CardDetailProps {
  card: Card
}

const CardDetail: React.FC<CardDetailProps> = ({
  card: { value, name, color, colorLight, orga, description },
}) => {
  const [w, setW] = useState(false)
  const src = `img/category/${orga.replace('#', '')}.png`
  useEffect(() => {
    setW(window.innerWidth >= 375)
    return () => {}
  }, [window.innerWidth])
  if (w) {
    return (
      <Box
        background={`radial-gradient(circle, #ffffff99, ${colorLight}99)`}
        boxShadow={`0 0 1.7em 0 ${color}77`}
        border={`solid 2px ${color}`}
      >
        <Flex width='100%'>
          <RadioCardV
            color={color}
            name={name}
            setCategory={() => {}}
            num={(value + 1).toString()}
            onClose={() => {}}
            fake={true}
          />
          <Flex
            direction='column-reverse'
            alignItems='flex-start'
            width='100%'
            marginRight='10px'
          >
            <Box
              marginTop='auto'
              marginLeft='auto'
              marginRight='auto'
              marginBottom='10px'
            >
              <HeadingRespoV>{orga}</HeadingRespoV>
            </Box>
            <Avatar
              marginLeft='auto'
              marginTop='auto'
              marginRight='auto'
              width='100px'
              height='100px'
              name={orga}
              src={src}
              border={`3px #eee solid`}
              boxShadow='0 5px 15px 0px rgba(0,0,0,0.6)'
            />
          </Flex>
        </Flex>

        <Text fontWeight='bold' mx={4} mt={2} fontSize='18px'>
          If you want to toast to{' '}
          <Text as='mark' backgroundColor={`${colorLight}00`}>
            {' '}
            {name}{' '}
          </Text>
          , we recommend you stand up for{' '}
          <Text as='mark' backgroundColor={`${colorLight}00`}>
            {' '}
            {orga}{' '}
          </Text>
        </Text>
        <Text textAlign='justify' mx={4} mb={4} mt={2}>
          {description}
        </Text>
      </Box>
    )
  }
  return (
    <Box
      background={`radial-gradient(circle, ${colorLight}44, #ffffff44)`}
      boxShadow={`0 0 1.7em 0 ${color}77`}
      border={`solid 2px ${color}`}
    >
      <Flex width='100%'>
        <RadioCardV
          color={color}
          name={name}
          setCategory={() => {}}
          num={(value + 1).toString()}
          onClose={() => {}}
          fake={true}
        />
        <Flex
          direction='column-reverse'
          alignItems='flex-start'
          width='100%'
          marginRight='10px'
        >
          <Avatar
            marginLeft='auto'
            marginTop='auto'
            marginBottom='auto'
            marginRight='auto'
            width='100px'
            height='100px'
            name={orga}
            src={src}
          />
        </Flex>
      </Flex>

      <Box
        marginTop='10px'
        marginLeft='auto'
        marginRight='auto'
        marginBottom='10px'
      >
        <HeadingRespoV>{orga}</HeadingRespoV>
      </Box>
      <Text textAlign='justify' mx={4}>
        {`If you want to stand up for ${name}, we recommend you toast ${orga}`}
      </Text>
      <Text textAlign='justify' mx={4}>
        {description}
      </Text>
    </Box>
  )
}

export default CardDetail
