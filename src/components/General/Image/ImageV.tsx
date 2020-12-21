import { Image, Fade } from '@chakra-ui/react'
import React, { useState } from 'react'

interface ImageVProps {
  src: string
}

const ImageV: React.FC<ImageVProps> = ({ src }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}
    >
      <Fade in={loaded}>
        <Image
          src={`/img/${src}.png`}
          alt={src}
          fallback={<div></div>}
          onLoad={() => {
            setLoaded(true)
          }}
          m='auto'
          className='noClickMe'
        />
      </Fade>
    </div>
  )
}

export default ImageV
