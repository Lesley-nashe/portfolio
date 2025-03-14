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
import imgasset from "../../assets/IMG_4071.jpg";

const Aboutpage = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        bg="linear-gradient(to right, #d4d4d8, #52525b)"
        py="12"
        px="6"
        width="100%"
        align="center"
        justify="center"
      >
        <Stack
          direction={["column", "column"]}
          width={["100%","80%"]}
        >
          <VStack>
            <Text>Get to know More</Text>
            <Text fontSize="4xl" fontWeight="extrabold">
              About Me
            </Text>
          </VStack>
          <Stack
            direction={["column", "column", "row", "row"]}
            gap={6}
            alignItems="center"
          >
            <Image
              rounded="10%"
              src={imgasset}
              alt="Dan Abramov"
              height="305px"
              width="300px"
            />
            <Stack direction="column" mt={10}>
              <Stack
                alignItems="center"
                direction={["column", "column", "row", "row"]}
                gap={6}
              >
                <Card.Root borderRadius="15px" height="100%" width="300px">
                  <Card.Body gap="2">
                    <Card.Description justifyItems="center">
                      <Heading>Experience</Heading>
                      <Text>6 years</Text>
                      <Text>Full Stack Development</Text>
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
                <Card.Root borderRadius="15px" height="100%" width="300px">
                  <Card.Body gap="2">
                    <Card.Description justifyItems="center">
                      <Heading>Education</Heading>
                      <Text>Bsc Bachelors Degree CS & IS</Text>
                      <Text>BSc Honours</Text>
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
              </Stack>
              <Flex width="100%">
                <Text textAlign={["center","center","left","left"]}>
                  I am a dedicated problem solver with a passion for developing
                  and deploying innovative projects in collaborative
                  environments. I specialize in creating scalable and
                  high-performance solutions tailored to meet both client and
                  business needs. I am passionate about solving problems and
                  always looking for a new challenge.
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
