import Head from '@/app/head'
import {Text, Flex, Heading, SimpleGrid, Box, HStack, useColorMode, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'

export default function PartOne() {
    
    return (
    <>
       
    <SimpleGrid  bg={'black'} minChildWidth='0'>  
       <Flex>
       <Image  src='logos/red-p-logo.png'/>
       </Flex>
       <HStack>
       <Heading color={'yellow'}>Welcome to PIAIC</Heading>
       <ul>
        <li>Home</li>
        <ul>
            <li>Admission</li>
            <li>Course</li>
        </ul>
       </ul>
       </HStack>
    </SimpleGrid>
    
    </>
  )
}
