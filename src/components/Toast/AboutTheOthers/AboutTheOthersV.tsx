import { Flex, Heading, Text } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import LearnMoreV from '../LearnMore/LearnMoreV'

interface AboutTheOthersVProps {
  onMore: any
}

const AboutTheOthersV: React.FC<AboutTheOthersVProps> = ({ onMore }) => {
  return (
    <Flex mt='5vh' direction='column' p={6}>
      <Heading>Who we support:</Heading>
      <Text mt='5vh' mb='10vh' textAlign='justify'>
        We have selected 8 Big topics we want to support, honour and toast to.
        All of them are doing astonishing work to build a better future and
        planet. All of your donations will go without detours to the
        organization as we embedded the donation of each via API key. In the
        following we present you our Choice and tell you why we have chosen
        them.
      </Text>
      <Text mt='5vh' mb='10vh'>
        Better climate: Every Toast to Climate Change will go without detours to
        Greenpeace. Greenpeace is the largest environmental organization in the
        world, with countless successes since 1978. They were founded as a
        result of a campaign against nuclear energy with Audacity and
        willingness to change things. They are a role model for so many
        organizations and are a true hero for climate change. That's why we have
        chosen them. Animals on earth: @Yanik bitte analog wie oben. Kannst auf
        deutsch machen und ich übersetze Zero Hunger: @Yanik bitte analog wie
        oben. Kannst auf deutsch machen und ich übersetze Good Health and
        Wellbeing: @Yanik bitte analog wie oben. Kannst auf deutsch machen und
        ich übersetze Our Children: @Yanik bitte analog wie oben. Kannst auf
        deutsch machen und ich übersetze Human Rights: @Yanik bitte analog wie
        oben. Kannst auf deutsch machen und ich übersetze Fridays for Futures:
        @Yanik bitte analog wie oben. Kannst auf deutsch machen und ich
        übersetze BlackLives matther:@Yanik bitte analog wie oben. Kannst auf
        deutsch machen und ich übersetze To the creators of letshaveatoast: If
        you like the idea of let’s have a toast, you can also support us to
        create more such ideas. But we ask you to prioritize us against all the
        other initiatives
      </Text>

      <Center>
        <LearnMoreV onOpen={onMore}>LEARN MORE ABOUT THE MOVEMENT</LearnMoreV>
      </Center>
    </Flex>
  )
}

export default AboutTheOthersV
