import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

interface SocialButtonsVProps {
  category: string
  amount: string
}
const HASHTAG = 'LETSHAVEATOAST'
const URL = 'https://letshaveatoast.app'
const SEPARATOR = "\n\nLet's toast the good together on:\n🥂 "
const SocialButtonsV: React.FC<SocialButtonsVProps> = ({
  category,
  amount,
}) => {
  const TITLE =
    category !== '' && amount !== ''
      ? 'I just raised a toast and i dedicate that toast to you ❤️'
      : `I just raised a ${amount} to ${category.toLowerCase()} and i dedicate that toast to you ❤️`
  const options = [
    <FacebookShareButton
      url={URL}
      hashtag={'#' + HASHTAG}
      quote={TITLE + SEPARATOR}
    >
      <FacebookIcon size={45} round={true} />
    </FacebookShareButton>,
    <TwitterShareButton
      url={URL}
      title={TITLE + SEPARATOR}
      hashtags={[HASHTAG]}
    >
      <TwitterIcon size={45} round={true} />
    </TwitterShareButton>,
    <EmailShareButton url={URL} subject={TITLE} body={TITLE + SEPARATOR}>
      <EmailIcon size={45} round={true} />
    </EmailShareButton>,
    <LinkedinShareButton
      url={URL}
      source={URL}
      title={TITLE}
      summary={TITLE + SEPARATOR}
    >
      <LinkedinIcon size={45} round={true} />
    </LinkedinShareButton>,
    <TelegramShareButton url={URL} title={TITLE + SEPARATOR}>
      <TelegramIcon size={45} round={true} />
    </TelegramShareButton>,
    <WhatsappShareButton url={URL} title={TITLE} separator={SEPARATOR}>
      <WhatsappIcon size={45} round={true} />
    </WhatsappShareButton>,
  ]
  return (
    <Flex wrap='wrap' px={10} justifyContent='center' alignContent='start'>
      {options.map(each => {
        return <Box m={1}>{each}</Box>
      })}
    </Flex>
  )
}

export default SocialButtonsV
