import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

interface SocialButtonsVProps {}
const HASHTAG = 'letshaveatoast'
const QUOTE = "Let's have a toast on CATEGORY"
const URL = 'letshaveatoast.app'
const TITLE = "Let's have a toast"
const SEPARATOR = '\n\nCheck it out: '
const BODY =
  'I just made a donation for the good. ' +
  '\n' +
  QUOTE +
  '\n' +
  '#' +
  HASHTAG +
  SEPARATOR
const TAGS = ['letshaveatoast', 'donations']
const SocialButtonsV: React.FC<SocialButtonsVProps> = () => {
  const options = [
    <FacebookShareButton url={URL} hashtag={'#' + HASHTAG} quote={QUOTE}>
      <FacebookIcon size={45} round={true} />
    </FacebookShareButton>,
    <TwitterShareButton url={URL} title={TITLE} hashtags={[HASHTAG]}>
      <TwitterIcon size={45} round={true} />
    </TwitterShareButton>,
    <EmailShareButton url={URL} subject={TITLE} body={BODY}>
      <EmailIcon size={45} round={true} />
    </EmailShareButton>,
    <LinkedinShareButton url={URL} source={URL} title={TITLE} summary={BODY}>
      <LinkedinIcon size={45} round={true} />
    </LinkedinShareButton>,
    <TelegramShareButton url={URL} title={TITLE}>
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
