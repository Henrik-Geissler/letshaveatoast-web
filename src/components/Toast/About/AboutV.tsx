import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import LearnMoreV from '../LearnMore/LearnMoreV'
import SocialButtonsV from '../SocialButtons/SocialButtonsV'

interface AboutVProps {
  onMore: any
}

const AboutV: React.FC<AboutVProps> = ({ onMore }) => {
  return (
    <Flex mt='5vh' direction='column' p={6}>
      <Text mb='10vh' fontWeight='bold' textAlign='justify'>
        We are Yanik, Henrik and Nils and our mission is to offer people the
        opportunity to feel a little bit less alone during the festive season by
        doing something good. Sounds crazy, huh? But that's exactly what we want
        to create with lets have a toast.
      </Text>
      <Heading>Why we want to do this:</Heading>
      <Text mt='5vh' mb='10vh' textAlign='justify'>
        Due to covid19, our current time is marked with social abstinence. This
        is bad. And so many other important issues get lost in the media as a
        result. Think about Climate Change, Human Rights, our animals on earth
        etc.. But initiatives like Friday for future, Amnesty International etc.
        are not gone. They're still fighting the world's biggest problems, just
        like the heroes in the hospitals, making sure we're all safe. With
        #letshaveatoast, we want to honor them and share this with everyone
        around the world to unite the community and show that you and we are not
        alone. We are all here to toast together. We call it "Let's have toast"
        because at the end of the day, that's what it's all about: toasting to
        good things together - the only difference being that we're doing it
        virtually at scale.
      </Text>
      <Heading>How we want to do this:</Heading>
      <Text mt='5vh' mb='10vh' textAlign='justify'>
        #letshaveatoast is a web app where people from all over the world can
        virtually "toast" each other during festive season.The toasts are
        broadcast to all users who are currently using the Webapp - that's where
        the sense of community is created. With each "toast" we trigger a
        donation for a specific topic. You can navigate through pushing the red
        button. First, you choose your name. Second, you select your donation
        category. Third, you choose your donation amount. Five, you pay (paypal
        or credit card). Six, you broadcast and share your toast with the world.
        Letshaveatoast is supposed to go live on 12/31/20 and stay live until
        01/01/21 8pm. It would help us enormously if you could share our link.
      </Text>
      <Heading>Who we support:</Heading>
      <Text mt='5vh' textAlign='justify'>
        We have selected 8 Big topics we want to support, honour and toast to.
        All of them are doing astonishing work to build a better future and
        planet. All of your donations will go without detours to the
        organization as we embedded the donation of each via API key. In the
        following we present you our Choice and tell you why we have chosen
        them.
      </Text>
      <Center mb='10vh'>
        <LearnMoreV onOpen={onMore}>
          LEARN MORE ABOUT OUR INITIATIVES
        </LearnMoreV>
      </Center>
      <Heading>Support us by sharing:</Heading>
      <Box mt='5vh' mb='10vh'>
        <SocialButtonsV />
      </Box>
    </Flex>
  )
}

export default AboutV
