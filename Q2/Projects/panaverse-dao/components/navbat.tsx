"use client"
import { Box, Flex, HStack,Image, VStack} from "@chakra-ui/react";

export default function NavBar (){
    return(
        <>
        <Box>
        <Flex mb={6} p="20ox" bg={"teal"} justifyContent={"space-between"}>
        <Flex direction={"column"}><Image p={10} mb="10px" height={"80px"} src="./logos/panaverse_transparent_small.png"/>
        
            <p>Home</p>
        
        </Flex>
        
        <HStack textDecoration={"underline"} color={"white"} mx={"100px"}>
        
        <p>Home</p>
        <p>Team</p>
        <p>Moe</p>
        </HStack>
            <Flex>
            


            </Flex>
        </Flex>
        </Box>
        </>
    )
}