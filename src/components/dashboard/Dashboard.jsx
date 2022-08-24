import { Box, Flex, Heading, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const nav = useNavigate()
  return (
    <Stack py='20'>
        <Flex px={'8'}  flexDirection="column" pt={'4'}>
      <SimpleGrid columns={{ base: 1,sm:2, xl: 4 }} spacing="35px">
        <Box
          boxShadow={"0px 3.5px 5.5px rgb(0 0 0 / 2%)"}
          borderRadius={"lg"}
          bgColor={"white"}
          py={"6"}
          px={"2"}
          onClick={() => nav("/")}
          transitionDuration={"0.7s"}
          transitionDelay={".5s"}
          transition={"transform .2s"}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            backgroundColor: "red.600",
            color:'white !important'
          }}
        >
          <VStack spacing={"2"}>
            <Heading
              textAlign={"center"}
              pb={"3"}
              fontWeight={"700"}
              fontFamily={"body"}
              fontSize={"lg"}
            >

              Total Users
            </Heading>
            <Text fontWeight={'600'}>2000</Text>
            {/* <AiOutlineUserAdd color={"teal"} fontSize={"2rem"} /> */}
            <Text fontFamily={"cursive"} textAlign={"center"}></Text>
          </VStack>
        </Box>
        <Box
          boxShadow={"0px 3.5px 5.5px rgb(0 0 0 / 2%)"}
          borderRadius={"lg"}
          bgColor={"white"}
          py={"6"}
          px={"2"}
          onClick={() => nav("/")}
          transitionDuration={"0.7s"}
          transitionDelay={".5s"}
          transition={"transform .2s"}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            backgroundColor: "red.600",
            color:'white !important'
          }}
        >
          <VStack spacing={"2"}>
            <Heading
              textAlign={"center"}
              pb={"3"}
              fontWeight={"700"}
              fontFamily={"body"}
              fontSize={"lg"}
            >

              Total Movies
            </Heading>
            <Text fontWeight={'600'}>150</Text>
            {/* <AiOutlineUserAdd color={"teal"} fontSize={"2rem"} /> */}
            <Text fontFamily={"cursive"} textAlign={"center"}></Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Flex>
    </Stack>
  )
}

export default Dashboard