import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Metaverse() {
  return (
    <Box>
        <Flex>
            <HStack>
                <Image height={100} width = {800} src="/nature.jpg"/>
            <VStack>
                <Heading>Welcome again </Heading>
                <Heading>Welcome again </Heading>
            </VStack>
            </HStack>
        </Flex>
    </Box>
    )
}
