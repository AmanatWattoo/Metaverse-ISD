"use client"
import { Box, Button, Flex, Heading, Input, list } from "@chakra-ui/react";
import { useState } from "react";
import { VStack } from "@chakra-ui/react";

const todo =()=>{
    const [list,setList] =useState(["Amanat","Ali","Wattoo"])
return(
    <>
    <VStack>
        <Heading color={"facebook.800"}>Welcome todo app</Heading>
        
        <ul>
            {list.map((elm)=>{
                return<li key={elm}>{elm}---</li>
            })}
        </ul>
    </VStack>
    </>
)    
}

export default todo;