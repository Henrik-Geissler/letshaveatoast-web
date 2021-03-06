import { Box, Flex, Heading, Image } from '@chakra-ui/core'
import { Center, IconButton, Fade } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ImageV from '../../General/Image/ImageV'
import { AiOutlineReload } from 'react-icons/ai'
import HeadingV from '../Heading/HeadingV'
import SocialButtonsV from '../SocialButtons/SocialButtonsV'

interface ThankYouVProps {
  setReRoll: any
  category: string
  amount: string
  toastId: number
  isDone: boolean
  push: boolean
  setPush: any
}
declare global {
  interface Window {
    requestAnimFrame: any
  }
}
const ThankYouV: React.FC<ThankYouVProps> = ({
  setReRoll,
  category,
  amount,
  toastId,
  isDone,
  push,
  setPush,
}) => {
  const [thanks, setThanks] = useState(false)
  const restartButton = isDone ? (
    <Center className='t77' w='100vw' m={0} pos='absolute' left='0px'>
      <Fade in={true}>
        <Flex direction='column'>
          <HeadingV>Toast again</HeadingV>
          <Box mx='auto'>
            <IconButton
              icon={
                <AiOutlineReload style={{ width: '10vh', height: '10vh' }} />
              }
              aria-label=''
              onClick={setReRoll}
            />
          </Box>
        </Flex>
      </Fade>
    </Center>
  ) : (
    <></>
  )
  const MAX_PARTICLES = 600
  const maxWidth = window.innerWidth + 10
  const maxHeight = window.innerHeight + 10
  useEffect(() => {
    // Little Canvas things
    const canvas: HTMLCanvasElement = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    // Set Canvas to be window size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Configuration, Play with these
    var config = {
      particleNumber: 300,
      maxParticleSize: 4,
      maxSpeed: 10,
      colorVariation: 20,
    }

    // Colors
    var colorPalette = {
      bg: { r: 255, g: 255, b: 255 },
      matter: [
        { r: 248, g: 227, b: 219 }, // lhat
        { r: 0, g: 213, b: 114 }, // green
        { r: 0, g: 178, b: 213 }, // cyan
        { r: 252, g: 178, b: 96 }, // orange
        { r: 213, g: 0, b: 0 }, // red
        { r: 252, g: 178, b: 96 }, // orange
        { r: 213, g: 0, b: 0 }, // red
      ],
    }

    // Some Variables hanging out
    var particles = [],
      centerX = canvas.width / 2,
      centerY = canvas.height / 2,
      // Draws the background for the canvas, because space
      drawBg = (ctx, color) => {
        ctx.fillStyle = 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

    // Particle Constructor
    var Particle = function (x, y, c) {
      // X Coordinate
      this.x = x || Math.round(Math.random() * canvas.width)
      // Y Coordinate
      this.y = y || Math.round(Math.random() * canvas.height)
      // Radius of the space dust
      this.r = Math.ceil(Math.random() * config.maxParticleSize)
      // Color of the rock, given some randomness
      this.c = colorVariation(
        colorPalette.matter[
          Math.floor((c || Math.random()) * colorPalette.matter.length)
        ],
        true
      )
      // Speed of which the rock travels
      this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.4)
      // Direction the Rock flies
      this.d = Math.round(Math.random() * 360)

      this.t = -2
    }

    // Provides some nice color variation
    // Accepts an rgba object
    // returns a modified rgba object or a rgba string if true is passed in for argument 2
    var colorVariation = function (color, returnString) {
      var r, g, b, a, variation
      r = Math.round(
        Math.random() * config.colorVariation -
          config.colorVariation / 2 +
          color.r
      )
      g = Math.round(
        Math.random() * config.colorVariation -
          config.colorVariation / 2 +
          color.g
      )
      b = Math.round(
        Math.random() * config.colorVariation -
          config.colorVariation / 2 +
          color.b
      )
      a = Math.random() + 0.5
      if (returnString) {
        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
      } else {
        return { r, g, b, a }
      }
    }

    // Used to find the rocks next point in space, accounting for speed and direction
    var updateParticleModel = function (p) {
      var a = 180 - (p.d + 90) // find the 3rd angle
      p.d > 0 && p.d < 180
        ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
        : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s))
      p.d > 90 && p.d < 270
        ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
        : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s))
      p.y += p.t * Math.sqrt(Math.abs(p.t))
      p.t = Math.min(p.t + 0.07, 4)
      return p
    }

    // Just the function that physically draws the particles
    // Physically? sure why not, physically.
    var drawParticle = function (x, y, r, c) {
      ctx.beginPath()
      ctx.fillStyle = c
      ctx.arc(x, y, r, 0, 2 * Math.PI, false)
      ctx.fill()
      ctx.closePath()
    }

    // Remove particles that aren't on the canvas
    var cleanUpArray = function () {
      particles = particles.filter(p => {
        return p.x > -10 && p.y > -10 && p.x < maxWidth && p.y < maxHeight
      })
    }

    var initParticles = function (numParticles, x, y, c) {
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y, c))
      }
      particles.forEach(p => {
        drawParticle(p.x, p.y, p.r, p.c)
      })
    }
    // That thing
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    })()

    // Our Frame function
    var frame = function () {
      // Draw background first
      drawBg(ctx, colorPalette.bg)
      // Update Particle models to new position
      particles.map(p => {
        return updateParticleModel(p)
      })
      // Draw em'
      particles.forEach(p => {
        drawParticle(p.x, p.y, p.r, p.c)
      })
      // Play the same song? Ok!
      window.requestAnimFrame(frame)
    }

    // Click listener
    /**
    document.body.addEventListener('click', function (event) {
      var x = event.clientX,
        y = event.clientY
      cleanUpArray()
      if (particles.length <= MAX_PARTICLES)
        initParticles(config.particleNumber, x, y)
    })
    */
    // First Frame
    frame()

    const timeout = setTimeout(() => {
      // First particle explosion
      initParticles(
        config.particleNumber,
        window.innerWidth / 2,
        window.innerHeight / 2,
        Math.random()
      )

      setThanks(true)
    }, 2300)

    const audio = new Audio('sounds/firework.mp3')
    if (audio !== null) {
      const promise = audio.play()

      if (promise !== undefined) {
        promise.then(() => {}).catch(error => console.error)
      }
    }

    const interval = setInterval(() => {
      cleanUpArray()
      if (particles.length <= MAX_PARTICLES) {
        const timeout = setTimeout(() => {
          initParticles(
            config.particleNumber,
            window.innerWidth * Math.random(),
            (window.innerHeight * Math.random()) / 1.5,
            Math.random()
          )
        }, 2300)

        const audio = new Audio('sounds/firework.mp3')
        if (audio !== null) {
          const promise = audio.play()

          if (promise !== undefined) {
            promise.then(() => {}).catch(error => console.error)
          }
        }
      }
    }, 1500)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <canvas
        id='canvas'
        style={{ position: 'absolute', left: '0pc', top: '0px' }}
      ></canvas>
      <Center
        className='t20'
        h='0px'
        pos='absolute'
        w='100vw'
        p={0}
        m={0}
        left={0}
      >
        <Box maxW='100vw'>
          <Box my={0} p={5} maxW='400px' w='90%' mx='auto'>
            <Image src='img/logo.png' alt='' />
          </Box>
        </Box>
      </Center>
      <Fade in={thanks}>
        <Center className='t40' w='100vw' m={0} pos='absolute' left='0px'>
          <Box mx='auto'>
            <ImageV src='labels/thanks'></ImageV>
          </Box>
        </Center>
        <Center className='t50' w='100vw' m={0} pos='absolute' left='0px'>
          <Flex direction='column'>
            <HeadingV>Let's have a post</HeadingV>
            <SocialButtonsV
              category={category}
              amount={amount}
              toastId={toastId}
            />
          </Flex>
        </Center>
        {restartButton}
      </Fade>
    </>
  )
}

export default ThankYouV
