import { Box, Button, Card, CardBody, Flex, Grid, GridItem, Heading, Stat, StatHelpText } from '@chakra-ui/react'
import React from 'react'

export const HeroSec = () => {
  return (
    <>
    <Box>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} bg='gray.200'>
            <GridItem w = '100%' h='70vh'>
        <Flex>
            <Card mt={30} bg ='gray.200' w={'90vh'} boxShadow = 'dark-lg' borderRightRadius={'20px'}>
                <CardBody>
                    <Heading my = '30px' size={'2xl'} > Web 3.0 <b/> Metaverse Dao</Heading>
                    <Heading>Es you earn <br/><br/> learn program </Heading>
                <Flex justifyContent='center'>
                <Button>Apply </Button>
                </Flex>
                <Stat>
                   
                    <StatHelpText>
                        welcome 
                    </StatHelpText>
                </Stat>
                </CardBody>
            </Card>
        </Flex>

            </GridItem>
        </Grid>
    </Box>
    </>
  )
}
