import { Flex, Heading, Text } from '@chakra-ui/core'
import React from 'react'
import SentenceTextV from '../SentenceText/SentenceTextV'

interface AboutVProps {}

const AboutV: React.FC<AboutVProps> = ({}) => {
  return (
    <Flex
      mt='5vh'
      direction='column'
      p={6}
      backgroundColor='rgba(255,255,255,0.4)'
    >
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
    </Flex>
  )
}

export default AboutV
