import { Editable, EditablePreview, FormControl } from '@chakra-ui/core'
import { IconButton } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'
import { MdEdit } from 'react-icons/md'
import SentenceTextV from '../SentenceText/SentenceTextV'

interface SentenceUserVProps {
  name: string
  onOpen: any
}

const SentenceUserV: React.FC<SentenceUserVProps> = ({ name, onOpen }) => {
  return (
    <>
      <SentenceTextV>
        <Field name='name'>
          {({ field, form }) => (
            <FormControl id='name' isInvalid={false}>
              <Editable
                {...field}
                isPreviewFocusable={false}
                submitOnBlur={false}
                value={name}
                placeholder=''
                style={{ pointerEvents: 'none' }}
              >
                <EditablePreview style={{ pointerEvents: 'none' }} />
              </Editable>
            </FormControl>
          )}
        </Field>
      </SentenceTextV>
      <div style={{ width: '10px' }}></div>
      <SentenceTextV>
        <IconButton
          onClick={onOpen}
          aria-label='edit name'
          icon={<MdEdit />}
          color='#bbbbbb'
          mr={5}
          w='34px'
          h='34px'
          style={{
            boxShadow: '0 0 1px 1px #bbbbbb',
            borderRadius: '100px',
          }}
        />
      </SentenceTextV>
    </>
  )
}

export default SentenceUserV
