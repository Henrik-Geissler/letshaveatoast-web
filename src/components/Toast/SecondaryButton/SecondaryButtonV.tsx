import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { MdEdit } from 'react-icons/md'

interface SecondaryButtonVProps {
  onClick: any
}

const SecondaryButtonV: React.FC<SecondaryButtonVProps> = ({ onClick }) => {
  return (
    <IconButton
      color='#fff700'
      borderColor='#fff700'
      icon={<MdEdit />}
      aria-label='edit'
      onClick={onClick}
      variant='outline'
      borderWidth='1px'
      borderRadius='100px'
      p={2}
    />
  )
}

export default SecondaryButtonV
