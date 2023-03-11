import { Box, Heading, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import QtCards from "./QtCards";

export default function Programs() {
  return (
    <Box>
        <VStack>
            <Heading>Program of Studies</Heading>
            <Text align={'center'} px = '250px'>Welcome to paksitan and welcome to punjab Welcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and 
            Welcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjabWelcome to paksitan and welcome to punjab
            Welcome to paksitan and welcome to punjab
            welcome to punjab</Text>
        <QtCards ImagePath ='/nature.jpg' Heading='Welcome to heading' desc=''></QtCards>
        <QtCards ImagePath ='/nature.jpg' Heading='Welcome to heading' desc=''></QtCards>
        <QtCards ImagePath ='/nature.jpg' Heading='Welcome to heading' desc=''></QtCards>
        <QtCards ImagePath ='/nature.jpg' Heading='Welcome to heading' desc=''></QtCards>
        </VStack>
    </Box>    
  )
}
