import { Fade, Image } from '@chakra-ui/react'
import React, { useState } from 'react'

interface GifVProps {
  src: string
}

const GifV: React.FC<GifVProps> = ({ src }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}
    >
      <Fade in={loaded}>
        <Image
          src={`/img/toast/${src}.gif`}
          alt={src}
          fallback={<div></div>}
          onLoad={() => {
            setLoaded(true)
          }}
        />
      </Fade>
    </div>
  )
}

export default GifV
