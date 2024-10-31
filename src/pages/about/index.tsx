
import {
  Box,
  VStack,
  Text,
  Image,
  Stack,
  Card,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Aboutpage = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="linear-gradient(to right, #d4d4d8, #52525b)"
        py="12"
        px="6"
      >
        <Stack direction={["column", "column"]}>
          <VStack>
            <Text>Get to know More</Text>
            <Text>About Me</Text>
          </VStack>
          <Stack
            alignItems="center"
            direction={["column", "column", "row", "row"]}
          >
            <Image
              rounded="10%"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Stack alignItems='center' direction="column">
              <Stack alignItems='center' direction={["column", "column", "row", "row"]}>
                <Card.Root borderRadius="15px" height="40%" width="320px">
                  <Card.Body gap="2">
                    <Card.Description>
                      <Heading>Experience</Heading>
                      <Text>6 years</Text>
                      <Text>Full Stack Development</Text>
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
                <Card.Root borderRadius="15px" height="40%" width="320px">
                  <Card.Body gap="2">
                    <Card.Description>
                      <Heading>Education</Heading>
                      <Text>Bsc Bachelors Degree CS & IS</Text>
                      <Text>BSc Honours</Text>
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
              </Stack>
              <Flex width="500px">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Flex>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Aboutpage;
