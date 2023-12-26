'use client'

import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Center,
} from '@chakra-ui/react'
import '../styles/Hero.scss'
export default function Hero() {
  return (
    <>
      <Center flexDirection={'column'}>
        <Stack
          as={Box}
          textAlign={'center'}
                    py={{ base: 15, md: 20 }}
          mb={{ base: 16, md: 20 }}
          >
          <Heading
            fontWeight={600}
            lineHeight={'110%'}>
            Olá eu sou Renata Dos Santos<br />
          </Heading>
          <Text color={'white.500'}>
            Sou Artesã & Mãe 
          </Text>
        </Stack>
      <Box mb={20}>

        <div className='sewing-stuff'>
            <div className='tape'>
              <div className='tape-top'></div>
              <div className='tape-bottom'></div>
            </div>
            <div className='pin-cushion'>
              <div className='pins'>
                <div className='pin'></div>
                <div className='pin'></div>
                <div className='pin'></div>
                <div className='pin'></div>
                <div className='pin'></div>
                <div className='pin'></div>
              </div>
              <div className='cushion'></div>
            </div>
            <div className='sewing-machine'>
              <div className='thread'></div>
              <div className='needle'></div>
              <div className='machine-top'></div>
              <div className='machine-right'></div>
              <div className='machine-bottom'></div>
          </div>
        </div>
        <div className='table'></div>
      </Box>
      </Center>

    </>
  )
}