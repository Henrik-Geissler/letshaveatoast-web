import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { Center } from '@chakra-ui/react'
import React from 'react'
import FollowButtonsV from '../FollowButtons/FollowButtonsV'
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
        to create with Let's Have A Toast.
      </Text>
      <Heading>Why we want to do this:</Heading>
      <Text mt='5vh' mb='10vh' textAlign='justify'>
        Due to covid19, our current time is marked with social abstinence. This
        is bad. And so many other important issues get lost in the media as a
        result. Think about Climate Change, Human Rights, Our Animals on Earth
        etc.. But initiatives like Fridays for future, Amnesty International
        etc. are not gone. They're still fighting the world's biggest problems,
        just like the heroes in the hospitals, making sure we're all safe. With
        #letshaveatoast, we want to honor them and share this with everyone
        around the world to unite the community and show that you are not alone.
        We are all here to toast together. We call it "Let's have toast" because
        at the end of the day, that's what it's all about: toasting to good
        things together - the only difference being that we're doing it
        virtually at scale.
      </Text>
      <Heading>How we want to do this:</Heading>
      <Text mt='5vh' mb='10vh' textAlign='justify'>
        Let’s have a toast is a web app where people from all over the world can
        virtually "toast" each other during festive season.The toasts are
        broadcasted to all users who are currently using the Webapp - that's
        where the sense of community is created. With each "toast" we trigger a
        donation for a specific topic. You can navigate through pushing the red
        button. First, you choose your name. Second, you select your donation
        category. Third, you choose your donation amount. Fourth, you pay
        (paypal or credit card). Fifth, you broadcast and share your toast with
        the world. Let’s have a toast is supposed to go live on December 24,
        2020 and stay live until January 2, 2021. It would help us enormously if
        you could share let's have a toast with your friends.
      </Text>
      <Heading>Who we support:</Heading>
      <Text mt='5vh' textAlign='justify'>
        We have selected 8 big topics we want to support, honour and toast to.
        All of them are doing astonishing work to build a better future and
        planet. All of your donations will go without detours to the
        organization as we embedded the paypal donation of each via API key.
        These are the great organization behind each category:
      </Text>
      <Center mb='7vh'>
        <LearnMoreV onOpen={onMore}>
          LEARN MORE ABOUT THE ORGANISATIONS
        </LearnMoreV>
      </Center>
      <Heading>Support us by sharing:</Heading>
      <Box mt='5vh' mb='5vh'>
        <SocialButtonsV />
      </Box>
      <Heading>Follow us:</Heading>
      <Box mt='5vh' mb='5vh'>
        <FollowButtonsV />
      </Box>
    </Flex>
  )
}

export default AboutV
