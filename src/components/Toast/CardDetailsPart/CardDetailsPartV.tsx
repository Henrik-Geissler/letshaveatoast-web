import { Avatar, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import HeadingRespoV from '../HeadingRespo/HeadingRespoV'
import RadioCardV from '../RadioCard/RadioCardV'

interface CardDetailsPartVProps {
  color: string
  name: string
  value: number
  orga: string
  small: boolean
  src: string
}

const CardDetailsPartV: React.FC<CardDetailsPartVProps> = ({
  color,
  name,
  value,
  orga,
  small,
  src,
}) => {
  if (small) {
    return (
      <>
        <Box
          marginLeft='auto'
          marginRight='auto'
          width='100px'
          paddingTop='100px'
          marginTop='85px'
        >
          <Avatar
            marginLeft='auto'
            marginRight='auto'
            width='100px'
            height='100px'
            boxShadow='0 5px 15px 0px rgba(0,0,0,0.6)'
            name={orga}
            src={src}
          />
        </Box>
        <HeadingRespoV>{orga}</HeadingRespoV>
      </>
    )
  }
  return (
    <Flex width='100%'>
      <Box marginLeft='-17px' marginTop='-16px'>
        <RadioCardV
          color={color}
          name={name}
          setCategory={() => {}}
          num={(value + 1).toString()}
          onClose={() => {}}
          fake={true}
        />
      </Box>
      <Flex
        direction='column-reverse'
        alignItems='flex-start'
        width='100%'
        marginRight='10px'
      >
        <HeadingRespoV>{orga}</HeadingRespoV>
        <Avatar
          marginLeft='auto'
          marginTop='auto'
          marginRight='auto'
          width='100px'
          height='100px'
          name={orga}
          src={src}
          boxShadow='0 5px 15px 0px rgba(0,0,0,0.6)'
        />
      </Flex>
    </Flex>
  )
}

export default CardDetailsPartV
