'use client'

import { Image } from '@chakra-ui/image'
import { Flex, Heading } from '@chakra-ui/layout'
import { Center } from '@chakra-ui/react'
import React from 'react'
import { main } from '@/components/database' 
import HeroSec from '@/components/widgets/HeroSec'
import Wrapper from '@/components/shared/Wrapper'

export default function Home() {
  return (
    <>
    <Center mt={10} bg='gray.200'>    
    <Image width={100} src='/logos/red-p-logo.png'/>
      {main.map((elm)=>(
      <Flex bgImg={''} bg='gray' shadow={'dark-lg'} key={elm.id}>
        <Heading textColor={'facebook.800'}>{elm.Heading}</Heading>
        
      </Flex>
      ))}
    </Center>
  <Wrapper>
  <HeroSec/>
  </Wrapper>   
    </>
  )
}
