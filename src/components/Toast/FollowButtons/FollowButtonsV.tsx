import { Flex, Box, Circle } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import ImageV from '../../General/Image/ImageV'

interface FollowButtonsVProps {}

const accounts = [
  'https://twitter.com/have_toast',
  'https://www.instagram.com/letshave1toast',
  'https://facebook.com/Letshaveatoast-106178318052948',
  'https://www.linkedin.com/pulse/lets-raise-toast-god-make-end-2020-great-nils-seele',
]
const FollowButtonsV: React.FC<FollowButtonsVProps> = () => {
  const options = [
    <Link href={accounts[0]}>
      <TwitterIcon size={45} round={true} />
    </Link>,
    <Link href={accounts[1]}>
      <Box width='45px' height='45px'>
        <ImageV src='insta' />
      </Box>
    </Link>,
    <Link href={accounts[2]}>
      <FacebookIcon size={45} round={true} />
    </Link>,
    <Link href={accounts[3]}>
      <LinkedinIcon size={45} round={true} />
    </Link>,
  ]
  return (
    <Flex wrap='wrap' px={10} justifyContent='center' alignContent='start'>
      {options.map(each => {
        return <Box m={1}>{each}</Box>
      })}
    </Flex>
  )
}

export default FollowButtonsV
