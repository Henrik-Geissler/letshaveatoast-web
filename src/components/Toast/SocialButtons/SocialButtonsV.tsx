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
import CardTable from '../CardTable/CardTable'

const valueFromCategory = cat => {
  for (let each of CardTable) {
    if (each.name === cat) {
      return each.value
    }
  }
  return 0
}
interface SocialButtonsVProps {
  category: string
  amount: string
  toastId: number
}
const HASHTAG = 'LETSHAVEATOAST'
const SEPARATOR = ''
const TITLE = `Let's have a toast`
const SocialButtonsV: React.FC<SocialButtonsVProps> = ({
  category,
  amount,
  toastId,
}) => {
  const categoryTarget = valueFromCategory(category)
  const shareToast = category !== '' && amount !== '' && toastId !== 0
  const URL = shareToast
    ? 'https://letshaveatoast.app/?' + toastId
    : 'https://letshaveatoast.app'
  const TEXT_PRIVATE = shareToast
    ? `Cheers, Prost and Salute🥂 I just raised a toast to a better future of tomorrow and dedicate that toast to you❤️\n\nThis toast donates ${
        CardTable[categoryTarget].orga
      } to a better world with ${CardTable[
        categoryTarget
      ].name.toLowerCase()} ${
        CardTable[categoryTarget].emoji
      }\n\nI invite you to toast with me on LET‘S HAVE A TOAST to a happy and prosperous new year✨ Here is my personal toast to you: `
    : `Hi,\nI just raised a toast & i dedicate that toast to you ❤️🥂\n\nLet's toast the good together on:\n `
  const TEXT_PUBLIC = shareToast
    ? `I just raised a ${amount} to ${category.toLowerCase()} ❤️🥂\n\nFind here my toast & let's toast to the good:\n `
    : `I just raised a toast ❤️🥂\n\nLet's toast the good together on:\n `
  const options = [
    <FacebookShareButton
      url={URL}
      hashtag={'#' + HASHTAG}
      quote={TEXT_PUBLIC + SEPARATOR}
    >
      <FacebookIcon size={45} round={true} />
    </FacebookShareButton>,
    <TwitterShareButton
      url={URL}
      title={TEXT_PUBLIC + SEPARATOR}
      hashtags={[HASHTAG]}
    >
      <TwitterIcon size={45} round={true} />
    </TwitterShareButton>,
    <EmailShareButton url={URL} subject={TITLE} body={TEXT_PRIVATE + SEPARATOR}>
      <EmailIcon size={45} round={true} />
    </EmailShareButton>,
    <LinkedinShareButton
      url={URL}
      source={URL}
      title={TITLE}
      summary={TEXT_PUBLIC + SEPARATOR}
    >
      <LinkedinIcon size={45} round={true} />
    </LinkedinShareButton>,
    <TelegramShareButton url={URL} title={TEXT_PRIVATE + SEPARATOR}>
      <TelegramIcon size={45} round={true} />
    </TelegramShareButton>,
    <WhatsappShareButton url={URL} title={TEXT_PRIVATE} separator={SEPARATOR}>
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
