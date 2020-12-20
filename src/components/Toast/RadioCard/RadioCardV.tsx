import { Box, Flex, Text, Image } from '@chakra-ui/core'
import { Spacer, Square, useRadio } from '@chakra-ui/react'
import React, { HTMLProps, useEffect } from 'react'
import ImageV from '../../General/Image/ImageV'

interface RadioCardVProps {
  color: string
  name: string
  setCategory: any
  num: string
  onClose: any
  fake: boolean
}

const RadioCardV: React.FC<RadioCardVProps> = ({
  color,
  name,
  setCategory,
  num,
  onClose,
  fake,
}) => {
  useEffect(() => {
    if (fake) {
      return
    }
    const listener = document
      .getElementById('flip' + num)
      .addEventListener('click', function () {
        document.querySelector('#square' + num).classList.toggle('flipped')
        document
          .querySelectorAll(`.kachel2:not(#square${num})`)
          .forEach(element => {
            element.classList.toggle('cardOut')
          })
        setCategory(name)
        onClose()
      })
    return () => {
      /**document
        .getElementById('flip' + num)
        .removeEventListener('click', listener)
        */
    }
  }, [])
  return (
    <Square id={'square' + num} bg={color} className='kachel1 kachel2'>
      <section id={'flip' + num} className='container'>
        <div id={'card' + num} className='card'>
          <figure style={{ backgroundColor: color }} className='front'>
            <Box as='label' pointerEvents='none'>
              <Box
                className='kachel1'
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                px={2}
                py={3}
                border='none'
                pointerEvents='none'
                style={{ borderRadius: '0px' }}
              >
                <Flex direction='column' height='100%' width='100%'>
                  <Flex direction='row' height='100%' width='100%'>
                    <Text
                      fontSize='36px'
                      color='white'
                      fontFamily='Caviar Dreams Bold'
                      fontWeight='bold'
                      lineHeight='1'
                      pr={2}
                      pointerEvents='none'
                    >
                      {num}
                    </Text>
                    <Text
                      fontSize='16px'
                      color='white'
                      fontFamily='Caviar Dreams Bold'
                      lineHeight='1'
                      my={'auto'}
                      pointerEvents='none'
                      textAlign='start'
                    >
                      {name}
                    </Text>
                  </Flex>
                  <Box px={8} pt={4} pb={18}>
                    <ImageV src={`category/${name}`} />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </figure>
          <figure className='back' style={{ backgroundColor: color }}>
            <div
              style={{
                backgroundColor: '#ffffff33',
                width: '100%',
                height: '100%',
              }}
            ></div>
          </figure>
        </div>
        wait
      </section>
    </Square>
  )
}

export default RadioCardV
