'use client'
import { Grid, GridItem } from '@chakra-ui/react'


export default function Footer() {
  return (
    <Grid templateColumns={'repeat(5,1fr)'} gap = '6' bg={'green.900'}>
        <GridItem>I am the footer </GridItem>
        <GridItem>I am the footer </GridItem>
        <GridItem>I am the footer </GridItem>

        

    </Grid>
  )
}
