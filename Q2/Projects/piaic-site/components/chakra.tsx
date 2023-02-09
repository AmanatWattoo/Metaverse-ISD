"use client";
import {ChakraProvider} from '@chakra-ui/react';
import React from "react";


function ChakraWrapper({children}: {
    children: React.ReactNode
  }) {
    return (
      <ChakraProvider>
        {children}
      </ChakraProvider>
    )
  }
  
  export default ChakraWrapper