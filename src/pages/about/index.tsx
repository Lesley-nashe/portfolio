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
import imgasset from "../../assets/IMG_0037.jpg";

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
            <Text fontSize="4xl" fontWeight="extrabold">About Me</Text>
          </VStack>
          <Stack
            alignItems="center"
            direction={["column", "column", "row", "row"]}
          >
            <Image
              rounded="20%"
              src={imgasset}
              alt="Dan Abramov"
              height="305px"
              width="300px"
            />
            <Stack  direction="column">
              <Stack
                alignItems="center"
                direction={["column", "column", "row", "row"]}
              >
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
                  I am a dedicated problem solver with a passion for developing
                  and deploying innovative projects in collaborative
                  environments. I specialize in creating scalable and
                  high-performance solutions tailored to meet both client and
                  business needs. Through my studies and exprience, I found my
                  true passion in cloud development. I am passionate about
                  solving problems and always looking for a new challenge.
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
