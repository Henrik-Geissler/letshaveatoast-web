import { Flex, Heading, Text } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import SpaceV from '../../General/Space/SpaceV'
import CardDetail from '../CardDetail/CardDetail'
import LearnMoreV from '../LearnMore/LearnMoreV'

interface AboutTheOthersVProps {
  onMore: any
  orgas: any
}

const AboutTheOthersV: React.FC<AboutTheOthersVProps> = ({ onMore, orgas }) => {
  return (
    <>
      <Flex mt='5vh' direction='column' p={6}>
        <Heading>Who we support:</Heading>
        <Text mt='5vh' mb='10vh' textAlign='justify'>
          We have selected 8 big topics we want to support, honour and toast to.
          All of them are doing astonishing work to build a better future and
          planet. All of your donations will go without detours to the
          organization as we embedded the paypal donation of each via API key.
          These are the great organization behind each category:
        </Text>
      </Flex>
      <Flex direction='column' p={2}>
        {orgas.map(item => {
          return (
            <>
              <CardDetail card={item} />
              <SpaceV x={40} y={40} />
            </>
          )
        })}
      </Flex>
      <Center>
        <LearnMoreV onOpen={onMore}>LEARN MORE ABOUT THE MOVEMENT</LearnMoreV>
      </Center>
    </>
  )
}

export default AboutTheOthersV
